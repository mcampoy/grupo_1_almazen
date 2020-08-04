let db = require('../../database/models');
const Sequelize = require('sequelize');

const controller = {

    enabled: async (req, res) => {
        try {

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
                },
                data: {
                    length: products.length
                }
            }

            return res.json(results)
        } catch (error) {

            return res.status(500).json({
                ok: false,
                error
            })
        }
    },

    recent: async (req, res) => {
        try {

            let recentProd = await db.Product.findAll({
                where: {
                    enabled: 1,
                    stock: {
                        [db.Sequelize.Op.gte]: 1
                    },
                },
                order: [
                    ['id', "DESC"]
                ],
                limit: 5,
            })

            let resultsRecent = {
                meta: {
                    status: 200,
                },
                length: recentProd.length,
                data: recentProd
            }
            return res.json(resultsRecent)

        } catch (error) {

            return res.status(500).json({
                ok: false,
                error
            })
        }
    },

    unstocked: async (req, res) => {
        try {

            let unstoked = await db.Product.findAll({
                where: {
                    enabled: 1,
                    stock: {
                        [db.Sequelize.Op.lte]: 50
                    },
                },
                limit: 5,
            })

            let unstokedTotal = await db.Product.findAll({
                where: {
                    enabled: 1,
                    stock: {
                        [db.Sequelize.Op.lte]: 50
                    },
                },
            })

            let results = {
                meta: {
                    status: 200,
                },
                data: {
                    unstokedTotal: unstokedTotal.length,
                    unstoked: unstoked
                }
            }

            return res.json(results)

        } catch (error) {

            return res.status(500).json({
                ok: false,
                error
            })
        }
    },

    byCategory: async (req, res) => {
        try {

            let categories = await db.Category.findAll({
                include: ["products"],
                where: {
                    enabled: 1,
                },
            })

            let results = {
                meta: {
                    status: 200,
                },
                data: {
                    length: categories.length,
                    categories: categories
                }
            }

            return res.json(results)

        } catch (error) {

            return res.status(500).json({
                ok: false,
                error
            })
        }
    },

    capital: async (req, res) => {
        try {
            let products = await db.Product.findAll({
                where: {
                    enabled: 1
                }
            })
            let capital = 0
            for (let product of products) {
                capital += product.price * product.stock
            }
            let results = {
                meta: {
                    status: 200
                },
                data: {
                    capital
                }
            }

            res.json(results)

        } catch (error) {

            return res.status(500).json({
                ok: false,
                error
            })
        }
    },

    orders: async (req, res) => {
        try {

            const orders = await db.Order.findAll({
                group: 'order_number'
            })


            let results = {
                meta: {
                    status: 200
                },
                data: {
                    total: orders.length
                }
            }

            res.json(results)

        } catch (error) {
            return res.status(500).json({
                ok: false,
                error
            })
        }
    }
};

module.exports = controller;