const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
    return htmlFile;
}

const controller = {
    reg: (req, res) => {
        //res.render('tarjetas');
        if (req.session.usuarioLogueado == undefined) {
            return res.render("tarjetas", { usuarioLogueado: undefined });
        } else {
            return res.render("tarjetas", { usuarioLogueado: req.session.usuarioLogueado });
        }
    }
};

module.exports = controller;