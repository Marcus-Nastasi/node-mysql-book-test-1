const mysql = require('../models/db');

exports.all = (req, res) => {
   mysql.query(
      'SELECT * FROM workers;',
      function(err, results, fields) {
         if(err) throw err;
         return res.json(results);
      }
   );
};

exports.single = (req, res) => {
   mysql.query(
      'SELECT * FROM workers WHERE(id=?);', [ req.params.id ],
      function(err, results, fields) {
         if(err) throw err;
         return res.json(results);
      }
   );
};

exports.role = (req, res) => {
   mysql.query(
      'SELECT * FROM workers WHERE(cargo=?);', [ req.query.cargo ],
      function(err, results, fields) {
         if(err) throw err;
         return res.json(results);
      }
   );
};


