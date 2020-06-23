// requerimientos
var fs = require('fs');
var path = require('path');
let bcrypt = require('bcrypt');
var {check, validationResult, body} = require('express-validator');


let usuariosPath = path.resolve(__dirname, '../data/usuarios.json');
function getUsers() {
    let usersJson = fs.readFileSync(usuariosPath, 'utf-8');
    if (usersJson != '') {
        return JSON.parse(usersJson)
    } else {
        return []
    }
};

let usersMiddlewares = {
   middlewareGenerico: function(req, res, next){
       next()
   },
     registerValidation: [
        check('name')
           .exists().withMessage("Debés completar el campo: nombre")
           .isLength({min:3}).withMessage("El nombre debe tener al menos tres caracteres")
           .trim(),
        check('email')
           .exists()
           .isEmail().withMessage("El email no es válido")
           .normalizeEmail(),
        check('password')
           .exists().withMessage('Debés introducir una contraseña')
           .trim()
           .isLength({min:4}).withMessage("La contaseña debe tener al menos 4 caracteres"),
           body('email').custom(function(value){
            let users = getUsers();
            for (let user of users) {
                if(user.email == value){
                    return false;
                };
            }
            return true
            }).withMessage('El email con el que deseas registrarte pertenece a un/a usuario/a ya registrado/a'),
        body('password').custom((value, { req }) => {
            if (value !== req.body.validation) {
              return false
            }
            return true
            }).withMessage('Las contraseñas no coinciden')
       ],

   loginValidation: [
        check('email')
           .exists().withMessage("Debés ingresar un email") 
           .trim()
           .isEmail().withMessage("El email no es válido"),
        body('email').custom(function(value){
               let users = getUsers();
               for (let user of users){
                   if(value == user.email){
                       return true;
                   }
               }
                   return false;
           }).withMessage('No hemos encontrado ningún usuario registrado con ese email'),
        check('password')
           .exists().withMessage("Debés ingresar una contraseña")
           .trim()
           .isLength({min: 4}).withMessage('Contraseña inválida.'),
   ],
};

module.exports = usersMiddlewares;