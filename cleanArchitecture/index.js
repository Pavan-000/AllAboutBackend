// Request → Route → Controller → Service → DB → Response

require('dotenv').config()
const express = require('express');
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes.js")
const errorHandler = require("./middlewares/errorHandler")

const app = express();
app.use(express.json())

//connectDB
connectDB();



//routes
app.use("/api/users", userRoutes);

//error handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Listening at PORT : ${PORT}`)
})