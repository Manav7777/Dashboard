var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PASSWORD",
  database: "authuser"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = con