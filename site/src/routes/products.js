const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

var productsMiddlewares = require('../middlewares/productsMiddlewares');
var usersMiddlewares = require('../middlewares/usersMiddlewares');
const middUploadFile = require('../middlewares/middUploadFile');

router.get('/', productsControllers.productsList);
router.get('/details/:id', productsControllers.details);
router.get('/category/:id', productsControllers.category);
router.get('/offers', productsControllers.offers);

// router.get('/cart', productsControllers.cart);


router.get('/admin', usersMiddlewares.adminValidation, productsControllers.admin);
router.get('/admin/:id/:edit?', productsControllers.adminDetails); //// edit: null muestro, 1 edito, 2 nuevo //id:0 para indicar producto nuevo

router.delete('/admin', usersMiddlewares.adminValidation, productsMiddlewares.deleteProductValidation, productsControllers.delete);
router.put('/admin', middUploadFile.uploadFile, usersMiddlewares.adminValidation, productsMiddlewares.editProductValidation, productsControllers.adminUpdate);
router.post('/admin', middUploadFile.uploadFile, usersMiddlewares.adminValidation, productsMiddlewares.newProductValidation, productsControllers.adminCreate);

// Buscador
router.post('/find', productsControllers.find)

module.exports = router;