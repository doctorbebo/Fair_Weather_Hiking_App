const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedSchema = new Schema({
    userID: {
        type: String
    },
    hikeID: {
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
    summary: {
        type: String
    },
    userComment: {
        type: String
    }
})

const Completed = mongoose.model('completed', CompletedSchema);

module.exports = Completed