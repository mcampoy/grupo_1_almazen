const fs = require('fs');
const path = require('path');
let bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
    return htmlFile;
}

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

// FUNCIONES DE PRODUCTOS
let productsPath = path.resolve(__dirname, '../data/productsDataBase.json');
const products = getProducts();

function getProducts() {
    let productsJson = fs.readFileSync(productsPath, 'utf-8');

    if (productsJson != ' ') {
        return JSON.parse(productsJson)
    } else {
        return []
    }
};


// CONTROLLERS DE USUARIO
const controller = {
    reg: (req, res) => {
        res.render('register');
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

            req.session.userId = user.id; //para leerlo uso req.cookies.userId
            res.cookie('userId', user.id); //para leerlo uso req.session.userId

            res.redirect(`profile/${user.id}`);

        } else {
            return res.render("register", { errors: errors.errors })

        }

        // let User = {
        //     Nombre: req.body.nombre,
        //     Usuario: req.body.usuario,
        //     Email: req.body.email,
        //     Password: req.body.password
        // };

        // let Archivousuario = fs.readFileSync(usuariosPath, { encoding: 'utf-8' });
        // let usuarios;
        // if (Archivousuario == "") {
        //     usuarios = [];
        // } else {
        //     usuarios = JSON.parse(Archivousuario);
        // }
        // usuarios.push(User);

        // usuarioJson = JSON.stringify(usuarios);

        // fs.writeFileSync(usuariosPath, usuarioJson);

        // res.send('Gracias por registrarte');

    },
    log: (req, res) => {
        res.render('login');
    },

    access: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let user = getUserByEmail(req.body.email)
            req.session.userId = user.id; //para leerlo uso req.cookies.userId
            res.cookie('userId', user.id); //para leerlo uso req.session.userId
            res.redirect(`profile/${user.id}`);
        } else {

            return res.render("login", { errors: errors.errors });
        }
    },

    profile: function(req, res) {

        let user = getUserById(req.params.id)
        res.render('profile', { user });
    }
};

module.exports = controller;