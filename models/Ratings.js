const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema(
  {
    //define data schema
    bookid: {
      type: String,
      required: true,
    },
    values: {
      type: Number,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RateModel = mongoose.model("ratings", rateSchema);
module.exports = RateModel;
