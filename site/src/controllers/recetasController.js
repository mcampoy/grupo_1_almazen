let db = require('../database/models');

const controller = {

    recetaList: (req, res) => {

        db.Recipe.findAll()
            .then(recetas => {

                return res.render('recetas', { recetas: recetas, usuarioLogueado: req.session.usuarioLogueado });

            })
            .catch((err) => console.error(err));
    },

    receta: (req, res) => {

        db.Recipe.findByPk(req.params.id, {
                include: [{
                    association: "ingredients"
                }, {
                    association: "steps"
                }]
            })
            .then((receta) => {
                if (receta == null) {
                    return res.redirect('/');
                }

                return res.render('receta', { receta, usuarioLogueado: req.session.usuarioLogueado });

            })
            .catch((err) => console.error(err));
    },


    category: (req, res) => {

        db.Recipe.findAll({
                where: {
                    diet: req.params.dieta
                }
            })
            .then((recetas) => {
                return res.render('recetasPorDietas', { recetas: recetas, usuarioLogueado: req.session.usuarioLogueado });
            })
            .catch((err) => console.error(err));

    },
};

module.exports = controller;