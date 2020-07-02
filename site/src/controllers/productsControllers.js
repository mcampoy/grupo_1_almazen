const fs = require('fs');
const path = require('path');
let db = require('../database/models');
let sequelize = db.sequelize;

const { check, validationResult, body } = require('express-validator');


const controller = {
    productsList: (req, res) => {

        db.Product.findAll({
                where: {
                    enabled: 1
                }
            })
            .then((productos) => {

                return res.render('products', { productos, usuarioLogueado: req.session.usuarioLogueado });
            })
    },

    details: (req, res) => {

        db.Product.findByPk(req.params.id)
            .then((product) => {

                if (product == null) {
                    return res.redirect('/');
                }
                return res.render('productDetail', { product: product, usuarioLogueado: req.session.usuarioLogueado });

            })
    },

    admin: (req, res) => {
        db.Product.findAll()
            .then(products => {

                return res.render('productAdmin', { products: products, usuarioLogueado: req.session.usuarioLogueado });

            })
            .catch((err) => console.error(err));
    },

    cart: (req, res) => {

        return res.render('productCart', { usuarioLogueado: req.session.usuarioLogueado });

    },


    adminDetails: (req, res) => {
        var product = [];
        console.log(req.params.id);
        if (req.params.id != 0) {
            //Edito un producto existente
            product = db.Product.findByPk(req.params.id, {
                include: [
                    { association: "diets" },
                    { association: "categories" },
                    { association: "recipes" }
                ],
            });
        } else {
            //Creo un nuevo producto
            product.id = null;
            product.code = "";
            product.name = "";
            product.description = "";
            product.description_short = "";
            product.quantity = 100;
            product.unit = "gr.";
            product.price = 0;
            product.discount = 0;
            product.stock = 0;
            product.image = "defaultProduct.jpg";
            product.enabled = true;
            product.categories = [];
            product.recipes = [];
            product.diets = [];
        }
        var categories = db.Category.findAll();
        var diets = db.Diet.findAll();
        var recipes = db.Recipe.findAll();
        var edit = req.params.edit;

        Promise.all([product, categories, diets, recipes])
            .then((results) => {
                console.log(results[0]);
                console.log("edit");
                console.log(edit);
                return res.render('productAdminDetail', {
                    product: results[0],
                    categories: results[1],
                    diets: results[2],
                    recipes: results[3],
                    edit: edit, //null, 1 edito, 2 nuevo
                });
            })
            .catch((err) => console.error(err));
    },

    adminUpdate: (req, res, next) => {
        let errors = validationResult(req);
        let product = {
            id: parseInt(req.body.id),
            code: req.body.code,
            name: req.body.name,
            description: req.body.description,
            description_short: req.body.description_short,
            quantity: parseInt(req.body.quantity),
            unit: req.body.unit,
            price: parseInt(req.body.price),
            discount: parseInt(req.body.discount),
            stock: parseInt(req.body.stock),
            categories: req.body.categories,
            recipes: req.body.recipes,
            diets: req.body.diets
        }

        if (!Array.isArray(product.diets)) {
            product.diets = [product.diets];
        }

        if (!Array.isArray(product.recipes)) {
            product.recipes = [product.recipes];
        }

        if (!Array.isArray(product.categories)) {
            product.categories = [product.categories];
        }


        if (typeof req.file !== 'undefined') {
            product.image = req.file.filename //si  se seleccionó algún archivo de imagen
        } else if (
            typeof req.body.imageName == 'undefined' ||
            req.body.imageName == 'deleted') {
            product.image = "defaultProduct.jpg"; // si no se seleccionó y (se borró la imagen que tenía o es producto nuevo)
        } else {
            product.image = req.body.imageName;
        }

        if (typeof req.body.enabled !== 'undefined') {
            product.enabled = true;
        } else {
            product.enabled = false;
        }

        if (errors.isEmpty()) {

            db.Product.update({ //falta guardar categories, diets y recipes en associations
                code: product.code,
                name: product.name,
                description: product.description,
                description_short: product.description_short,
                quantity: product.quantity,
                unit: product.unit,
                price: product.price,
                discount: product.discount,
                stock: product.stock,
                image: product.image,
                enabled: product.enabled,

            }, {
                where: {
                    id: parseInt(req.body.id)
                }
            });


            //res.render('productAdminDetail', { product, categorias, dietas, recetas, edit: false })

        } else {
            return res.render('productAdminDetail', { product, categories, diets, recipes, edit: 1, errors: errors.errors });
        }

    },

    adminCreate: (req, res, next) => {
        let errors = validationResult(req);
        let product = {
            code: req.body.code,
            name: req.body.name,
            description: req.body.description,
            description_short: req.body.description_short,
            quantity: parseInt(req.body.quantity),
            unit: req.body.unit,
            price: parseInt(req.body.price),
            discount: parseInt(req.body.discount),
            stock: parseInt(req.body.stock),
            categories: req.body.categories,
            recipes: req.body.recipes,
            diets: req.body.diets
        }

        if (!Array.isArray(product.diets)) {
            product.diets = [product.diets];
        }

        if (!Array.isArray(product.recipes)) {
            product.recipes = [product.recipes];
        }

        if (!Array.isArray(product.categories)) {
            product.categories = [product.categories];
        }


        if (typeof req.file !== 'undefined') {
            product.image = req.file.filename //si  se seleccionó algún archivo de imagen
        } else if (
            typeof req.body.imageName == 'undefined' ||
            req.body.imageName == 'deleted') {
            product.image = "defaultProduct.jpg"; // si no se seleccionó y (se borró la imagen que tenía o es producto nuevo)
        } else {
            product.image = req.body.imageName;
        }

        if (typeof req.body.enabled !== 'undefined') {
            product.enabled = true;
        } else {
            product.enabled = false;
        }

        if (errors.isEmpty()) {

            db.Product.create({ //falta guardar categories, diets y recipes en associations
                code: product.code,
                name: product.name,
                description: product.description,
                description_short: product.description_short,
                quantity: product.quantity,
                unit: product.unit,
                price: product.price,
                discount: product.discount,
                stock: product.stock,
                image: product.image,
                enabled: product.enabled,
            }); ///faltaría después de un then buscar el nuevo producto y mostrarlo


            //return res.render('productAdminDetail', { product, categories, diets, recipes, edit: 0 });

        } else {
            return res.render('productAdminDetail', { product, categories, diets, recipes, edit: 2, errors: errors.errors });
        }

    },

    delete: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            db.Product.destroy({ //PRIMERO TENGO QUE BORRAR LAS RELACIONES EN LAS TABLAS PIVOT, FALTA HACER ESTO
                where: { id: req.body.id }
            })
        }
        return res.redirect('/product/admin');
    }


    // adminEditDetails: (req, res) => {
    //     let product = [];
    //     if (req.params.id == "0") {
    //         product.id = productIdGenerator();
    //         product.codigo = "";
    //         product.nombre = "";
    //         product.descripcion = "";
    //         product.descripcion_breve = "";
    //         product.cantidad = [cantidad = 100, unidad_medida = "gr."];
    //         product.precio = 0;
    //         product.descuento = 0;
    //         product.stock = 0;
    //         product.image = "defaultProduct.jpg";
    //         product.habilitado = true;
    //         product.categoria = [];
    //         product.receta = [];
    //         product.dieta = [];

    //     } else {
    //         product = getProductById(req.params.id);
    //         if (product == null) {
    //             // Acá debería mostrar un mensaje de error
    //             return res.redirect('/');
    //         }
    //     }


    //     for (i = 0; i < categorias.length; i++) {
    //         var xx = categorias[i].checked = (product.categoria.find((categoria) => {
    //             return categoria == categorias[i].id;
    //         })) ? 1 : 0;
    //     }

    //     for (i = 0; i < dietas.length; i++) {
    //         var xx = dietas[i].checked = (product.dieta.find((dieta) => {
    //             return dieta == dietas[i].id;
    //         })) ? 1 : 0;
    //     }

    //     for (i = 0; i < recetas.length; i++) {
    //         var xx = recetas[i].checked = (product.receta.find((receta) => {
    //             return receta == recetas[i].id;
    //         })) ? 1 : 0;
    //     }

    //     res.render('productAdminDetail', { product, categorias, dietas, recetas, edit: true });

    // },


};

module.exports = controller;