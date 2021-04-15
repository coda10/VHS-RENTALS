//Import Router 
const router = require('express').Router();

//Import Mongoose
const mongoose = require('mongoose');

//Import Admins Model
const Admins = require('../../models/adminModel');
   

//Admin Login
router.post('/login', async (req, res)=>{
    console.log(req.body);
    //Check if registration exist
    if(!req.body) return res.status(404).send({error: "Login Body must not be Empty"});
    const loginData = req.body;
    try {
            //Hash Password

            //Check if Username exist
            const checkUserName = await Admins.findOne({username: loginData.username});
            if(!checkUserName) return res.send({error: "Username does not exist"});

            //Check if Username exist
            const checkPassword = await Admins.findOne({password: loginData.password});
            if(!checkPassword) return res.send({error: "Invalid Password"});

            res.send({message: "Login Successful!", _id: checkUserName._id, username: checkUserName.username });
            // res.send({message: "Login Successful!", _id: checkUserName._id, username: checkUserName.username });
    } catch (error) {
        res.status(404).send({error: error.message});
    }
});

//Admin Registration
router.post('/registration', async (req, res)=>{
    console.log(req.body);
    //Check if registration exist
    if(!req.body) return res.status(404).send({error: "Registration Body must not be Empty"});
    const registrationData = req.body;
    try {
        //Validate Payload

            //Check if Username exist
            const checkUserName = await Admins.findOne({username: registrationData.username});
            if(checkUserName) return res.send({error: "Username already exist"});

            //Check if Email exist
            const checkEmail = await Admins.findOne({email: registrationData.email});
            if(checkEmail) return res.send({error: "Email already exist"});

            //Hash the password
           
            //Create new registration onject
            // const regObj = {
            //     username: registrationData.username,
            //     email: registrationData.email,
            //     password: registrationData.password 
            // };
            //Create Admin
            const registerUser = await Admins(registrationData).save();

            //Check if registration is successful
            if(registerUser){
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