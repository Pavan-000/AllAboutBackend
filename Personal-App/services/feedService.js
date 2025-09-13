const Feed = require("../models/feedModel");

const createFeed = async (userId, feedData) => {
    return await Feed.create({...feedData, user : userId});
};

const getAllFeed = async (userId) => {
    return await Feed.find({user : userId});
};

const getFeedById = async (id, userId) => {
    return await Feed.findOne({_id : id, user : userId});
};

const updateFeed = async (id, userId, userData) => {
    return await Feed.findByIdAndUpdate({_id : id, user : userId}, userData, {
        new : true,
    });
};

const deleteFeed = async (id, userId) => {
    return await Feed.findByIdAndDelete({_id : id, user : userId});
};

module.exports = {
    createFeed,
    getAllFeed,
    getFeedById,
    updateFeed,
    deleteFeed,
};

