// requerimientos
let db = require('../database/models');
var { check, validationResult, body } = require('express-validator');

let productsMiddlewares = {
    // middlewareGenerico: function(req, res, next) {
    //     next()
    // },

    newProductValidation: [
        check('id')
        .exists().withMessage('Error de seguridad.')
        .equals(''),

        check('code')
        .exists().withMessage('Error de seguridad.')
        .trim()
        .isLength({ min: 2, max: 45 }).withMessage("El código debe tener entre 2 y 45 caracteres"),

        check('name')
        .exists().withMessage('Error de seguridad.')
        .trim()
        .isLength({ min: 2, max: 45 }).withMessage("El nombre debe tener entre 2 y 45 caracteres"),

        check('description_short')
        .exists().withMessage("Debés completar el campo: description corta")
        .trim()
        .isLength({ min: 2, max: 150 }).withMessage("La descripción breve debe tener entre 2 y 150 caracteres"),

        check('description')
        .exists().withMessage("Debés completar el campo: descripción")
        .trim()
        .isLength({ min: 2, max: 800 }).withMessage("La descripción debe tener entre 2 y 800 caracteres"),

        check('price')
        .exists().withMessage("Debés completar el campo: precio")
        .trim()
        .isNumeric().withMessage("El precio debe ser un número positivo"),

        check('discount')
        .trim()
        .isNumeric().withMessage("El descuento debe ser un número"),

        check('imageName')
        .exists().withMessage("Error en campo imagen")
        .trim(),

        check('stock')
        .trim()
        .isInt({ min: 0 }).withMessage("El stock debe ser un número positivo"),

        check('quantity')
        .trim()
        .isInt({ min: 0 }).withMessage("La cantidad debe ser un número positivo"),

        check('unit')
        .trim()
        .isLength({ max: 10 }).withMessage("La unidad de medida debe ser de hasta 10 caracteres"),


        // body('code').custom(function(code) { // chequea que el prod. no exista antes de intentar agregarlo
        //     return db.Producto.findAll({
        //         where: {
        //             code: code
        //         }
        //     }).then(prod => {
        //         if (prod) {
        //             return Promise.reject('No se puede agregar el producto porque ya existe. Pruebe con otro código.');
        //         }
        //     });
        // })
    ],

    editProductValidation: [
        check('id')
        .exists().withMessage('Error de seguridad.')
        .trim(),

        check('code')
        .exists().withMessage('Error de seguridad.')
        .trim()
        .isLength({ min: 2, max: 45 }).withMessage("El código debe tener entre 2 y 45 caracteres"),

        check('name')
        .exists().withMessage('Error de seguridad.')
        .trim()
        .isLength({ min: 2, max: 45 }).withMessage("El nombre debe tener entre 2 y 45 caracteres"),

        check('description_short')
        .exists().withMessage("Debés completar el campo: description corta")
        .trim()
        .isLength({ min: 2, max: 150 }).withMessage("La descripción breve debe tener entre 2 y 150 caracteres"),

        check('description')
        .exists().withMessage("Debés completar el campo: descripción")
        .trim()
        .isLength({ min: 2, max: 800 }).withMessage("La descripción debe tener entre 2 y 800 caracteres"),

        check('price')
        .exists().withMessage("Debés completar el campo: precio")
        .trim()
        .isNumeric().withMessage("El precio debe ser un número positivo"),

        check('discount')
        .trim()
        .isNumeric().withMessage("El descuento debe ser un número"),

        check('imageName')
        .exists().withMessage("Debés completar el campo: imagen")
        .trim(),

        check('stock')
        .trim()
        .isInt({ min: 0 }).withMessage("El stock debe ser un número positivo"),

        check('quantity')
        .trim()
        .isInt({ min: 0 }).withMessage("La cantidad debe ser un número positivo"),

        check('unit')
        .trim()
        .isLength({ max: 10 }).withMessage("La unidad de medida debe ser de hasta 10 caracteres"),




        // body('code', 'id').custom(function(value1, value2) { // chequea que el código no sea igual al de otro producto
        //     return db.Product.findAll({
        //         where: {
        //             code: value1,
        //             id: {
        //                 [Op.ne]: value2
        //             }
        //         }
        //         .then(prod => {
        //             console.log(prod);
        //             if (prod) {
        //                 return Promise.reject('No se puede agregar el producto porque ya existe. Pruebe con otro código.');
        //             }
        //         })
        //     })
        // })
        // body('code').custom(function(code) { // chequea que el prod. no exista antes de intentar agregarlo
        //     return db.Producto.findAll({
        //         where: {
        //             code: code
        //         }
        //     }).then(prod => {
        //         if (prod) {
        //             return Promise.reject('No se puede agregar el producto porque ya existe. Pruebe con otro código.');
        //         }
        //     });
        // })
    ],

    deleteProductValidation: [
        // check('id')
        // .trim()
        // .exists().withMessage("id de producto no válido")
        // .isInt().withMessage("id de producto no válido"),

        // body('id').custom(function(value) {
        //     return db.Product.findByPk(value)
        //         .then(prod => {

        //             if (prod == null) {
        //                 throw new Error('El producto que intenta borrar no existe.');
        //             }
        //         })
        // })
    ],
};

module.exports = productsMiddlewares;