var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { signTypes: ['Express','sign','another sign'] });
});
router.get('/reports', function(req, res, next) {
  res.render('reports', { signTypes: ['Express','sign','another sign'] });
});
router.get('/login',(req,res) =>{
  res.render('login.jade') 
} )
router.get('/mainpage',(req,res) =>{
  res.render('mainpage.jade') 
} )
module.exports = router;
