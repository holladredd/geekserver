const asyncHandler = require("express-async-handler");
const BookModel = require("../models/Books");

const getBook = asyncHandler(async (req, res) => {
  try {
    const book = await BookModel.find({});
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createBook = asyncHandler(async (req, res) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});
module.exports = { getBook, createBook };
