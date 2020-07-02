const fs = require('fs');
const path = require('path');

const controller = {
    reg: (req, res) => {

        return res.render("tarjetas", { usuarioLogueado: req.session.usuarioLogueado });
    }
};

module.exports = controller;