const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    userID: {
        type: String
    },
    hikeID: {
        type: Number
    },
    name: {
        type: String
    },
    difficulty: {
        type: String
    },
    elevation: {
        type: Number
    },
    imgMedium: {
        type: String
    },
    summary: {
        type: String
    }
})

const Favorite = mongoose.model('favorites', FavoriteSchema);

module.exports = Favorite