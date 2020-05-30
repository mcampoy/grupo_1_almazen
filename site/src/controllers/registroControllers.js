const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
    return htmlFile;
}

const controller = {
    reg: (req, res) => {
        res.render('register');
    },
    log: (req, res) => {
        res.render('login');
    }
};

module.exports = controller;