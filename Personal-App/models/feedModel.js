const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
    {
        title : {type : String, required : true,},
        content : {type : String, required : true,},
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
        },
    },
    {
        timestamps : true
    }
)

const Feed = mongoose.model("Feed", feedSchema);
module.exports = Feed;