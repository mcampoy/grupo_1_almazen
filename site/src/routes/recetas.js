const express = require('express');
const router = express.Router();
const recetasControllers = require('../controllers/recetasController');


router.get('/:id', recetasControllers.index);

module.exports = router;