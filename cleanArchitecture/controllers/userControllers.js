const userService = require("../services/userServices");

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if(!user)
            return res.status(404).json({message : "User Not found"})
        res.json(user)
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if(!updatedUser)
            return res.status(404).json({message : "User Not found"});
        res.json(updatedUser)
        
    } catch (error) {
        next(error);
    }
}
const createUser = async (req, res, next) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await userService.deleteUser(req.params.id);
        if(!deleteUser)
            res.status(404).json({message : "User Not Found"});
        res.json({message : "User Deleted"})
    } catch (error) {
        next(error);
    }
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};