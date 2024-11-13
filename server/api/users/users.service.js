import bcrypt from "bcrypt";
import { BadRequestError, UnauthorizedError } from "../../utils/errors.js";
import { createUserToken } from "../../utils/tokens.js";
import { users } from "../../config/mongoCollections.js";
import validateInput from "../../utils/validate.js";
import { loginSchema, registerSchema } from "../../utils/schemas.js";

// A higher work factor (e.g., 12) makes hashing more secure but slower.
// const BCRYPT_WORK_FACTOR = 12;
const BCRYPT_WORK_FACTOR = 2;

export const loginUser = async (creds) => {
  // Validate user input against the login schema
  const { email, password } = validateInput(creds, loginSchema);

  // Normalize email to ensure case-insensitive matching
  const normalizedEmail = email.toLowerCase();

  // Access the users collection from the database
  const usersCollection = await users();

  // Find the user by their normalized email
  const user = await usersCollection.findOne({ email: normalizedEmail });
  if (user) {
    // Compare the provided password with the stored hashed password
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      // Exclude the password from the user object before generating the token
      const { password: _, ...userWithoutPassword } = user;
      // Create a JWT token for the authenticated user
      const userToken = await createUserToken(userWithoutPassword);
      // Return the user data and token
      return { user: userWithoutPassword, userToken };
    }
  }
  // Throw an unauthorized error if user is not found or password is invalid
  throw new UnauthorizedError("Invalid Password/Email combination");
};

export const registerUser = async (creds) => {
  try {
    // Validate user input against the registration schema
    const { firstName, lastName, email, password } = validateInput(
      creds,
      registerSchema
    );

    // Normalize email to ensure uniqueness regardless of case
    const normalizedEmail = email.toLowerCase();

    // Access the users collection from the database
    const usersCollection = await users();

    // Check if a user with the normalized email already exists
    const existingUser = await usersCollection.findOne({
      email: normalizedEmail,
    });
    if (existingUser)
      throw new BadRequestError(
        `User with Email ${normalizedEmail} already exists`
      );

    // Hash the user's password for secure storage
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const user = {
      firstName,
      lastName,
      email: normalizedEmail,
      password: hashedPassword,
    };

    // Insert the new user into the database
    const result = await usersCollection.insertOne(user);

    // Retrieve the inserted user using the inserted ID
    const insertedUser = await usersCollection.findOne({
      _id: result.insertedId,
    });

    // Ensure that the user was successfully inserted
    if (!insertedUser) {
      throw new Error("User insertion failed");
    }

    // Exclude the password from the user object before generating the token
    const { password: _, ...userWithoutPassword } = insertedUser;

    // Create a JWT token for the newly registered user
    const userToken = await createUserToken(userWithoutPassword);

    // Return the user data and token
    return { user: userWithoutPassword, userToken };
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error in registerUser:", error);
    // Re-throw the error to be handled by middleware or higher-level handlers
    throw error;
  }
};
