const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
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
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const cryptedPassword = await bcrypt.hash(this.password, salt);
    this.password = cryptedPassword;
    next();
  } catch (error) {}
});
// UserShema.post('save', async function(next){
//   try {

//   } catch (error) {

//   }
// })
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
