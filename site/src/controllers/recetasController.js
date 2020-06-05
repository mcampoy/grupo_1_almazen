const fs = require('fs');
const path = require('path');

const recetas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/recetasDataBase.json'), 'utf-8'));


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
        res.render('receta', {receta: receta});
    }
};

module.exports = controller;