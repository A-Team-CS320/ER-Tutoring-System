var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var student = require('./routes/student');
var app = express();



app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.engine('ejs', require('ejs').renderFile);
app.use('/', routes);
app.use('/users', users);
//app.use('/student', student);
// catch 404 and forward to error handler

app.get('/usersdata', function (req, res) {
 // res.send("message");

var index =require('./db/index.js');
var result=new Array();

    index.getUsers(function(err,users){
         users.forEach(function (user) {
          result[result.length]=user;
        });
          json = JSON.stringify(result);
          res.write(json);
          res.end();
    });



});


app.get('/est', function (req, res) {
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('questions.json', 'utf8'));


});



app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
