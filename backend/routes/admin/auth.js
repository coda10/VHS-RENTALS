var express = require('express');
var router = express.Router();


router.get('/login',(req, res, next)=>{
  res.send('This is the Login Page');
});


router.get('/signup',(req,res,next)=>{
  res.send('This is the Signup Page');
})






module.exports = router;
