const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/details', productsControllers.details);
router.get('/edit', productsControllers.edit);


module.exports = router;