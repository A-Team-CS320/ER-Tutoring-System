var express = require('express');
var router = express.Router();
var db = require('/home/ubuntu/KIWIServer/db/index');

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
	console.log("CREDS \n\n" + req.body.NetID);
	db.addUser(req.body.NetID, req.body.Password, function(err, ret){
		if(err)
		{	console.log(err);
			res.redirect('/login');
			res.end();
		}
		else{
			console.log("ret " +ret.length + "\n\n\n\n")
			if(ret.length>0)
			{
				res.redirect('/studentHome');
			}
			else
			{
				res.redirect('/login');
			}
			res.end();
		}
	})
	
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

router.get('/questionBankAuthor', function(req,res){
	res.render('questionBankAuthor', {})
	res.end();
})
router.post('/questionBankAuthor', function(req,res){
	res.render('questionBankAuthor', {})
	res.end();
})

router.get('/assignmentListInstructor', function(req,res){
	res.render('assignmentListInstructor', {})
	res.end();
})
router.post('/assignmentListInstructor', function(req,res){
	res.render('assignmentListInstructor', {})
	res.end();
})

router.get('/questionReviewInstructor', function(req,res){
	res.render('questionReviewInstructor', {})
	
})
router.post('/questionReviewInstructor', function(req,res){
	res.render('questionReviewInstructor', {})
	
})

router.post('/studentHome', function(req,res){
	res.render('studentHome.ejs', {});

	res.end();
})
router.get('/questionFeedbackStudent', function(req, res){
	res.render('questionFeedbackStudent', {});
	res.end()
})

router.post('/questionFeedbackStudent', function(req, res){
	res.render('questionFeedbackStudent', {});
	res.end()
})
	
router.post('/login', function(req, res){
	console.log("ID " +req.body.Password + "\n\n\n\n")
	if(req.body.NetID=="Gordon")
	{
		res.redirect('/assignmentListInstructor');
		res.end();
		
	}
	else if(req.body.NetID =="Nick")
	{
		
		res.redirect('/questionBankAuthor')
		res.end();
	}
	else{
	db.login(req.body.NetID, req.body.Password, function(err, ret){
		if(err)
		{	console.log(err);
			res.redirect('/login');
			res.end();
		}
		else{
			console.log("ret " +ret.length + "\n\n\n\n")
			if(ret.length>0)
			{
				res.redirect('/studentHome');
			}
			else
			{
				res.redirect('/login');
			}
			res.end();
		}
	})

}
})


router.get('/sidebar', function(req,res){
	res.render('sidebar.ejs', {})
	res.end();
})
router.post('/sidebar', function(req,res){
	res.render('sidebar.ejs', {})
	res.end();
})

router.get('/sidebarInstructor', function(req,res){
	res.render('sidebarInstructor.ejs', {})
	res.end();
})
router.post('/sidebarInstructor', function(req,res){
	res.render('sidebarInstructor.ejs', {})
	res.end();
})

router.get('/sidebarAuthor', function(req,res){
	res.render('sidebarAuthor.ejs', {})
	res.end();
})
router.post('/sidebarAuthor', function(req,res){
	res.render('sidebarAuthor.ejs', {})
	res.end();
})

router.get('/ERQuestion', function(req,res){
	res.render('Test.ejs', {});
})

router.get('/toolbox', function(req,res){
	res.render('toolbox.ejs', {});
})

router.post('/toolbox', function(req,res){
	res.render('toolbox.ejs', {});
})

module.exports = router;
