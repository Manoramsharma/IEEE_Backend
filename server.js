require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api", require("./routes/authRouter"));
app.use("/api", require("./routes/meetRouter"));

const URI = process.env.MONGOURI;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected mongoDB");
  }
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server app is running on port", port);
});
module.exports = app;
