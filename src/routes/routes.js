const express = require('express');
const router = express.Router();
const indexContr = require('../controllers/indexContr');
const crud = require('../controllers/crud');

router.get('/', indexContr.index);

router.get('/api/role', crud.role);

router.get('/api', crud.all);

router.get('/api/:id', crud.single);

router.post('/api/insert', crud.insert);

router.put('/api/update/:id', crud.update);

router.delete('/api/delete/:id', crud.delete);

module.exports = router;

