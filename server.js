const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const path = require('path');

const users = require('./routes/api/users');
const hikes = require('./routes/api/hikes')

const router = express.Router();

const app = express();


if(process.env.NODE_ENV === "production")
{
  app.use(express.static('client/build'));
}

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
  .connect(db,
    // process.env.MONGODB_URI || "mongodb://fairweather:fa1rweather@ds139956.mlab.com:39956/heroku_z0n9lrbw",

    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use('/api/favorite', users)
app.use('/api/completed', users)
// app.use("/api/hikes", hikes);

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));