const asyncHandler = require("express-async-handler");
const UserModel = require("../models/Users");

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createUsers = asyncHandler(async (req, res) => {
  try {
    const users = await UserModel.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});
module.exports = { getUsers, createUsers };
