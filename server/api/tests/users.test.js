import request from "supertest";
import app from "../../app.js"; // Ensure your Express app is exported from app.js
import { users } from "../../config/mongoCollections.js";
import bcrypt from "bcrypt";

describe("User Authentication", () => {
  describe("POST /register", () => {
    it("should register a new user successfully", async () => {
      const newUser = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "SecurePass123",
      };

      const res = await request(app)
        .post("/api/users/register") // Adjust the route if necessary
        .send(newUser);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("user");
      expect(res.body).toHaveProperty("token");
      expect(res.body.user).toHaveProperty(
        "email",
        newUser.email.toLowerCase()
      );
      expect(res.body.user).not.toHaveProperty("password");

      // Verify user is in the database
      const usersCollection = await users();
      const userInDb = await usersCollection.findOne({
        email: newUser.email.toLowerCase(),
      });
      expect(userInDb).not.toBeNull();
      expect(userInDb.firstName).toBe(newUser.firstName);
      expect(userInDb.lastName).toBe(newUser.lastName);
      expect(userInDb.email).toBe(newUser.email.toLowerCase());

      // Verify password is hashed
      const isPasswordHashed = await bcrypt.compare(
        newUser.password,
        userInDb.password
      );
      expect(isPasswordHashed).toBe(true);
    });

    it("should not allow registration with an existing email", async () => {
      const existingUser = {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        password: "AnotherPass456",
      };

      // Insert user directly into the database
      const usersCollection = await users();
      const hashedPassword = await bcrypt.hash(existingUser.password, 2);
      await usersCollection.insertOne({
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email.toLowerCase(),
        password: hashedPassword,
      });

      const res = await request(app)
        .post("/api/users/register") // Adjust the route if necessary
        .send(existingUser);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });
    // need test for validating fields
  });

  describe("POST /login", () => {
    beforeEach(async () => {
      // Create a user to test login
      const usersCollection = await users();
      const hashedPassword = await bcrypt.hash("ValidPass789", 2);
      await usersCollection.insertOne({
        firstName: "Alice",
        lastName: "Smith",
        email: "alice.smith@example.com",
        password: hashedPassword,
      });
    });

    it("should login successfully with correct credentials", async () => {
      const credentials = {
        email: "alice.smith@example.com",
        password: "ValidPass789",
      };

      const res = await request(app)
        .post("/api/users/login") // Adjust the route if necessary
        .send(credentials);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("user");
      expect(res.body).toHaveProperty("token");
      expect(res.body.user).toHaveProperty(
        "email",
        credentials.email.toLowerCase()
      );
      expect(res.body.user).not.toHaveProperty("password");
    });

    it("should not login with incorrect password", async () => {
      const credentials = {
        email: "alice.smith@example.com",
        password: "WrongPass123",
      };

      const res = await request(app).post("/api/users/login").send(credentials);

      expect(res.statusCode).toBe(401);
      expect(res.body).toHaveProperty("error");
    });

    it("should not login with non-existent email", async () => {
      const credentials = {
        email: "non.existent@example.com",
        password: "SomePass456",
      };

      const res = await request(app).post("/api/users/login").send(credentials);

      expect(res.statusCode).toBe(401);
      expect(res.body).toHaveProperty("error");
    });
  });
});
