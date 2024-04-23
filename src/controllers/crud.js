const mysql = require('../models/db');

exports.all = (req, res) => {
   mysql.query(
      'SELECT * FROM workers;',
      function(err, results, fields) {
         if(err) throw err;
         if(results.length === 0) return res.json({ error: "Empty values" });
         return res.json(results);
      }
   );
};

exports.single = (req, res) => {
   mysql.query(
      'SELECT * FROM workers WHERE(id=?);', [ req.params.id ],
      function(err, results, fields) {
         if(err) throw err;
         if(results.length === 0) return res.json({ error: "Empty values" });
         return res.json(results);
      }
   );
};

exports.role = (req, res) => {
   mysql.query(
      'SELECT * FROM workers WHERE(cargo=?);', [ req.query.cargo ],
      function(err, results, fields) {
         if(err) throw err;
         if(results.length === 0) return res.json({ error: "Empty values" });
         return res.json(results);
      }
   );
};

exports.insert = (req, res) => {
   mysql.query(
      'INSERT INTO workers(nome, sobrenome, idade, cargo) VALUES(?,?,?,?);',
      [ req.body.name, req.body.lastName, req.body.age, req.body.role ],
      function(err, results, fields) {
         if(err) throw new Error('Error on inserting');
         return res.json({ sucess: "true" });
      }
   );
};

exports.update = (req, res) => {
   mysql.query(
      'UPDATE workers SET nome=?, sobrenome=?, idade=?, cargo=? WHERE(id=?)', 
      [req.query.nome, req.query.sobrenome, parseInt(req.query.idade), req.query.cargo, parseInt(req.params.id)],
      function(err, results, fields) {
         if(err) throw err;
         if(results.length === 0) return res.json({ error: "Empty values" });
         return res.json(results);
      }
   );
};

exports.delete = (req, res) => {
   mysql.query(
      'DELETE FROM workers WHERE(id=?)', [ req.params.id ],
      function(err, results, fields) {
         if(err) throw new Error(err.message);
         if(results.length === 0) return res.json({ error: "Empty values" });
         return res.json(results);
      }
   );
};


