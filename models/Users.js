const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    age: {
      type: Number,
      unique: false,
    },
    password: {
      type: String,
      unique: false,
    },
    confirmpassword: {
      type: String,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
