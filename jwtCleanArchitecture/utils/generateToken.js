const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    return jwt.sign({id}, "karthika", { //process.env.JWT_SECRET
        expiresIn : "10d",
    });
};

module.exports = generateToken