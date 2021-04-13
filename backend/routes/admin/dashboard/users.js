var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This returns all Users');
});

//GET a specific user
router.get('/:id', (req,res) => {
   res.send('This is user-'+req.params.id);
});

//ADD a user
router.post('/',(req,res)=>{
  res.send('Added new user');
})

//UPDATE a user
router.put('/:id',(req,res)=>{
  res.send('user-'+req.params.id+ ' has been updated');
})

//DELEte a user
router.delete('/:id',(req,res)=>{
  res.send('user-'+req.params.id+ ' has been deleted');
})


module.exports = router;
