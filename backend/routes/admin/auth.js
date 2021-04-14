//Import Router 
const router = require('express').Router();

//Import Mongoose
const mongoose = require('mongoose');

//Import Admins Model
const Admins = require('../../models/adminModel');

//Admin Login
router.post('/login', async (req, res)=>{
    //
    console.log(req.body);
    res.send({message: "Login Successful!"});
});

//Admin Registration
router.post('/registration', async (req, res)=>{
    //Check if registration exist
    if(!req.body) return res.status(404).send({error: "Registration Body must not be Empty"});
    const registrationData = req.body;
    try {
        //Validate Payload

            //Check if Username exist
            const checkUserName = await Admins.find({username: registrationData.username});
            if(checkUserName) return res.send({error: "Username already exist"});

            //Check if Email exist
            const checkEmail = await Admins.find({password: registrationData.email});
            if(checkEmail) return res.send({error: "Email already exist"});

            //Hash the password
           
            //Create new registration onject
            const regObj = {
                username: registrationData.username,
                email: registrationData.email,
                password: registrationData.password 
            };
            //Create Admin
            const registerUser = await Admins({registrationData}).save();

            //Check if registration is successful
            if(registerUser){
                console.log(req.body);
            //Respond with a Success Message
            res.send({message: "Registration Successful!"});
            }else{
                //Respond with a Failure Message
                res.send({error: "Registration Failed!"});
            }
    } catch (error) {
            //Respond with Error Message
            res.status(404).send({error: error.message});
    }
});

//Export Router
module.exports = router;