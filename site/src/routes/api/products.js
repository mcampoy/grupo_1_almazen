const express = require('express');
const router = express.Router();
const apiProductsControllers = require('../../controllers/api/productsControllers');

router.get('/enabled', apiProductsControllers.enabled);
router.get('/recent', apiProductsControllers.recent);
router.get('/unstocked', apiProductsControllers.unstocked);
router.get('/byCategory', apiProductsControllers.byCategory);
router.get('/capital', apiProductsControllers.capital);

module.exports = router;