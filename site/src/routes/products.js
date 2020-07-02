const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

var productsMiddlewares = require('../middlewares/productsMiddlewares');
var usersMiddlewares = require('../middlewares/usersMiddlewares');
const middUploadFile = require('../middlewares/middUploadFile');

router.get('/', productsControllers.productsList);
router.get('/details/:id', productsControllers.details);
router.get('/cart', productsControllers.cart);
router.get('/admin', usersMiddlewares.adminValidation, productsControllers.admin);
router.get('/admin/:id/:edit?', productsControllers.adminDetails); //// edit: null muestro, 1 edito, 2 nuevo //id:0 para indicar producto nuevo

router.delete('/admin', usersMiddlewares.adminValidation, productsMiddlewares.productDeleteValidation, productsControllers.delete);
// router.put('/admin', usersMiddlewares.adminValidation, productsMiddlewares.productSaveValidation, middUploadFile.uploadFile, productsControllers.adminSaveDetails);
//router.post('/admin', usersMiddlewares.adminValidation, productsMiddlewares.productSaveValidation, middUploadFile.uploadFile, productsControllers.adminCreate);

router.put('/admin', middUploadFile.uploadFile, productsControllers.adminUpdate);
router.post('/admin', middUploadFile.uploadFile, productsControllers.adminCreate);


module.exports = router;