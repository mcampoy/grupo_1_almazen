let db = require('../database/models');

const controller = {

    index: async (req, res) => {

        try {
            var products = await db.Product.findAll({
                where: {
                    enabled: 1,
                    discount: 0,
                    stock: {
                        [db.Sequelize.Op.gte]: 1
                    },
                },
                order: [
                    ['id', "DESC"]
                ],
                limit: 3,
            });

            var receta = await db.Recipe.findOne({
                order: [
                    ['id', "ASC"]
                ],
            });

            var sales = await db.Product.findAll({
                where: {
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

            return res.render('index', {
                products,
                receta,
                sales,
                usuarioLogueado: req.session.usuarioLogueado
            });

        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = controller;