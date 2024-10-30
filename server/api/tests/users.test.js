import request from "supertest";
import express from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";
import router from "../users/users.controllers.js";
import * as userService from "../users/users.service.js";
import bcrypt from "bcrypt";

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

  require("../users/users.service.js").usersCollection = db.collection("users");
});

afterEach(async () => {
  // Clear collections after each test for isolation
  await db.collection("users").deleteMany({});
});

afterAll(async () => {
  await connection.close();
  await mongod.stop();
});

describe("User Authentication Routes", () => {
  it("should register a user and return user data with a token", async () => {
    const newUser = {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      password: "examplePassword123",
    };

    const response = await request(app)
      .post("/api/users/register")
      .send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toMatchObject({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    });
    expect(response.body).toHaveProperty("token");
  });

  it("should not register a user with an existing email", async () => {
    const existingUser = {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      password: "examplePassword123",
    };

    const response = await request(app)
      .post("/api/users/register")
      .send(existingUser);
    expect(response.statusCode).toBe(400);
  });

  it("should login a registered user and return user data with a token", async () => {

    const loginCredentials = {
      email: existingUser.email,
      password: existingUser.password,
    };

    const response = await request(app)
      .post("/api/users/login")
      .send(loginCredentials);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("user");
    expect(response.body.publicUser).toMatchObject({
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      email: existingUser.email,
    });
    expect(response.body).toHaveProperty("token");
  });

  it("should not login with incorrect credentials", async () => {
    const loginCredentials = {
      email: "nonexistent@example.com",
      password: "wrongPassword123",
    };

    const response = await request(app)
      .post("/api/users/login")
      .send(loginCredentials);
    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty(
      "error",
      "Invalid Password/Email combination"
    );
  });
});
