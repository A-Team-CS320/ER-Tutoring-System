var express = require('express')
var router = express.Router()
//var validator = whatever the exported name of the validator ends up being
//var dbAccessor = whatever the exported name of the accessor ends up being
router.get('/submit', function(req,res){
	
	var qID = req.question
	var ansJson = req.answer
	//var feedBack = validator.getFeedback(qID,ansJSON,res,fb_cb)
	//res.json('Hey look feedback!')
	
})

router.get('/report', function(req,res){
	var aID = req.assignment
	var sID = req.student
	//var resp = dbAccessor.getReportStudent(aID,sID)
	//res.json(resp);
	
})

router.get('/question', function(req, res){
	var qID = req.question
	//var question = dbAccessor.getQuestionStudent(qID)
	//res.json(question)
})

router.get('/assignment', function(req,res){
	var aID = req.assignment
	//var assignment = dbAccessor.getAssignmentStudent(aID)
	//res.json(assignment)
})





module.exports = router;
