import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import configRoutes from "./api/index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Health Check
app.get("/ping", async function (req, res) {
  return res.status(200).json({
    ping: "pong",
  });
});

// Routes
configRoutes(app);

// Error Handling
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  return res.status(status).json({
    error: { message, status },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
