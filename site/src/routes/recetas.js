const express = require('express');
const router = express.Router();
const recetasControllers = require('../controllers/recetasController');

router.get('/', recetasControllers.recetaList);
router.get('/:id', recetasControllers.receta);

module.exports = router;