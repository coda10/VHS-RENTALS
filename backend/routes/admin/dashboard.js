//Import Router Module
const router = require('express').Router();

//Import Mongoose
const Users = require('../../models/userModel');


//######################################################################################
//                       {Dashboard SECTION}
//######################################################################################

//Fetch All Data
router.get('/dashboard', async (req, res)=>{
    //
});

//######################################################################################
//                       {User SECTION}
//######################################################################################

//View All Users
router.get('/allusers', async (req, res)=>{
    //
    try {
        const fetchUsers = await Users.find({}, {_id: 1, username: 1, email: 1});

        res.send({message: fetchUsers});
    } catch (error) {
        res.status(404).send({error: error.message});
    }
});

//Create User
router.post('/createuser', async (req, res)=>{
    console.log(req.body);
    //Check If Payload is not empty
    if(!req.body) return res.status(404).send({error: "Body is required"});
    //Validate
    const userData = req.body;

    try {
        // Has Password

        //Check if username exist
        const checkUsername = await Users.find({username: userData.username});
        
        if(checkUsername.length > 0) return res.send({error: "Username already exist"});

        //Check if Email exist
        const checkEmail = await Users.find({email: userData.email});
        if(checkEmail.length > 0) return res.send({error: "Email already exist"});
        
        //Create User
        const createUser = await Users(userData).save();

        //Check if user is created
        if(createUser){
            res.send({message: "User Creation Successful!"});
        }else{
            res.send({error: "User Creation Failed!"});
        }
    } catch (error) {
        res.status(404).send({error: error.message});
    }
});

//Edit User
router.patch('/edituser/:userid', async (req, res)=>{
    //
});

//Delete User
router.get('/deleteuser/:userid', async (req, res)=>{
    //
});

//######################################################################################
//                       {MOVIE SECTION}
//######################################################################################

//View All Movies
router.get('/allmovies', async (req, res)=>{
    //
});

//Create Movie
router.post('/createmovie', async (req, res)=>{
    //
});

//Edit Movie
router.patch('/editmovie/:movieid', async (req, res)=>{
    //
});

//Delete Movie
router.get('/deletemovie/:movieid', async (req, res)=>{
    //
});

//Export Router
module.exports = router;