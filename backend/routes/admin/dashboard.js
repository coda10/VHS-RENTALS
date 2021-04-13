//Import Router Module
const router = require('express').Router();

//Fetch All Data
router.get('/dashboard', async (req, res)=>{
    //
});

//View All Users
router.get('/allusers', async (req, res)=>{
    //
});

//Create User
router.post('/createuser', async (req, res)=>{
    //
});

//Update User
router.patch('/edituser/:userid', async (req, res)=>{
    //
});

//Delete User
router.get('/deleteuser/:userid', async (req, res)=>{
    //
});

//Export Router
module.exports = router;