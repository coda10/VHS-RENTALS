var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This returns all movies');
  });
  
  //GET a specific movie
  router.get('/:id', (req,res) => {
     res.send('This is movie-'+req.params.id);
  });
  
  //ADD a movie
  router.post('/',(req,res)=>{
    res.send('Added new movie');
  })
  
  //UPDATE a movie
  router.put('/:id',(req,res)=>{
    res.send('movie-'+req.params.id+ ' has been updated');
  })
  
  //DELEte a movie
  router.delete('/:id',(req,res)=>{
    res.send('movie-'+req.params.id+ ' has been deleted');
  })
  

  module.exports = router;