// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const tipsController = require('../controllers/tipsControllers');

/* GET - tips page. */
router.get('/tips', tipsController.list);

module.exports = router;