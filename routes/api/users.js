const User = require('../../models/User');
const Favorite = require('../../models/Favorite');
const Completed = require('../../models/Completed');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

router.post("/register", (req, res) => {
    
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
  
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

router.post('/login', function(req,res) {
    console.log('req.body: ' + req.body)
    const { errors, isValid } = validateLoginInput(req.body);
  
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" })
        }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
    
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    })
})

router.post('/favorite', function(req,res) {
  //console.log('users.js hike id: ' + req.body.id)
  Favorite.findOne({
    id : req.body.id,
    userID: req.body.auth.user.id
  })
  .then(res => {
    // console.log('res: ')
    // console.log(res)
    if(res == null) {
      Favorite.create({
        userID: req.body.auth.user.id,
        id: req.body.id,
        name: req.body.name,
        difficulty: req.body.difficulty,
        high: req.body.high,
        imgMedium: req.body.imgMedium,
        summary: req.body.summary,
        ascent: req.body.ascent,
        length: req.body.length,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        location: req.body.location
      }).then(dbFavorite => {
        res.json(dbFavorite)
      }).catch(err => {
        res.status(400).json(err);
      });
    }
    else {
      console.log('hike already in favorites')
    }
  })

})

router.post('/completed', function(req,res) {
  // console.log(req.body)
  Completed.create({
    userID: req.body[0].auth.user.id,
    id: req.body[0].id,
    completedId: req.body[0]._id,
    name: req.body[0].name,
    difficulty: req.body[0].difficulty,
    high: req.body[0].high,
    imgMedium: req.body[0].imgMedium,
    summary: req.body[0].summary,
    latitude: req.body[0].latitude,
    longitude: req.body[0].longitude,
    ascent: req.body[0].ascent,
    length: req.body[0].length,
    location: req.body[0].location,
    userComment: req.body[1].userComment
  }).then(dbCompleted => {
    console.log(dbCompleted)
    res.json(dbCompleted)
  }).catch(err => {
    res.status(400).json(err);
  });
})

router.get('/completed/:id', function(req, res) {
  //console.log('id: ' + req.params.id)
  Completed.find({userID: req.params.id})
    .then(completed => {
      console.log(completed)
      res.json(completed)
    })
})

router.get('/favorite/:id', function(req, res) {
  Favorite.find({userID: req.params.id})
    .then(favorite => {
      res.json(favorite)
    })
})

router.delete('/delete/:id/:userID', function(req,res) {
  console.log(req.params)
  Favorite.findOneAndDelete({
    id: req.params.id,
    userID: req.params.userID
  })
    .then(hike => {
      console.log("Successful deletion");
      //console.log('deleted: ' + hike)
    })
})
router.delete('/delete/:day', function(req,res) {
  console.log(req.params)
  Completed.findOneAndDelete({
    day: req.params.day,
  })
    .then(hike => {
      console.log("Successful deletion");
      //console.log('deleted: ' + hike)
    })
})

module.exports = router;