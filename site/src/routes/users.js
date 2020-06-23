// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersControllers');

// ************ Middlewares Require ************
var usersMiddlewares = require('../middlewares/usersMiddlewares');

/* LOGIN */
router.get('/login', usersController.log);
router.post('/login', usersMiddlewares.loginValidation, usersController.access);

/* REGISTRO */
router.get('/create', usersController.reg);
router.post('/create', usersMiddlewares.registerValidation, usersController.create);

/*PERFIL DEL USUARIO*/
router.get('/profile/:id', usersController.profile);

module.exports = router;