const asyncHandler = require("express-async-handler");
const RateModel = require("../models/Ratings");

const getRate = asyncHandler(async (req, res) => {
  try {
    const rate = await RateModel.find({});
    res.status(200).json(rate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createRate = asyncHandler(async (req, res) => {
  try {
    const rate = await RateModel.create(req.body);
    res.status(200).json(rate);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});
module.exports = { getRate, createRate };
