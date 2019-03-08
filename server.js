/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const blog = require("./routes/api/blog");

const app = express();

// START MIDDLEWARE
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport
app.use(passport.initialize());
require("./config/passport")(passport);

// END MIDDLEWARE

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/blog", blog);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
