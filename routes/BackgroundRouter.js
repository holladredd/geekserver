const backgroundRouter = require("express").Router();

const {
  createBackground,
  getBackground,
} = require("../controller/BackgroundController");

backgroundRouter.route("/").get(getBackground).post(createBackground);

module.exports = backgroundRouter;
