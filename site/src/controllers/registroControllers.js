const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
    return htmlFile;
}

let usuariosPath = path.resolve(__dirname, '../data/usuarios.json');

const controller = {
    reg: (req, res) => {
        res.render('register');
    },
    create: (req, res) => {
        let User = {
            Nombre: req.body.nombre,
            Usuario: req.body.usuario,
            Email: req.body.email,
            Password: req.body.password
        };

        let Archivousuario = fs.readFileSync(usuariosPath, { encoding: 'utf-8' });
        let usuarios;
        if (Archivousuario == "") {
            usuarios = [];
        } else {
            usuarios = JSON.parse(Archivousuario);
        }
        usuarios.push(User);

        usuarioJson = JSON.stringify(usuarios);

        fs.writeFileSync(usuariosPath, usuarioJson);

        res.render('login');

    },
    log: (req, res) => {
        res.render('login');
    }
};

module.exports = controller;