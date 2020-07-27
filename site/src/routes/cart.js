const express = require('express');
const router = express.Router();
const cartControllers = require('../controllers/cartControllers');


router.get('/', cartControllers.showCart);
router.get('/confirm', cartControllers.confirmPurchase);


module.exports = router