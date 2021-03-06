var mysql = require('mysql')
var config = require('../config')

var connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database,
})

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
});

module.exports = connection
