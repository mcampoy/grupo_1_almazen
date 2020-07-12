const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
let db = require('../database/models');
let bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');
// let db = require('../database/models');
// let sequelize = db.sequelize;


let usuariosPath = path.resolve(__dirname, '../data/usuarios.json');


// FUNCIONES GENÉRICAS
function userIdGenerator() {
    let users = getUsers();
    if (users.length) {
        return users.length + 1;
    } else {
        return 1;
    }
};

function getUsers() {
    let usersJson = fs.readFileSync(usuariosPath, 'utf-8');
    if (usersJson != '') {
        return JSON.parse(usersJson)
    } else {
        return []
    }
};

function saveUser(user) {
    let users = getUsers();
    users.push(user);
    fs.writeFileSync(usuariosPath, JSON.stringify(users, null, ' '))
};

function getUserByEmail(email) {
    let users = getUsers()
    return users.find(user => user.email == email)
};

function getUserById(id) {
    let users = getUsers()
    return users.find(user => user.id == id)
};


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

            let user = {
                id: userIdGenerator(),
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.files[0].filename
            }
            saveUser(user)

            // creacion de usuario y almacenado en database

            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.files[0].filename,
                role: 0,
                enabled: 1
            })

            req.session.usuarioLogueado = user;
            if (req.body.remember != undefined) {
                // creamos una cookie de nombre "recordarme" que va a contener el email del usuario
                let expiracion = new Date(Date.now() + 900000); //15 minutos
                res.cookie('recordarme', user.email, { expires: expiracion });
            }

            if (user.email == "admin@almazen.com") //administrador, después modificar condición
            {
                req.session.usuarioLogueado.isAdmin = true;
            }

            return res.redirect('/');

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
            let user = getUserByEmail(req.body.email)
            req.session.usuarioLogueado = user;
            if (req.body.remember != undefined) {
                // creamos una cookie de nombre "recordarme" que va a contener el email del usuario
                let expiracion = new Date(Date.now() + 900000); //15 minutos
                res.cookie('recordarme', user.email, { expires: expiracion });
            }

            if (user.email == "admin@almazen.com") //administrador, después modificar condición
            {
                req.session.usuarioLogueado.isAdmin = true;
                return res.redirect('/');
            }
            return res.redirect(`/`);

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
        db.User.update({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.files[0].filename,
            role: 0,
            enabled: 1
        }, {
            where: {
                email: usuarioLogueado.email
            }
        })
        return res.render('profile', { user: req.session.usuarioLogueado });
    }
};

module.exports = controller;