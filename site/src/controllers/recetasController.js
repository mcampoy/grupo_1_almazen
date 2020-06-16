const fs = require('fs');
const path = require('path');

const recetas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/recetasDataBase.json'), 'utf-8'));
let productsPath = path.resolve(__dirname, '../data/productsDataBase.json');
const products = getProducts();
function getProducts() {
  let productsJson = fs.readFileSync(productsPath, 'utf-8');

  if (productsJson != ' ') {
      return JSON.parse(productsJson)
  } else {
      return []
  }
};

const controller = {

    recetaList: (req, res) => {

      res.render('recetas', {recetas})

    },

    receta: (req, res) => {

      
      
      const receta = recetas.find((receta)=>{
        return receta.id == req.params.id;
      })
           
          if(receta == null){

            return res.redirect('/');
          }
        res.render('receta', {receta, products});
    },

    category: (req, res) => {
      const receta = recetas.find((receta)=>{
        return receta.dieta == req.params.dieta;
      })
      let dietas = [];
      let otras = [];

        for (let receta of recetas){
          if(receta.dieta == req.params.dieta){
            dietas.push(receta);
          } else {
            otras.push(receta);
          }
        }

      res.render('recetasPorDietas', {dietas, receta});
    }
};

module.exports = controller;