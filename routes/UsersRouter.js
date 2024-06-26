const UserRouter = require("express").Router();

const { createUsers, getUsers } = require("../controller/UsersController");

UserRouter.route("/").post(createUsers);
UserRouter.route("/login").post(getUsers);

module.exports = UserRouter;
