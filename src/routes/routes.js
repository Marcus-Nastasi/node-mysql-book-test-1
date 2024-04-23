const express = require('express');
const router = express.Router();
const indexContr = require('../controllers/indexContr');

router.get('/', indexContr.index);

module.exports = router;


