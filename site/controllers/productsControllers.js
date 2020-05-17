const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
    return htmlFile;
}

const controller = {
    details: (req, res) => {
        let html = readHTML('product-details');
        res.send(html);
    },
    
    upload: (req, res) => {
        let html = readHTML('product-upload');
        res.send(html);
    },

    cart: (req, res) => {
        let html = readHTML('productCart');
        res.send(html);
    }
};

module.exports = controller;