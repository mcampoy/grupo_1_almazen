let db = require('../database/models');

const controller = {

    index: (req, res) => {
        var products = db.Product.findAll({
            order: [
                ['id', "ASC"]
            ],
            limit: 3,
        });
        var receta = db.Recipe.findByPk(1);

        Promise.all([products, receta])
            .then((results) => {

                return res.render('index', { products: results[0], receta: results[1], usuarioLogueado: req.session.usuarioLogueado });

            }).catch((err) => console.error(err));

    }
};

module.exports = controller;