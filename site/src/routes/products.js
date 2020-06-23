const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');
const middUploadFile = require('../middlewares/middUploadFile');

router.get('/', productsControllers.productsList);
router.get('/details/:id', productsControllers.details);
router.get('/cart', productsControllers.cart);
router.get('/admin', productsControllers.admin);
router.get('/adminShow/:id', productsControllers.adminShowDetails);
router.get('/adminEdit/:id', productsControllers.adminEditDetails);

router.delete('/admin', productsControllers.delete);
router.put('/admin', middUploadFile.uploadFile, productsControllers.adminSaveDetails);

module.exports = router;