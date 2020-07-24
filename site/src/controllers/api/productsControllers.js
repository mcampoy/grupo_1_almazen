let db = require('../../database/models');
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

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
    }

};

module.exports = controller;