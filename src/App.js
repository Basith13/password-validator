const express = require("express");
// const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("config");

// require("./models");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

// Start the server
const port = 5500;
app.listen(port, () => {
  console.log(`Server Started on  ${port}`);
});

// DB Connection

const database = config.get("dbURL");

mongoose
  .connect(database, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

module.exports = app;
