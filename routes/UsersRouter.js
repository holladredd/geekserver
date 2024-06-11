const UserRouter = require("express").Router();

const { createUsers, getUsers } = require("../controller/UsersController");

UserRouter.route("/").get(getUsers).post(createUsers);

module.exports = UserRouter;
