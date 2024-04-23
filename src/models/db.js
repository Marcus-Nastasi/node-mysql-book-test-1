const mysql = require('mysql');

mysql.createConnection({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: process.env.DBPASS,
   database: 'corp'
});

