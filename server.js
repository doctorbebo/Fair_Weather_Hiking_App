const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const path = require('path');

const users = require('./routes/api/users');
const hikes = require('./routes/api/hikes')

const router = express.Router();

const app = express();


const publicPath = path.join(__dirname, 'client/build');
app.use(express.static(publicPath));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://fairweather:fa1rweather@ds139956.mlab.com:39956/heroku_z0n9lrbw",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected (New)"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use('/api/favorite', users)
// app.use("/api/hikes", hikes);


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));