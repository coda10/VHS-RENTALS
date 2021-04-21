//Import Mongoose
const mongoose = require('mongoose');

//Define Schema
const user_Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wallet: Number,
    movie_collection: [
        {
            title: String,
            genre: String,
            cost: Number,
            image: String,
            rentdate: Date,
            returndate: Date
        }
    ]
});

//Initialize Schema
const Users = mongoose.model('Users', user_Schema);

//Export the schema
module.exports = Users;