import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { BadRequestError } from "../../utils/errors.js";
import { createUserToken } from "../../utils/tokens.js";
import { users } from "../../config/mongoCollections.js";
import { UnauthorizedError } from "../../utils/errors.js";

const BCRYPT_WORK_FACTOR = 2;

export const loginUser = async (creds) => {
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
