const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/', productsControllers.productsList);
router.get('/details/:id', productsControllers.details);
router.get('/add', productsControllers.add);
router.get('/cart', productsControllers.cart);


module.exports = router;