//Import Mongoose
const mongoose = require('mongoose');

//Define Schema
const admin_Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passord: {
        type: String,
        required: true
    }
});

//Initialize Schema
const Admin = mongoose.model('Admins', admin_Schema);

//Export the schema
module.exports = Admin;