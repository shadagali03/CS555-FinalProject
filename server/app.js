import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import configRoutes from "./api/index.js";
import { BadRequestError, UnauthorizedError } from "./utils/errors.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/ping", async (req, res) => {
  return res.status(200).json({
    ping: "pong",
  });
});

// Configure Routes
configRoutes(app);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  return res.status(status).json({
    error: { message, status },
  });
});

export default app;
