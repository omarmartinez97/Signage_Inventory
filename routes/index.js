var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { signTypes: ['Express','sign','another sign'] });
});
router.get('/reports', function(req, res, next) {
  res.render('reports', { signTypes: ['Express','sign','another sign'] });
});
router.get('/Login',(req,res) =>{
  res.render('Login.jade') 
} )
router.get('/MainPage',(req,res) =>{
  res.render('MainPage.jade') 
} )
module.exports = router;
