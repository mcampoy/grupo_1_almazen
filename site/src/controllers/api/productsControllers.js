let db = require('../../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {

    productsList: async (req, res) => {
        try {
            // let categories = await db.Category.findAll()
            let products = await db.Product.findAll({
                where: {
                    enabled: 1,
                    stock: {
                        [db.Sequelize.Op.gte]: 1
                    },
                }
            })

            let results = {
                meta: {
                    status: 200,
                    length: products.length
                },
                data: products
            }

            return res.json(results)
        } catch (error) {

             return res.status(500).json({ok: false, error})
        }
    },

    //BUSCADOR DE PRODUCTOS Y RECETAS
    find: async (req, res) => {
        let busqueda = req.body
        console.log(busqueda)
        try {

            let products = await db.Product.findAll({
                where: {
                    enabled: 1,
                    name: {
                        [Op.like]: `%${req.body.search}%`
                    }
                },
                limit: 5
            })

            let recetas = await db.Recipe.findAll({
                where: {
                    enabled: 1,
                    name: {
                        [Op.like]: `%${req.body.search}%`
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