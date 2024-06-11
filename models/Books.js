const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    //define data schema
    title: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BookModel = mongoose.model("books", bookSchema);
module.exports = BookModel;
