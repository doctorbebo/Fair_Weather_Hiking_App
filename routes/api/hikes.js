const Hike = require('../../models/hikes');
const mongojs = require("mongojs");
const path = require("path");

const express = require("express");
const router = express.Router();


//Add hike information to
router.post("/api/hikes", ({body}, res) => {
    console.log("this is working");
    Hike.create(body)
    .then(addHike =>{
        res.json(addHike);
    })
    .catch(err => {
        res.status(400).json(err);
    });
  });


router.get("/api/hikes", (req, res) => {
    console.log("this is working");
    Hike.find({})
      .then(getHikes => {
        res.json(getHikes);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
router.get("/find/:id", (req, res) =>{
    console.log("attempting to find")
    Hike.findOne(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        (err, found) =>{
            if(err){
                console.log(err);
                res.send(err);
            }else{
                console.log(found);
                res.send(found)
            }
        }
    )
})

router.get("/update/:id", (req, res) =>{
    console.log("attempting to update")
    Hike.updateOne(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
           $set:{
               hike: req.body.hike,
               report: req.body.report,
               rating: req.body.rating,
               modified: Date.now()
           } 
        },
        (err, found) =>{
            if(err){
                console.log(err);
                res.send(err);
            }else{
                console.log(editied);
                res.send(edited)
            }
        }
    )
})

module.exports = router;