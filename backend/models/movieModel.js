//Import Mongoose
const mongoose = require('mongoose');

//Define Schema
const movie_Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

//Initialize Schema
const Movies = mongoose.model('Movies', movie_Schema);

//Export the schema
module.exports = Movies;