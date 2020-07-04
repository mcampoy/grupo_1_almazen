const express = require('express');
const router = express.Router();
const cartControllers = require('../controllers/cartControllers');


router.get('/', cartControllers.showCart);

module.exports= router