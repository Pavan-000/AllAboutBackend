const userService = require("../services/userService");

const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);

        user.password = undefined;
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        const user = await userService.getUser(req.params.id);
        if(!user)
            res.status(404).json({"message" : "User not Found"});
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if(!updateUser)
            res.status(404).json({"message" : "User not Found"});
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await userService.deleteUser(req.params.id);
        if(!deleteUser){
            res.status(404).json({"message" : "User not Found"});
        }
        res.json({message : "User Deleted Successfully"})
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
};
