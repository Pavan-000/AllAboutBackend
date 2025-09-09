const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.PORT_URLL);
        console.log("MongoDB database connected")
    } catch (error) {
        console.log("MongoDB Connection Failed : ", error.message)
        process.exit(1);
    }
}
module.exports = connectDB;
