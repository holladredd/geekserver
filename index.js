const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const backgroundRouter = require("./routes/BackgroundRouter");
const BookRouter = require("./routes/BooksRouter");
const RateRouter = require("./routes/RateRouter");
const CommentRouter = require("./routes/CommentsRouter");
const GenresRouter = require("./routes/GenresRouter");
const UserRouter = require("./routes/UsersRouter");
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

app.use("/backgroundimages", backgroundRouter);
app.use("/books", BookRouter);
app.use("/ratings", RateRouter);
app.use("/comments", CommentRouter);
app.use("/genres", GenresRouter);
app.use("/users", UserRouter);
