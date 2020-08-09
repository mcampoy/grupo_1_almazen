let db = require('../database/models');

const controller = {

    // MÉTODO PARA MOSTRAR LAS RECETAS
    async recetaList (req, res)  {
        try {
            const recetas = await db.Recipe.findAll({
                    where:{
                        enabled: 1
                    }
                })

                return res.render('recetas', { recetas: recetas, usuarioLogueado: req.session.usuarioLogueado });

        } catch (err) { 
            console.error(err);
        }
    },

    // MÉTODO PARA MOSTRAR UNA RECETA EN PARTICULAR
    async receta (req, res) {
        try {
            const receta = await db.Recipe.findByPk(req.params.id, {
                    include: [{
                        association: "ingredients"
                    }, {
                        association: "steps"
                    }],
                    where: {
                        enabled: 1
                    }
                })
                    if (receta == null) {
                        return res.redirect('/');
                    }

                    return res.render('receta', { receta, usuarioLogueado: req.session.usuarioLogueado });

            } catch (err) {
                console.error(err);
            }
    },

    //MÉTODO PARA MOSTRAR RECETAS SEGÚN EL TIPO DE DIETA
    async category (req, res) {
        try {
            const recetas = await db.Recipe.findAll({
                    where: {
                        enabled: 1,
                        diet: req.params.dieta
                    }
                })
                return res.render('recetasPorDietas', { recetas, usuarioLogueado: req.session.usuarioLogueado });
        } catch (err) {
            console.error(err);
        }
    }
};

module.exports = controller;