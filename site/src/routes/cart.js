const express = require('express');
const router = express.Router();
const cartControllers = require('../controllers/cartControllers');


router.get('/', cartControllers.showCart);
router.get('/confirm', cartControllers.confirmPurchase);
router.post('/createOrder', cartControllers.createOrder);



module.exports = router