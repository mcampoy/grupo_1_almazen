const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/details', productsControllers.details);

module.exports = router;