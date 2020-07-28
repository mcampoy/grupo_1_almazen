// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Utilizacion de multer ************

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/users-avatar')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

// ************ Controller Require ************
const usersController = require('../controllers/usersControllers');

// ************ Middlewares Require ************
var usersMiddlewares = require('../middlewares/usersMiddlewares');

/* LOGIN */
router.get('/login', usersMiddlewares.guestValidation, usersController.log);
router.post('/login', usersMiddlewares.guestValidation, usersController.access);

//usersMiddlewares.loginValidation,

/* REGISTRO */
router.get('/create', usersMiddlewares.guestValidation, usersController.reg);
router.post('/create', upload.any(), usersMiddlewares.guestValidation, usersMiddlewares.registerValidation, usersController.create);

/*PERFIL DEL USUARIO*/
router.get('/profile', usersMiddlewares.loggedUserValidation, usersController.profile);
router.post('/profile', upload.any(), usersMiddlewares.loggedUserValidation, usersMiddlewares.registerValidation, usersController.edit);

//usersController.profile, usersMiddlewares.registerValidation,

/* CERRAR SESIÓN */
router.get('/logout', usersMiddlewares.loggedUserValidation, usersController.logout);

/* ELIMINAR CUENTA */
// router.delete('/delete/:id', usersController.delete);

module.exports = router;