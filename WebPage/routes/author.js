var express = require('express')
var router = express.Router()
//var validator = whatever the exported name of the validator ends up being
//var dbAccessor = whatever the exported name of the accessor ends up being

router.get('/addQ', function(req,res){
	
	var qJson = req.question
	var ansJson = req.answer
	var feedBack = req.feedback
	dbAccessor.addQ(qJson,ansJson,feedback)
	
	//var feedBack = validator.getFeedback(qID,ansJSON,res,fb_cb)

	
});
//login handler
router.post('/login', function(req, res) {
	res.send('hello');
	// 	req.logIn(user, function(err) {
	// 		res.send();
	// 		res.end();
	// 	});
	// })(req, res);
});
