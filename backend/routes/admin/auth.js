//Import Router 
const router = require('express').Router();

//Import Mongoose
const mongoose = require('mongoose');

//Admin Login
router.post('/login', async (req, res)=>{
    //
    console.log(req.body);
    res.send({message: "Login Successful!"});
});

//Admin Registration
router.post('/registration', async (req, res)=>{
    //
    console.log(req.body);
    res.send({message: "Registration Successful!"});
});

//Export Router
module.exports = router;