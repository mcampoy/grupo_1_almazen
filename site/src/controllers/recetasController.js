const fs = require('fs');
const path = require('path');

const recetas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/recetasDataBase.json'), 'utf-8'));

// const vegetarianas = [];
// const veganas = [];

// for (let receta of recetas){
//   if(receta.dieta == 'Vegetariana'){
//     vegetarianas.push(receta);
//   } else {
//     veganas.push(receta);
//   }
// }


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

    // category: (req, res) => {
    //   const vegetariana = recetas.find((receta)=>{
    //     return receta.dieta == req.params.dieta
    //   })
          
    //   res.render("recetas", {vegetarianas})
    // }
};

module.exports = controller;