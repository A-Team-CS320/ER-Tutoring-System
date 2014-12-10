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

router.get('/questionEditAuthor', function(req,res){
	res.render('questionEditAuthor', {})
	res.end();
})
router.post('/questionEditAuthor', function(req,res){
	res.render('questionEditAuthor', {})
	res.end();
})

router.get('/questionListStudent', function(req,res){
	res.render('questionListStudent', {})
	res.end();
})
router.post('/questionListStudent', function(req,res){
	res.render('questionListStudent', {})
	res.end();
})

router.get('/questionReviewAuthor', function(req,res){
	res.render('questionReviewAuthor', {})
	res.end();
})
router.post('/questionReviewAuthor', function(req,res){
	res.render('questionReviewAuthor', {})
	res.end();
})

router.get('/questionReviewInstruction', function(req,res){
	res.render('questionReviewInstruction', {})
	res.end();
})
router.post('/questionReviewInstruction', function(req,res){
	res.render('questionReviewInstruction', {})
	res.end();
})

router.get('/questionSelectInstruction', function(req,res){
	res.render('questionSelectInstruction', {})
	res.end();
})
router.post('/questionSelectInstruction', function(req,res){
	res.render('questionSelectInstruction', {})
	res.end();
})

router.get('/questionSubmitStudent', function(req,res){
	res.render('questionSubmitStudent', {})
	res.end();
})
router.post('/questionSubmitStudent', function(req,res){
	res.render('questionSubmitStudent', {})
	res.end();
})

router.get('/questionListInstructor', function(req,res){
	res.render('questionListInstructor', {})
	res.end();
})
router.post('/questionListInstructor', function(req,res){
	res.render('questionListInstructor', {})
	res.end();
})

router.get('/studentReportInstructor', function(req,res){
	res.render('studentReportInstructor', {})
	res.end();
})
router.post('/studentReportInstructor', function(req,res){
	res.render('questionReportInstructor', {})
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
