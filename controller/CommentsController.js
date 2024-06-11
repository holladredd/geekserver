const asyncHandler = require("express-async-handler");
const CommentModel = require("../models/Comments");

const getComments = asyncHandler(async (req, res) => {
  try {
    const comments = await CommentModel.find({});
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createComments = asyncHandler(async (req, res) => {
  try {
    const comments = await CommentModel.create(req.body);
    res.status(200).json(comments);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});
module.exports = { getComments, createComments };
