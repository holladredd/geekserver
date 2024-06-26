// require("dotenv").config();
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/Users");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const getUsers = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });
  try {
    if (!user) {
      res.send("wrong username");
      return;
    }
    const isvalid = await bcrypt.compare(password, user.password);
    if (isvalid) {
      res.json("success");
      res.status(200).json(users);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
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
