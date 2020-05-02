const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TrailSchema = new Schema({
    trail: {
      type: String,
      required: true
    },
    reports: {
      type: String,
    },
    reports: {
      type: String,
    }
  });

const Trails = mongoose.model("trails", TrailSchema);

module.exports = Trails;