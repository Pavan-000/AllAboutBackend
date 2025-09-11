const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        name : {type : String, required : true},
        email : {type : String, required : true, email : true},
        password : {type : String, required : true},
    },
    {
        timestamps : true
    }
)

// hash password before save
userSchema.pre("save", async function (next) {
    if(!this.isModified("password"))
        return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// instance method to compare password 
userSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;