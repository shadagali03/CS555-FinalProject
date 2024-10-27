import jwt from "jsonwebtoken";
// import { SECRET_KEY } from "../config/config";
import { InvalidTokenError } from "./errors.js";

export const genToken = async (data) => {
  return jwt.sign(data, "changethislater", {
    expiresIn: "1h",
  });
};

export const createUserToken = async (user) => {
  return genToken(user);
};

export const validateUserToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, "changethislater"); //Use SECRET_KEY later
    if (decodedToken) return decodedToken;
    else throw new InvalidTokenError();
  } catch (err) {
    if (err instanceof InvalidTokenError) {
      console.log("Invalid Token");
      return undefined;
    }
    console.log(
      "Error caught while trying to verify token: ",
      token,
      "Error: ",
      err
    );
    throw err;
  }
};
