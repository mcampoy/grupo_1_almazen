const fs = require('fs');
const path = require('path');
let db = require('../database/models');
let sequelize = db.sequelize;

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

        db.Recipe.findAll()
        .then(recetas => {
            return res.render('recetas', {
                recetas: recetas
            })
        })
        .catch((err) => console.error(err));

        //res.render('recetas', { recetas })
        // if (req.session.usuarioLogueado == undefined) {
        //     return res.render('recetas', { recetas, usuarioLogueado: undefined });
        // } else {
        //     return res.render('recetas', { recetas, usuarioLogueado: req.session.usuarioLogueado });
        // }
    },

    receta: (req, res) => {

        db.Recipe.findByPk(req.params.id, {
            include: [{
                association: "ingredients"
            }, {
                association: "steps"
            }]
        })
        .then((receta) => {
            if (receta == null) {
                return res.redirect('/');
            }
            res.render('receta', {receta, products});

            // if (req.session.usuarioLogueado == undefined) {
            //         return res.render('receta', { receta, products, usuarioLogueado: undefined });
            //     } else {
            //         return res.render('receta', { receta, products, usuarioLogueado: req.session.usuarioLogueado });
            //     }
        })
        .catch((err) => console.error(err));
    },


    category: (req, res) => {
        
       var sinGluten = db.Recipe.findAll({
            where: {
                diet: "sin gluten"
            }
        })

        console.log(sinGluten)

        const receta = recetas.find((receta) => {
            return receta.dieta == req.params.dieta;
        })
        let dietas = [];
        let otras = [];

        for (let receta of recetas) {
            if (receta.dieta == req.params.dieta) {
                dietas.push(receta);
            } else {
                otras.push(receta);
            }
        }

        //res.render('recetasPorDietas', {dietas, receta});
        if (req.session.usuarioLogueado == undefined) {
            return res.render('recetasPorDietas', { dietas, receta, usuarioLogueado: undefined });
        } else {
            return res.render('recetasPorDietas', { dietas, receta, usuarioLogueado: req.session.usuarioLogueado });
        }
    },

    listaCompras: (req, res) => {
        let prodSelecc = {...req.body };
        console.log(prodSelecc);
        res.send('hola', { prodSelecc })

    }
};

module.exports = controller;