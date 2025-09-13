const express = require("express");
const router = express.Router();
const feedControllers = require("../controllers/feedController");
const protect = require("../middlewares/authMiddleware")

router.get("/", protect, feedControllers.getAllFeed);
router.post("/", protect, feedControllers.createFeed);
router.get("/:id", protect, feedControllers.getFeedById);
router.put("/:id", protect, feedControllers.updateFeedById);
router.delete("/:id", protect, feedControllers.deleteFeed);

module.exports = router;