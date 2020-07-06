let db = require('../database/models');

const controller = {
    list: (req, res) => {

        db.Tip.findAll({
            where: {
                enabled: 1
            }
        }).then((tips) => {

            console.log(tips);
            return res.render("tips", { tips: tips, usuarioLogueado: req.session.usuarioLogueado });

        }).catch((err) => console.error(err));
    }
};

module.exports = controller;