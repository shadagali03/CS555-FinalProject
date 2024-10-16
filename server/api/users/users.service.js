import { ObjectId } from "mongodb";
import { users } from "../../config/mongoCollections.js";

const addUser = async (user) => {
  const userCollection = await users();
  const insertInfo = await userCollection.insertOne(user);
  if (insertInfo.insertedCount === 0) throw "Could not add user";
  return insertInfo.insertedId;
};

const getUserById = async (user_id) => {
  const userCollection = await users();
  const user = await userCollection.findOne({ _id: user_id });
  return user;
};

export { addUser, getUserById };
