const mysql = require("mysql2");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db",
});

// simple query
// connection.query("SELECT * FROM department", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
//   //   console.log(fields); // fields contains extra meta data about results, if available
// });

module.exports = connection;
