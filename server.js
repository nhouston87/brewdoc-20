const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Main app object
const app = express();

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up mongoose to connect to mlab MongoDB deployment
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected to mLab"))
  .catch(err => console.log(err));

// Configure port var and set app to listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App started on port ${PORT}`));
