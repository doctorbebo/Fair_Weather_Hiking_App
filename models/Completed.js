const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedSchema = new Schema({
    userID: {
        type: String
    },
    id: {
        type: Number
    },
    name: {
        type: String
    },
    ascent: {
        type: Number
    },
    difficulty: {
        type: String
    },
    high: {
        type: Number
    },
    imgMedium: {
        type: String
    },
    length: {
        type: String
    },
    ascent: {
        type: Number
    },
    summary: {
        type: String
    },

    userComment: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude:{
        type: Number
    },
    day: {
        type: Date,
        default: Date
    }
})

const Completed = mongoose.model('completed', CompletedSchema);

module.exports = Completed