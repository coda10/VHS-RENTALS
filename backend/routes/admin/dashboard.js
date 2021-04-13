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