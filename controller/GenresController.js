const asyncHandler = require("express-async-handler");
const GenreModel = require("../models/Genres");

const getGenres = asyncHandler(async (req, res) => {
  try {
    const genres = await GenreModel.find({});
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createGenres = asyncHandler(async (req, res) => {
  try {
    const genres = await GenreModel.create(req.body);
    res.status(200).json(genres);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});
module.exports = { getGenres, createGenres };
