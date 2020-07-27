// REQUERIMIENTOS
let bcrypt = require('bcrypt');
let db = require('../database/models');
var { check, validationResult, body } = require('express-validator');

// MIDDLEWARES USUARIOS
let usersMiddlewares = {
    middlewareGenerico: function(req, res, next) {
        next()
    },
    registerValidation: [
        check('name')
        .exists().withMessage("Debés completar el campo: nombre")
        .isLength({ min: 3 }).withMessage("Por favor, ingresá tu nombre. Debe tener al menos tres caracteres")
        .trim(),
        check('email')
        .exists()
        .isEmail().withMessage("Por favor, ingresá tu email o verificá que esté bien escrito")
        .normalizeEmail(),
        check('password')
        .exists().withMessage('Por favor, ingresá tu contraseña')
        .trim()
        .isLength({ min: 8 }).withMessage("Debe tener un mínimo de 8 caracteres, al menos una letra y un número"),
        body('password').custom((value, { req }) => {
            if (value !== req.body.validation) {
                return false
            }
            return true
        }).withMessage('Revisá que las contraseñas coincidan')
    ],

    loginValidation: [
        check('email')
        .exists().withMessage("Debés ingresar un email")
        .trim()
        .isEmail().withMessage("El email no es válido"),
        body('email').custom(function(value) {}).withMessage('No hemos encontrado ningún usuario registrado con ese email'),
        check('password')
        .exists().withMessage("Debés ingresar una contraseña")
        .trim()
        .isLength({ min: 8 }).withMessage('Revisá que la contraseña esté bien escrita'),
        body('password').custom(function(value) {}).withMessage('Revisá que la contraseña esté bien escrita')
    ],
    loggedUserValidation: function(req, res, next) {
        if (req.session.usuarioLogueado != undefined) {
            next();
        } else {
            return res.redirect('/users/login');
        }
    },
    guestValidation: function(req, res, next) {
        if (req.session.usuarioLogueado == undefined) {
            next();
        } else {
            return res.redirect('/');
        }
    },
    adminValidation: function(req, res, next) {
        if (req.session.usuarioLogueado != undefined && req.session.usuarioLogueado.role == 2) {
            next();
        } else {
            return res.redirect('/');
        }
    },
    rememberUser: function(req, res, next) {
        // si el usuario no está logueado pero tiene la cookie "recordarme" activa
        if (req.session.usuarioLogueado == undefined && req.cookies.recordarme != undefined) {

            db.User.findOne({
                where: {
                    id: req.cookies.recordarme
                }
            }).then((user) => {
                if (user != null) {
                    req.session.usuarioLogueado = user; // logueamos al usuario
                }
            });
        }
        next();
    },
}
module.exports = usersMiddlewares;