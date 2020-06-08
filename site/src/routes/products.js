const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');
const middUploadFile = require('../middlewares/middUploadFile');

router.get('/', productsControllers.productsList);
router.get('/details/:id', productsControllers.details);
router.get('/add', productsControllers.add);
router.get('/cart', productsControllers.cart);
router.get('/addShow/:id', productsControllers.addShowDetails);
router.get('/addEdit/:id', productsControllers.addEditDetails);

router.post('/addDelete', productsControllers.addDelete);
router.post('/add', middUploadFile.uploadFile, productsControllers.addSaveDetails);

module.exports = router;