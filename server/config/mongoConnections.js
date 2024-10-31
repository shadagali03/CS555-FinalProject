// src/config/mongoConnections.js
import { MongoClient } from "mongodb";
import { mongoConfig } from "./dbSettings.js";

const uri = process.env.MONGO_URI || mongoConfig.serverUrl;
const dbName = process.env.DB_NAME || mongoConfig.database;

let _connection = undefined;
let _db = undefined;

const dbConnection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    _db = _connection.db(dbName);
    console.log(`Connected to MongoDB: ${dbName}`);
  }

  return _db;
};

const closeConnection = async () => {
  if (_connection) {
    await _connection.close();
    _connection = undefined;
    _db = undefined;
    console.log("MongoDB connection closed.");
  }
};

export { dbConnection, closeConnection };
