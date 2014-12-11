var pg = require('pg');

var connString = 'postgres://ubuntu:ubuntu@localhost/ubuntu';

function getUsers(callback) {
  pg.connect(connString, function (err, client, done) {
    if (err) {
      callback(err);
    }
    else {
      client.query('select * from users', function (err, result) {
        // Ends the "transaction":
        done();
        // Disconnects from the database:
        client.end();
        if (err) {
          callback(err);
        }
        else {
          callback(undefined, result.rows);
        }
      });
    }
  });
}

function getUser(callback ,name,lname) {
  pg.connect(connString, function (err, client, done) {
    if (err) {
      callback(err);
    }
    else {
      client.query('select * from users where username ='+' \''+name +'\'', function (err, result) {
        // Ends the "transaction":
        done();
        // Disconnects from the database:
        client.end();
        if (err) {
          callback(err);
        }
        else {
          callback(undefined, result.rows);
        }
      });
    }
  });
}
function getLogin(name, pass,callback){
	pg.connect(connString, function(err, client, done){
	if(err){
		callback(err,undefined);
	}
	else{
		client.query('select * from users where username =' + ' \'' + name + '\'' + ' and password =' + ' \'' + pass + '\'', function(err,result){
			done();
			client.end();
			if(err){
				callback(err, undefined);
			}
			else {
				callback(undefined, result.rows)
			}
		})
	}
	});
}

function addUser(name,password, callback) {
  pg.connect(connString, function (err, client, done) {
    if (err) {
      callback(err);
    }
    else {
      client.query('insert into users(username, password, grade)  values ( ' + '\''+ name+ '\', ' + password + ', 0 )' , function (err, result) {
        // Ends the "transaction":
        done();
        // Disconnects from the database:
        client.end();
        if (err) {
          callback(err);
        }
        else {
          callback(undefined, result.rows);
        }
      });
    }
  });
}

exports.addUser = addUser
exports.getUsers =getUsers
exports.getUser =getUser
exports.login = getLogin


//qeustion id qeustionbody(string) answers() feedback
