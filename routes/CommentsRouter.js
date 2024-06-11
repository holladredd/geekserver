const CommentRouter = require("express").Router();

const {
  createComments,
  getComments,
} = require("../controller/CommentsController");

CommentRouter.route("/").get(getComments).post(createComments);

module.exports = CommentRouter;
