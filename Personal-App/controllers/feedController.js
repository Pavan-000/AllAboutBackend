const feedService = require("../services/feedService");

const createFeed = async (req , res , next ) => {
    try {
        const feed = await feedService.createFeed(req.user._id, req.body);
        res.status(201).json({message : "feed created succcesfully", feed});
    } catch (error) {
        next(error);
    }
};

const getAllFeed = async (req, res, next) => {
    try {
        const feed = await feedService.getAllFeed(req.user._id);
        res.status(200).json(feed);
    } catch (error) {
        next(error);
    }
}

const getFeedById = async (req, res, next) => {
    try {
        const feedById = await feedService.getFeedById(req.params.id, req.user._id);
        if(!feedById)
            res.status(404).json({message : "Feed Not Found"});
        res.status(200).json(feedById);
    } catch (error) {
        next(error);
    }
};

const updateFeedById = async (req, res, next) => {
    try {
        const feedById = await feedService.updateFeed(req.params.id, req.user._id, req.body);
        if(!feedById)
                res.status(404).json({message : "Feed Not Found"});
        res.status(200).json(feedById);
    } catch (error) {
        next(error);
    }
};

const deleteFeed = async (req, res, next) => {
    try {
        const deleteFeed = await feedService.deleteFeed(req.params.id, req.user._id);
        if(!deleteFeed)
            res.status(404).json({message : "Feed Not Found"});
        res.status(200).json({message : "feed deleted"});
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createFeed, 
    getAllFeed,
    getFeedById,
    deleteFeed,
    updateFeedById
};