const BookRouter = require("express").Router();

const { createBook, getBook } = require("../controller/BooksController");

BookRouter.route("/").get(getBook).post(createBook);

module.exports = BookRouter;
