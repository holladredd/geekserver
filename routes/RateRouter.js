const RateRouter = require("express").Router();

const { createRate, getRate } = require("../controller/RatesController");

RateRouter.route("/").get(getRate).post(createRate);

module.exports = RateRouter;
