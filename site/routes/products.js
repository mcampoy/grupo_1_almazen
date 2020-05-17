const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/details', productsControllers.details);
router.get('/upload', productsControllers.upload);
router.get('/cart', productsControllers.cart);


module.exports = router;