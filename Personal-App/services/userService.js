const User = require("../models/userModel")

const getAllUsers = async () => {
    return await User.find();
}

const getUser = async (id) => {
    return await User.findById(id);
}

const createUser = async (userData) => {
    return await User.create(userData);
}

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, {new : true});
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}