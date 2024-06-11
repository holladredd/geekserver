const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  //define data schema
  bookid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const CommentModel = mongoose.model("comments", commentSchema);
module.exports = CommentModel;
