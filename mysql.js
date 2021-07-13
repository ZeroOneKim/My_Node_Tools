var mysql = require('mysql');     //mysql Node.js

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',   //User name
    port: '',  //Port Number
    password : '',  //Password
    database : 'animals'   //databse name like this
  });
  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    console.log('The solution is: ', results[0].solution);
  });
  
  connection.end();

/*
메인 Node파일에서 연결시
var mysql = require('mysql');
var db = mysql.createConnection ({
    host: 'localhost',
    user:'root',   //User name
    port: '',  //Port Number
    password : '',  //Password
    database : 'animals'   //databse name like this
});
db connect();

*/
