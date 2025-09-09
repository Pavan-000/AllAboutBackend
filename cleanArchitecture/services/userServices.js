const {User} = require("../models/userModel")

const getAllUsers = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const createUser = async (Userdata) => {
    return await User.create(Userdata);
}

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, {new : true})
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = {getAllUsers, getUserById, createUser, updateUser, deleteUser};