const authService = require("../services/authService");

const login = async (req, res, next) => {
    try {
        const user = await authService.loginUser(req.body);
        if(!user)
            res.status(404).json({"message" : "User not Found"});
        res.status(200).json({message : "user logged succesfully", user : user});
    } catch (error) {
        next(error)
    }
};

const register = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
    register,
}
