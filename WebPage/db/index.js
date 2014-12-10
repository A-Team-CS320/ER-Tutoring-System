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

// function getUser(callback ,name,lname) {
//   pg.connect(connString, function (err, client, done) {
//     if (err) {
//       callback(err);
//     }
//     else {
//       client.query('select * from users, address where uid=aid and fname ='+' \''+name +'\''+'and lname ='+' \''+lname +'\'', function (err, result) {
//         // Ends the "transaction":
//         done();
//         // Disconnects from the database:
//         client.end();
//         if (err) {
//           callback(err);
//         }
//         else {
//           callback(undefined, result.rows);
//         }
//       });
//     }
//   });
// }


exports.getUsers =getUsers
// exports.getUser =getUser



//qeustion id qeustionbody(string) answers() feedback
