// requerimientos
var fs = require('fs');
var path = require('path');
let db = require('../database/models');
var { check, validationResult, body } = require('express-validator');

let productsMiddlewares = {
    // middlewareGenerico: function(req, res, next) {
    //     next()
    // },

    newProductValidation: [
        // check('id')
        // .exists().withMessage('Error de seguridad.'), //Acá debo chequear que sea =''. Corregir.

        // check('code')
        // .exists().withMessage('Error de seguridad.')
        // .trim()
        // .isLength({ min: 2, max: 45 }).withMessage("El código debe tener entre 2 y 10 caracteres"),
        // // .isNumeric({ no_symbols: true }).withMessage('El Código del producto sólo acepta dígitos numéricos.'),

        // check('name')
        // .exists().withMessage('Error de seguridad.')
        // .trim()
        // .isLength({ min: 2, max: 45 }).withMessage("El nombre debe tener entre 2 y 45 caracteres"),

        // check('description_short')
        // .exists().withMessage("Debés completar el campo: description corta")
        // .isLength({ min: 2, max: 150 }).withMessage("La descripción breve debe tener entre 2 y 150 caracteres")
        // .trim(),

        // check('description:')
        // .exists().withMessage("Debés completar el campo: descripción")
        // .isLength({ min: 2, max: 500 }).withMessage("La descripción debe tener entre 2 y 500 caracteres")
        // .trim(),

        // check('price')
        // .exists().withMessage("Debés completar el campo: precio")
        // .isNumeric().withMessage("El precio debe ser un número positivo")
        // .trim(),

        // check('discount')
        // .isNumeric().withMessage("El descuento debe ser un número")
        // .trim(),

        // check('imageName')
        // .trim()
        // .exists().withMessage("Debés completar el campo: precio")
        // .isLength({ max: 4 }).withMessage("La unidad de medida debe ser de hasta 4 caracteres"),

        // check('stock')
        // .trim()
        // .isInt({ min: 0 }).withMessage("El stock debe ser un número positivo"),

        // check('quantity')
        // .trim()
        // .isInt({ min: 0 }).withMessage("El stock debe ser un número positivo"),

        // check('unit')
        // .trim()
        // .isLength({ max: 4 }).withMessage("La unidad de medida debe ser de hasta 4 caracteres"),

        // check('enabled')
        // .trim(),

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
        // check('id')
        // .exists().withMessage('Error de seguridad.'), //Acá debo chequear que sea =''. Corregir.

        // check('code')
        // .exists().withMessage('Error de seguridad.')
        // .trim()
        // .isLength({ min: 2, max: 45 }).withMessage("El código debe tener entre 2 y 10 caracteres"),
        // // .isNumeric({ no_symbols: true }).withMessage('El Código del producto sólo acepta dígitos numéricos.'),

        // check('name')
        // .exists().withMessage('Error de seguridad.')
        // .trim()
        // .isLength({ min: 2, max: 45 }).withMessage("El nombre debe tener entre 2 y 45 caracteres"),

        // check('description_short')
        // .exists().withMessage("Debés completar el campo: description corta")
        // .isLength({ min: 2, max: 150 }).withMessage("La descripción breve debe tener entre 2 y 150 caracteres")
        // .trim(),

        // check('description:')
        // .exists().withMessage("Debés completar el campo: descripción")
        // .isLength({ min: 2, max: 500 }).withMessage("La descripción debe tener entre 2 y 500 caracteres")
        // .trim(),

        // check('price')
        // .exists().withMessage("Debés completar el campo: precio")
        // .isNumeric().withMessage("El precio debe ser un número positivo")
        // .trim(),

        // check('discount')
        // .isNumeric().withMessage("El descuento debe ser un número")
        // .trim(),

        // check('imageName')
        // .trim()
        // .exists().withMessage("Debés completar el campo: precio")
        // .isLength({ max: 4 }).withMessage("La unidad de medida debe ser de hasta 4 caracteres"),

        // check('stock')
        // .trim()
        // .isInt({ min: 0 }).withMessage("El stock debe ser un número positivo"),

        // check('quantity')
        // .trim()
        // .isInt({ min: 0 }).withMessage("El stock debe ser un número positivo"),

        // check('unit')
        // .trim()
        // .isLength({ max: 4 }).withMessage("La unidad de medida debe ser de hasta 4 caracteres"),

        // check('enabled')
        // .trim(),

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
        // .trim(),
        // .exists().withMessage("id de producto no válido")
        // .isInt().withMessage("id de producto no válido")

        // body('id').custom(function(id) {
        //     return db.Producto.findByPk(id).then(id => {
        //         if (id == undefined) { //Revisar esta condición
        //             return Promise.reject('El producto que intenta borrar no existe.');
        //         }
        //     });
        // }).withMessage('El producto que intenta borrar no existe'),
    ],
};

module.exports = productsMiddlewares;