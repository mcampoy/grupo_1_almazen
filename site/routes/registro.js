// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const registroController = require('../controllers/registroController');

/* GET - user page. */
router.get('/create', registroController.reg);
router.get('/login', registroController.log);

module.exports = router;