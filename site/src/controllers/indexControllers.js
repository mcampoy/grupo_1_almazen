let db = require('../database/models');

const controller = {

    index: (req, res) => {
        var products = db.Product.findAll({
            order: [
                ['id', "DESC"]
            ],
            limit: 3,
        });
        var recetas = db.Recipe.findAll();

        Promise.all([products, recetas])
        .then((results)=>{
            if (req.session.usuarioLogueado == undefined) {
                return res.render('index', { products: results[0], recetas: results[1], usuarioLogueado: undefined });
            } else {
                return res.render('index', { products: results[0], recetas: results[1], usuarioLogueado: req.session.usuarioLogueado });
            }
        }).catch((err) => console.error(err));

    }
};

module.exports = controller;