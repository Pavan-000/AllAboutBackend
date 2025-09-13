const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://epk13_db_user:H67UZcC5wnxjR4rx@ownworkspace.jg7iwfa.mongodb.net/?retryWrites=true&w=majority&appName=ownWorkspace", {

        });
        console.log("MongoDB connected..");
    } catch (error) {
        console.log("MongoDB connection failed");
    }
}

module.exports = connectDB;