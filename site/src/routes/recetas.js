const express = require('express');
const router = express.Router();
const recetasControllers = require('../controllers/recetasController');

/* GET home page. */
router.get('/', recetasControllers.index);

module.exports = router;