const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
    return htmlFile;
}

const controller = {
    reg: (req, res) => {
        let html = readHTML('register');
        res.send(html);
    },
    log: (req, res) => {
        let html = readHTML('login');
        res.send(html);
    }
};

module.exports = controller;