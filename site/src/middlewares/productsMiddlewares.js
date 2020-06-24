// requerimientos
var fs = require('fs');
var path = require('path');
var { check, validationResult, body } = require('express-validator');

let productsPath = path.resolve(__dirname, '../data/productsDataBase.json');

function getProducts() {
    let productsJson = fs.readFileSync(productsPath, 'utf-8');

    if (productsJson != ' ') {
        return JSON.parse(productsJson)
    } else {
        return []
    }
};

let productsMiddlewares = {
    // middlewareGenerico: function(req, res, next) {
    //     next()
    // },

    productSaveValidation: [
        // check('id')
        // .exists().withMessage("id de producto no válido")
        // .isInt().withMessage("id de producto no válido"),

        // check('codigo')
        // .exists().withMessage("Debés completar el campo código")
        // .isLength({ min: 2, max: 10 }).withMessage("El código debe tener entre 2 y 10 caracteres")
        // .trim(),

        // check('nombre')
        // .exists().withMessage("Debés completar el campo: nombre")
        // .isLength({ min: 2, max: 45 }).withMessage("El nombre debe tener entre 2 y 45 caracteres")
        // .trim(),

        // check('descripcion_breve')
        // .exists().withMessage("Debés completar el campo: nombre")
        // .isLength({ min: 2, max: 150 }).withMessage("La descripción breve debe tener entre 2 y 150 caracteres")
        // .trim(),

        // check('descripcion')
        // .exists().withMessage("Debés completar el campo: nombre")
        // .isLength({ min: 2, max: 500 }).withMessage("La descripción debe tener entre 2 y 500 caracteres")
        // .trim(),

        // check('precio')
        // .exists().withMessage("Debés completar el campo: precio")
        // .isNumeric().withMessage("El precio debe ser un número positivo")
        // .trim(),

        // check('descuento')
        // .isNumeric().withMessage("El descuento debe ser un número")
        // .trim(),

        // check('imageName')
        // .exists().withMessage("Debés completar el campo: precio")
        // .trim()
        // .isLength({ max: 4 }).withMessage("La unidad de medida debe ser de hasta 4 caracteres"),

        // check('stock')
        // .trim()
        // .isInt({ min: 0 }).withMessage("El stock debe ser un número positivo"),


        // check('cantidad')
        // .trim()
        // .isInt({ min: 0 }).withMessage("El stock debe ser un número positivo"),

        // check('unidad_medida')
        // .trim()
        // .isLength({ max: 4 }).withMessage("La unidad de medida debe ser de hasta 4 caracteres"),

        // check('habilitado')
        // .trim(),
    ],
    productDeleteValidation: [
        // check('id')
        // .exists().withMessage("id de producto no válido")
        // .isInt().withMessage("id de producto no válido")
        // .trim(),
        // body('id').custom(function(value) {
        //     let products = getProducts();
        //     for (let product of products) {
        //         if (value == product.id) {
        //             return true;
        //         }
        //     }
        //     return false;
        // }).withMessage('El producto que intenta borrar no existe'),
    ],
};

module.exports = productsMiddlewares;