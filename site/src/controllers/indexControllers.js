let db = require('../database/models');
// const Op = Sequelize.Op;

const controller = {

    index: (req, res) => {
        var products = db.Product.findAll({
            where: {
                enabled: 1,
                discount: 0,
                stock: {
                    [db.Sequelize.Op.gte]: 1
                },
            },
            order: [
                ['id', "ASC"]
            ],
            limit: 3,
        });

        var receta = db.Recipe.findByPk(1);
        var sales = db.Product.findAll({
            where:{
                enabled: 1,
                discount: {
                    [db.Sequelize.Op.gte]: 1
                },
                stock: {
                    [db.Sequelize.Op.gte]: 1
                },
            },
            limit: 3,
            });

        Promise.all([products, receta, sales])
            .then((results) => {

                return res.render('index', { products: results[0], receta: results[1], sales: results[2], usuarioLogueado: req.session.usuarioLogueado });

            }).catch((err) => console.error(err));

    }
};

module.exports = controller;