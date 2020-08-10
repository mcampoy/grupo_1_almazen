// requerimientos
let db = require('../database/models');
var { check, validationResult, body } = require('express-validator');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function checkProductWithSameCode(code, id, callback) {
    let productoIgualCodigo = db.Product.findAll({
        where: {
            code: code,
            id: {
                [Op.not]: id
            },
        }
    })
    return productoIgualCodigo.then(function(results) {
        return results[0];
    }).catch(function(err) {
        console.log("Error verificando código.");
        console.log(err);
        throw err;
    });
}


function findByid(id, callback) {
    let producto = db.Product.findAll({
        where: {
            id: id
        },
    })
    return producto.then(function(results) {
        return results[0];
    }).catch(function(err) {
        console.log("Error verificando id.");
        console.log(err);
        throw err;
    });
}


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

        check('hot_discount')
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

        // chequea que el prod. no exista antes de intentar agregarlo
        body('code').custom((value) => {
            return checkProductWithSameCode(value, null).then(function(product) {
                if (product) {
                    throw new Error('No se puede agregar el producto porque ya existe. Pruebe con otro código.');
                }
            })
        })
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

        // chequea que el código no sea igual al de otro producto
        body('code').custom((value, { req }) => {
            return checkProductWithSameCode(value, req.body.id).then(function(product) {
                if (product) {
                    throw new Error('No se puede agregar el producto porque ya existe. Pruebe con otro código.');
                }
            })
        })
    ],

    deleteProductValidation: [
        check('id')
        .trim()
        .exists().withMessage("id de producto no válido")
        .isInt().withMessage("id de producto no válido"),

        body('id').custom((value) => {
            return findByid(value).then(function(product) {
                console.log(product);
                if (!product) {
                    throw new Error('El producto que intenta borrar no existe.');
                }
            })
        })
    ],
};

module.exports = productsMiddlewares;