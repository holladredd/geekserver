const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const backgroundRouter = require("./routes/BackgroundRouter");
const BookRouter = require("./routes/BooksRouter");
const RateRouter = require("./routes/RateRouter");
const CommentRouter = require("./routes/CommentsRouter");
const GenresRouter = require("./routes/GenresRouter");
const UserRouter = require("./routes/UsersRouter");
const UserModel = require("./models/Users");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
let conn;

mongoose
  .connect(process.env.URL)
  .then((res) => {
    console.log(`connected to database ${res.connection.host}`);
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
    conn = res;
  })
  .catch((err) => console.log(err));

// Query for home page
app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
  // res.send(req.body);
});

// app.post("/users/login", (req, res) => {
//   const { username, password } = req.body;
//   UserModel.findOne({ username: username }).then((user) => {
//     if (user) {
//       bcrypt.compare(password, user.password, (err, response) => {
//         if (err) {
//           res.json("the password is incorrect");
//         }
//         if (response) {
//           res.json("success");
//         }
//       });
//     } else {
//       res.json("no record found");
//     }
//   });
// });
app.use("/backgroundimages", backgroundRouter);
app.use("/books", BookRouter);
app.use("/ratings", RateRouter);
app.use("/comments", CommentRouter);
app.use("/genres", GenresRouter);
app.use("/users", UserRouter);
app.use("/users/login", UserRouter);
