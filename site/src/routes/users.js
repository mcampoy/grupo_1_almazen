// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersControllers');

/* LOGIN */
router.get('/login', usersController.log);
router.post('/login', usersController.access);

/* REGISTRO */
router.get('/create', usersController.reg);
router.post('/create', usersController.create);

/*PERFIL DEL USUARIO*/
router.get('/profile/:id', usersController.profile);

module.exports = router;