const express = require('express');
const router = express.Router();
const recetasControllers = require('../controllers/recetasController');

router.get('/', recetasControllers.recetaList);
router.get('/:id', recetasControllers.receta);
router.get('/dieta/:dieta', recetasControllers.category);

module.exports = router;