const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/details', productsControllers.details);
router.get('/upload', productsControllers.upload);


module.exports = router;