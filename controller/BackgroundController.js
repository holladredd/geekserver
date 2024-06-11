const asyncHandler = require("express-async-handler");
const BackgroundModel = require("../models/BackgroundImages");

const getBackground = asyncHandler(async (req, res) => {
  try {
    const background = await BackgroundModel.find({});
    res.status(200).json(background);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createBackground = asyncHandler(async (req, res) => {
  try {
    // res.send(res.body);

    const background = await BackgroundModel.create(req.body);
    res.status(200).json(background);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);

    // res.status(500).json(err);
  }
});
module.exports = { getBackground, createBackground };
