const User = require("../models/userModel");
const generateToken = require("../utils/generateToken")

const registerUser = async (userData) => {
    const {name, email, password} = userData;

    const userExists = await User.findOne({email});
    if(userExists){
        const err = new Error("User already Exists");
        err.statusCode  = 400;
        throw err;
    }

    const user = await User.create({name, email, password});

    return {
        _id : user._id,
        name : user.name,
        email : user.email,
        token : generateToken(user._id)
    };
};

const loginUser = async (userData) => {
    console.log(userData);
    const user = await User.findOne({email : userData.email});
    if(user &&  (await user.matchPassword(userData.password))){
        return {
            _id :  user._id,
            name : user._name,
            email : user.email,
            token : generateToken(user._id),
        };
    }

    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
};

module.exports = {
    registerUser,
    loginUser,
}