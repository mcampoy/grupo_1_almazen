const express = require('express');
const router = express.Router();
const apiProductsControllers = require('../../controllers/api/productsControllers');

router.get('/', apiProductsControllers.productsList);

module.exports = router;