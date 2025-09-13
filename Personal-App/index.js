require("dotenv").config();
const express = require("express");
const connectedDB = require("./config/db");
const authroutes = require("./routes/authRoutes");
const feedRoutes = require("./routes/feedRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

// quick root check
app.get("/", (req, res) => {
    res.send("API running");
})

//Database Connection
connectedDB()

// Auth Routes
app.use("/api/feed", authroutes);

// Feed Routes 
app.use("/api/feed", feedRoutes);

// error handler middleware
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server connected to the Port : ${PORT}`);
})