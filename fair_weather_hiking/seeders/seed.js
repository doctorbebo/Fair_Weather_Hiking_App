const mongoose = require("mongoose");
const db = require("../models/hikes")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fairweather", {
  useNewUrlParser: true
});

const hikeseed = [
  {
    trail: "Angles Landing",
    reports: "Hot and sunny.",
    rating: 4.5,
    updated: new Date().setDate(new Date().getDate()-10),
  },
  {
    trail: "The Narrows",
    reports: "Wet and shady.",
    rating: 4.5,
    updated: new Date().setDate(new Date().getDate()-9),

  },
  {
    trail: "Mt Rainer ",
    reports: "wet and cloudy.",
    rating: 4.5,
    updated: new Date().setDate(new Date().getDate()-8),

  },
  // {
  //   trail: "Angles Landing",
  //   reports: "Hot and sunny.",
  //   rating: 4.5,
  //   updated: new Date().setDate(new Date().getDate()-7),

  // },
  // {
  //   trail: "Angles Landing",
  //   reports: "Hot and sunny.",
  //   rating: 4.5,
  //   updated: new Date().setDate(new Date().getDate()-6),

  // },
  // {
  //   trail: "Angles Landing",
  //   reports: "Hot and sunny.",
  //   rating: 4.5,
  //   updated: new Date().setDate(new Date().getDate()-5),


  // },
  // {
  //   trail: "Angles Landing",
  //   reports: "Hot and sunny.",
  //   rating: 4.5,
  //   updated: new Date().setDate(new Date().getDate()-3),

  // },
  // {
  //   updated: new Date().setDate(new Date().getDate()-2),

  // },
  // {
  //   trail: "Angles Landing",
  //   reports: "Hot and sunny.",
  //   rating: 4.5,
  //   updated: new Date().setDate(new Date().getDate()-1),

  // }
];

db.deleteMany({})
  .then(() => db.collection.insertMany(hikeseed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
