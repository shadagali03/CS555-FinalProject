// tests/setup.js
import { MongoMemoryServer } from "mongodb-memory-server";
import {
  dbConnection,
  closeConnection,
} from "../../config/mongoConnections.js";

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  // Override environment variables for testing
  process.env.MONGO_URI = uri;
  process.env.DB_NAME = "testdb";

  await dbConnection(); // Connect to in-memory MongoDB
});

afterAll(async () => {
  await closeConnection(); // Close MongoDB connection
  if (mongoServer) {
    await mongoServer.stop(); // Stop in-memory MongoDB
  }
});

beforeEach(async () => {
  const db = await dbConnection();
  const collections = await db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});
