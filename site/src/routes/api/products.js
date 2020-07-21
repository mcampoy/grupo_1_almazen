const express = require('express');
const router = express.Router();
const apiProductsControllers = require('../../controllers/api/productsControllers');

router.get('/', apiProductsControllers.productsList);
router.post('/', apiProductsControllers.find)

module.exports = router;