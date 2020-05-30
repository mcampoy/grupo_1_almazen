const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
    return htmlFile;
}

const controller = {
    details: (req, res) => {
        res.render('productDetail');
    },
    
    add: (req, res) => {
        res.render('productAdd');
    },

    cart: (req, res) => {
        res.render('productCart');
    },
};

module.exports = controller;