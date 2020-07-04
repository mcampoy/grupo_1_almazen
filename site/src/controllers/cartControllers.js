let db = require('../database/models');

const controller = {
    showCart: (req, res)=>{
        res.render('productCart', {usuarioLogueado: req.session.usuarioLogueado })
    }



}


module.exports = controller