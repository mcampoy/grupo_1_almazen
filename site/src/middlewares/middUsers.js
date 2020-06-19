const {check, validationResult, body} = require('express-validator');

let userMidd = {

    registerUserValidation: [
        check('nombre')
            .exists().withMessage('Error de seguridad.') // el campo nombre no está definido en el request
            .trim()
            .isLength({min: 3}).withMessage('Error: El Nombre debe tener al menos 3 caracteres.'),
         check('apellido')
            .exists().withMessage('Error de seguridad.') // el campo apellido no está definido en el request
            .trim()
            .isLength({min: 3}).withMessage('Error: El Apellido debe tener al menos 3 caracteres.'),
         check('password')
            .exists().withMessage('Error de seguridad.') // el campo password no está definido en el request
            .trim()
            .isLength({min: 6}).withMessage('Error: La Contraseña debe contener al menos 6 caracteres.'),
         check('email')
            .exists().withMessage('Error de seguridad.') // el campo email no está definido en el request
            .isEmail().withMessage('El Email no es válido.')
            .normalizeEmail(), //sanitiza el email
         body().custom(function(req){ // valida que se haya repetido la constraseña
               if (req.password === req.password2) {
                  return true; // las contraseñas son iguales
               }else {
                  return false; // error, las constraseñas son distintas
               }
            }).withMessage('Error: debe repetir la contraseña en el campo "Repetir Contraseña".'),
         body('email').custom(function(valor){ // chequeamos si el usuario ya existe
            let exist = userController.searchByEmail(valor);
            if (exist == null) {
               return true;
            }else{
               return false; // no pasó la validación, se mostrará mensaje de error
            }
         }).withMessage('Error: ya existe un usuario registrado con el mismo email.'),
      ],
}

module.exports = userMidd