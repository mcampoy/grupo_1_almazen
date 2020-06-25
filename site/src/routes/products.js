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


router.get('/adminShow/:id', productsControllers.adminShowDetails);
router.get('/adminEdit/:id', productsControllers.adminEditDetails);

router.delete('/admin', usersMiddlewares.adminValidation, productsMiddlewares.productDeleteValidation, productsControllers.delete);
router.put('/admin', usersMiddlewares.adminValidation, productsMiddlewares.productSaveValidation, middUploadFile.uploadFile, productsControllers.adminSaveDetails);

module.exports = router;