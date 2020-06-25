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
const middPermisos = require('../middlewares/middPermisos');



/* LOGIN */
router.get('/login', usersController.log);
router.post('/login', usersMiddlewares.loginValidation, usersController.access);


/* REGISTRO */
router.get('/create', usersController.reg);
router.post('/create', upload.any(), usersMiddlewares.registerValidation, usersController.create);

/*PERFIL DEL USUARIO*/
router.get('/profile/:id', middPermisos.soloUsuariosLogueados, usersController.profile);

/* CERRAR SESIÓN */
router.get('/logout', usersController.logout);


module.exports = router;