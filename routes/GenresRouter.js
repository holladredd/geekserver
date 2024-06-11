const GenreRouter = require("express").Router();

const { createGenres, getGenres } = require("../controller/GenresController");

GenreRouter.route("/").get(getGenres).post(createGenres);

module.exports = GenreRouter;
