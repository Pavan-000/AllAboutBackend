// req -> index.js -> routes ->  controllers -> services -> config (db)
require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");
const protect = require("./middlewares/authMiddleware");


const app = express();
app.use(express.json());

// quick root check
app.get("/", (req, res) => {
    res.send("API running");
})

// Database connection
connectDB();

//auth routes
app.use("/api/users", authRoutes);

// all CRUD routes
// app.use("/api/users", userRoutes);
app.use("/api/users", protect, userRoutes);

//error handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`);
})