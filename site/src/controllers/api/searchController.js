let db = require('../../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {

    //BUSCADOR DE PRODUCTOS Y RECETAS
    search: async (req, res) => {

        try {

            let products = await db.Product.findAll({
                where: {
                    enabled: 1,
                    name: {
                        [Op.like]: `%${req.query.search}%`
                    }
                },
                limit: 5
            })

            let recetas = await db.Recipe.findAll({
                where: {
                    enabled: 1,
                    name: {
                        [Op.like]: `%${req.query.search}%`
                    }
                }
            })

            let results = {
                meta: {
                    status: 200,
                    length: recetas.length + products.length
                },
                data: {
                    products,
                    recetas
                }
            }
            return res.json(results)

        } catch (error) {
            return res.status(500).json({ok: false, error})
        }
    }
};

module.exports = controller;