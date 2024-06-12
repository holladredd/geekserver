const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    //define data schema
    bookid: {
      type: String,
      required: false,
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
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = mongoose.model("comments", commentSchema);
module.exports = CommentModel;
