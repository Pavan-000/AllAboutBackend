const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authController");

router.post("/login", authControllers.login);
router.post("/register", authControllers.register);

module.exports = router;