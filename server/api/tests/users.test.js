import request from "supertest";
import express from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";
import router from "../users/users.controllers.js";
import * as userService from "../users/users.service.js";

let app;
let mongod;
let db;
let connection;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  connection = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = connection.db();

  app = express();
  app.use(express.json());
  app.use("/api/users", router);
});

afterAll(async () => {
  await connection.close();
  await mongod.stop();
});

describe("User Routes", () => {
  it("should create a user and return the user ID", async () => {
    // Using basic data for now but will be changed later
    const user = {
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
    };

    jest.spyOn(userService, "addUser").mockResolvedValue("someUserId");

    const response = await request(app).post("/api/users").send(user);
    expect(response.statusCode).toBe(201);
    expect(response.text).toBe("someUserId"); 
  });

  it("should get a user by ID", async () => {
    const userId = "someUserId";
    const mockUser = {
      _id: userId,
      name: "Jane Doe",
      age: 25,
      email: "janedoe@example.com",
    };

    jest.spyOn(userService, "getUserById").mockResolvedValue(mockUser);

    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(mockUser);
  });

  it("should return 404 if user is not found", async () => {
    const invalidUserId = "61616b93f24d4a54e4d6f0c0";

    jest.spyOn(userService, "getUserById").mockResolvedValue(null);

    const response = await request(app).get(`/api/users/${invalidUserId}`);
    expect(response.statusCode).toBe(404);
  });
});
