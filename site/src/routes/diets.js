const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');
const dietsControllers = require('../controllers/dietsControllers');
const recetasControllers = require('../controllers/recetasController');

//var dietsMiddlewares = require('../middlewares/dietsMiddlewares');

router.get('/', dietsControllers.Diets);
router.get('/category/', dietsControllers.Diets);
router.get('/details/:id', productsControllers.details);
router.get('/receta/:id', recetasControllers.receta);
router.get('/search', productsControllers.search)

module.exports = router;