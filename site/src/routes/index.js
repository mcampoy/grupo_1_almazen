const express = require('express');
const router = express.Router();
const indexControllers = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', indexControllers.index);

module.exports = router;
