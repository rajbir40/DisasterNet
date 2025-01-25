const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require("mongoose");
const { connectDB } = require("./Config/db.js");
const cookieParser = require('cookie-parser');
const http = require('http');
const {initializeSocket} = require('./Services/socket');
const apiRoutes = require('./Routes/apiRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express App
const app = express();

// Initialize Socket.io
const server = http.createServer(app);
initializeSocket(server);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Basic Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Health Check Route
app.get("/api/health", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).json({ message: "MongoDB is alive and connected!" });
  } catch (error) {
    res.status(500).json({ message: "Error connecting to MongoDB.", error });
  }
});

// Use routes
app.use("/api", apiRoutes);



// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;