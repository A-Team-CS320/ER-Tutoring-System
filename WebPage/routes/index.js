var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login.ejs', {});
  
	  res.end();
});


router.get('/login', function(req,res){
	res.render('login.ejs', {});
	res.end();
})


router.get('/studentHome', function(req,res){

	res.render('studentHome.ejs', {});

	res.end();
})
router.post('/studentCreate', function(req,res){

	res.redirect('/studentHome');

	res.end();
})
router.get('/questionBankInstructor', function(req,res){
	res.render('questionBankInstructor', {})
	res.end();
})
router.post('/questionBankInstructor', function(req,res){
	res.render('questionBankInstructor', {})
	res.end();
})
router.post('/studentHome', function(req,res){
	res.render('studentHome.ejs', {});

	res.end();
})
router.post('/login', function(req, res){
	res.redirect('/studentHome');

	res.end();
})
router.post('/studentCreation', function(req, res){
	res.redirect('/studentHome');
})


module.exports = router;
