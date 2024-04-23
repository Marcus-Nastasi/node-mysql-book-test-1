const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: process.env.DBPASS,
   database: 'corp'
});

module.exports = connection;

