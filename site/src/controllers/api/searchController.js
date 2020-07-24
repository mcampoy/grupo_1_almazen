let db = require('../../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {

    //BUSCADOR DE PRODUCTOS Y RECETAS
    search: async (req, res) => {
        let busqueda = req.query
        console.log(busqueda)
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
            console.status(500).json({ok: false, error})
        }
    }
};

module.exports = controller;