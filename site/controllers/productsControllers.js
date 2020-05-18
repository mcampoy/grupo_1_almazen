const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
    return htmlFile;
}

const controller = {
    details: (req, res) => {
        let html = readHTML('productDetail');
        res.send(html);
    },
    
    add: (req, res) => {
        let html = readHTML('productAdd');
        res.send(html);
    },

    cart: (req, res) => {
        let html = readHTML('productCart');
        res.send(html);
    }
};

module.exports = controller;