const Sequelize = require('sequelize');
const Op = Sequelize.Op;
let db = require('../database/models');
let bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');
// let db = require('../database/models');
// let sequelize = db.sequelize;

// CONTROLLERS DE USUARIO
const controller = {

    reg: (req, res) => {

        return res.render('register', { usuarioLogueado: req.session.usuarioLogueado });

    },

    create: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            if (req.body.password == req.body.validation) {

                delete req.body.validation;
            }

            // creacion de usuario y almacenado en database


            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then((usuario) => {
                if (usuario != undefined) {
                    return res.render("register", { usuarioLogueado: undefined });
                } else {
                    db.User.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        avatar: req.files[0].filename,
                        role: 0,
                        enabled: 1
                    }).then(user => {
                        req.session.usuarioLogueado = user;
                        // console.log("ñlaskdjfñalsdkjfañlsdkfjañsdlfjkasd");
                        // console.log(user);
                        if (req.body.remember != undefined) {
                            // creamos una cookie de nombre "recordarme" que va a contener el email del usuario
                            let expiracion = new Date(Date.now() + 900000); //15 minutos
                            res.cookie('recordarme', user.id, { expires: expiracion });
                        }
                        return res.redirect('/');
                    });
                }
            });


        } else {

            return res.render("register", { errors: errors.errors, usuarioLogueado: req.session.usuarioLogueado });
        }

    },
    log: (req, res) => {

        return res.render("login", { usuarioLogueado: req.session.usuarioLogueado });

    },

    access: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let user = {
                email: req.body.email,
                password: req.body.password
            }
            db.User.findOne({
                where: {
                    email: user.email
                }
            }).then((usuario) => {
                if (usuario) {
                    let check = bcrypt.compareSync(user.password, usuario.password)
                    if (check == true) {
                        req.session.usuarioLogueado = usuario;

                        if (req.body.remember != null) {
                            // creamos una cookie de nombre "recordarme" que va a contener el email del usuario
                            let expiracion = new Date(Date.now() + 900000); //15 minutos
                            res.cookie('recordarme', usuario.id, { expires: expiracion });
                        };
                    };
                }
                return res.redirect(`/`);

            }).catch((err) => console.error(err));

        } else {

            return res.render("login", { errors: errors.errors, usuarioLogueado: req.session.usuarioLogueado });
        }
    },

    profile: function(req, res) {

        if (req.session.usuarioLogueado == undefined) {
            return res.render("login", { usuarioLogueado: undefined });
        } else {
            return res.render('profile', { user: req.session.usuarioLogueado, usuarioLogueado: req.session.usuarioLogueado });
        }
    },

    logout: function(req, res) {
        req.session.destroy(function() { // Destruyo la sesión completa
            if (req.cookies.recordarme != undefined) {
                res.clearCookie("recordarme"); //eliminamos la cookie
            }
            mensaje = "Se cerró la sesión exitosamente";
            return res.redirect('/');
        });
    },

    edit: function(req, res) {
        let user = {
            name: req.body.name,
            email: req.body.email,
            // password: bcrypt.hashSync(req.body.password, 10),
            // avatar: req.files[0].filename,
        }

        db.User.update({
            name: user.name,
            email: user.email,
            //password: user.password,
            //avatar: user.avatar
        }, {
            where: {
                id: req.session.usuarioLogueado.id
            }
        }).then((count) => { //rows updated
            db.User.findOne({
                where: {
                    id: req.session.usuarioLogueado.id
                }
            }).then((usuario) => {
                console.log(usuario);
                req.session.usuarioLogueado = usuario;
                return res.render('profile', { user: req.session.usuarioLogueado, usuarioLogueado: req.session.usuarioLogueado });

            });
        });
    }
};

module.exports = controller;