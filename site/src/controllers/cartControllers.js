let db = require('../database/models');

const controller = {
    showCart: (req, res) => {
        res.render('productCart', { usuarioLogueado: req.session.usuarioLogueado })
    },
    confirmPurchase: (req, res) => {
        if (req.session.usuarioLogueado) {
            res.render('confirmPurchase', { usuarioLogueado: req.session.usuarioLogueado })
        } else {
            return res.render("login", { usuarioLogueado: req.session.usuarioLogueado });
        }
    }
}


module.exports = controller