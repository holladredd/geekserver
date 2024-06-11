const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema(
  {
    //define data schema
    name: {
      type: String,
      required: true,
    },
    color: {
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

const GenreModel = mongoose.model("genres", genreSchema);
module.exports = GenreModel;
