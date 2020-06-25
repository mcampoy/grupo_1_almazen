let soloUsuariosLogueados = {
    soloUsuariosLogueados: function(req, res, next) {
        //     if (req.session.soloUsuariosLogueados == undefined) {
        //         res.redirect('/users/login');
        //     } else {
        next(); // lo deja pasar porque está logueado
        //     }
    }
}
module.exports = soloUsuariosLogueados;