import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { BadRequestError } from "../../utils/errors.js";
import { createUserToken } from "../../utils/tokens.js";
import { users } from "../../config/mongoCollections.js";
import { UnauthorizedError } from "../../utils/errors.js";

const BCRYPT_WORK_FACTOR = 2;



/*
  Code smell 1: No input validation for credentials
    - Potential Code smell 1.5: If i add validation in the method it could create duplicated code and could look messy
  Code smell 2: Hardly an comments or documentation

  In terms of tools, I primary used VSCode to identify the code smells with leveraging the ESLint and Prettier extensions.
  I used rename refactoring to rename variables and functions to make the code more readable. I also used move to file
  to move functions to a separate file to make the code more modular. I also used extract function to extract code into
  separate functions to make the code more readable.
*/

export const loginUser = async (creds) => {
  // There is no input validation for credentials which can cause all sorts of issues
  const { email, password } = creds;

  const normalizedEmail = email.toLowerCase();

  const usersCollection = await users();
  const user = await usersCollection.findOne({ email: normalizedEmail });
  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      delete user.password;
      const userToken = await createUserToken(user);
      return { user, userToken };
    }
    // wrong password
  }
  throw new UnauthorizedError("Invalid Password/Email combination");
};

export const registerUser = async (creds) => {
  // There is no input validation for credentials which can cause all sorts of issues
  const { firstName, lastName, email, password } = creds;

  const normalizedEmail = email.toLowerCase();

  const usersCollection = await users();
  const existingUser = await usersCollection.findOne({
    email: normalizedEmail,
  });
  if (existingUser)
    throw new BadRequestError(
      `User with Email ${normalizedEmail} already exists`
    );

  const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  let user = {
    firstName,
    lastName,
    email: normalizedEmail,
    password: hashedPassword,
  };

  const result = await usersCollection.insertOne(user);

  user = await usersCollection.findOne({ _id: result.insertedId });
  delete user.password;

  const userToken = await createUserToken(user);
  return { user, userToken };
};
