var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL)
{
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "burgers_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
  });
}
// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
module.exports = connection;