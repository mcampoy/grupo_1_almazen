const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productsDataBase.json'), 'utf-8'));


const controller = {
    details: (req, res) => {

        const product = products.find((product)=>{
            return product.id == req.params.id;
          })

          if(product == null){

            return res.redirect('/');
          }
        res.render('productDetail', {product: product});
    },
    
    add: (req, res) => {
        res.render('productAdd');
    },

    cart: (req, res) => {
        res.render('productCart');
    },
};

module.exports = controller;