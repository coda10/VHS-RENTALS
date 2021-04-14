//Import Mongoose
const mongoose = required('mongoose');

//Define Schema
const admin_Schema = new Schema.mongoose({
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
modules.exports = Admin;