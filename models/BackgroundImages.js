const mongoose = require("mongoose");

const backgroundSchema = new mongoose.Schema({
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
});

const BackgroundModel = mongoose.model("backgroundimages", backgroundSchema);
module.exports = BackgroundModel;
