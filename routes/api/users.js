const User = require('../../models/User');
const Favorite = require('../../models/Favorite');

console.log(typeof Favorite)

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
  //console.log(body)
  Favorite.create({
    userID: req.body.auth.user.id,
    hikeID: req.body.id,
    name: req.body.name,
    difficulty: req.body.difficulty,
    elevation: req.body.elevation,
    imgMedium: req.body.imgMedium,
    summary: req.body.summary
  }).then(dbFavorite => {
    res.json(dbFavorite)
  }).catch(err => {
    res.status(400).json(err);
  });
})

router.get('/favorite/:id', function(req, res) {
  //console.log('id: ' + req.params.id)
  Favorite.find({userID: req.params.id})
    .then(favorite => {
      res.json(favorite)
    })
})

module.exports = router;