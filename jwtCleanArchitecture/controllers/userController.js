const userService = require("../services/userService")

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
            res.status(404).json({"message" : "User Not Found"});
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const newUser = await userService.createUser(req.body);

        //don't return password;
        newUser.password = undefined;
        res.status(201).json(newUser);  
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const updateUser = await userService.updateUser(req.params.id, req.body);
        if(!updateUser)
            return res.status(404).json({"message " : "User Not Found"});
        res.status(200).json(updateUser)
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await userService.deleteUser(req.params.id);
        if(!deleteUser)
            res.status(404).json({"message" : "User not Found"});
        res.json({"message " : "User Deleted"})
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};