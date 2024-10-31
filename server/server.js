// src/server.js
import app from "./app.js";
import { dbConnection } from "./config/mongoConnections.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await dbConnection(); // Connect to MongoDB using dbConnection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // Exit process with failure
  }
};

startServer();
