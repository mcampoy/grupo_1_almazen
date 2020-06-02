const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
// function readHTML(fileName) {
//     let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
//     return htmlFile;
// }
const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productsDataBase.json'), 'utf-8'));


const controller = {
    details: (req, res) => {

        const product = products.find((product)=>{
            return product.id == req.params.id;
          })
      
          // Debo mostrar un mensaje tanto si lo encuentro como si no
          if(product == null){
            // Acá debería mostrar un mensaje de error
            return res.redirect('/');
          }
        res.render('productDetail', {product});
    },
    
    add: (req, res) => {
        res.render('productAdd');
    },

    cart: (req, res) => {
        res.render('productCart');
    },
};

module.exports = controller;