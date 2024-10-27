import jwt from "jsonwebtoken";
import { validateUserToken } from "../utils/tokens.js";
import {
  UnauthorizedError,
  InvalidTokenError,
  UnexpectedError, // Add this in getUserFromToken later
} from "../utils/errors.js";
// import { SECRET_KEY } from "../config/config.js";

export const getJWT = async ({ headers }) => {
  const authToken = headers.bearer;
  if (!authToken || authToken === "undefined" || authToken === "null") {
    console.log("Invalid header: ", headers);
    throw new UnauthorizedError("Invalid header found");
  }
  return authToken;
};

export const getUserFromToken = async (req, res, next) => {
  console.log("Getting User from Token...");
  try {
    const token = await getJWT(req);
    if (token) {
      const user = jwt.verify(token, "changethislater"); // Use SECRET_KEY later
      return user;
    } else {
      throw new InvalidTokenError();
    }
  } catch (err) {
    throw err; // Specify errors later
  }
};

export const requireAuthenticatedUser = async (req, res, next) => {
  console.log("Authenticating User...");
  try {
    const user = await getUserFromToken(req);
    if (!user) {
      console.log("No User Retrieved!");
      throw new UnauthorizedError();
    }

    res.locals.user = user;
    return next();
  } catch (err) {
    console.log(err); // Token ends up here
    return next(err); // Specify what errors later
  }
};

export default {
  requireAuthenticatedUser,
};
