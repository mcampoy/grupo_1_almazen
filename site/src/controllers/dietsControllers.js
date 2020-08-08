let db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { check, validationResult, body } = require('express-validator');

const controller = {
    Diets(req, res) {

        let recetas = db.Recipe.findAll();
        let products = db.Product.findAll({
            where: {
                enabled: 1,
                stock: {
                    [db.Sequelize.Op.gte]: 1
                },
            }
        });
        let dietas = db.Diet.findAll();

        Promise.all([recetas, products, dietas])
            .then((results) => {
                return res.render('diets', {
                    recetas: results[0],
                    products: results[1],
                    dietas: results[2],
                    usuarioLogueado: req.session.usuarioLogueado
                })
            })
            .catch((err) => console.error(err));

    }
}

module.exports = controller;