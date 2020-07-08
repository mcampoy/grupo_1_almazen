let db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
    check,
    validationResult,
    body
} = require('express-validator');


const controller = {
    productsList: (req, res) => {
        let categories = db.Category.findAll()
        let products = db.Product.findAll({
            where: {
                enabled: 1,
                stock: {
                    [db.Sequelize.Op.gte]: 1
                },
            }
        })
        Promise.all([products, categories])
            .then((results) => {

                return res.render('products', {
                    products: results[0],
                    categories: results[1],
                    usuarioLogueado: req.session.usuarioLogueado
                });

            }).catch((err) => console.error(err));
    },

    category: (req, res) => {

        let categories = db.Category.findAll()
        let category = db.Category.findByPk(req.params.id, {
            include: ["products"]
        })
        Promise.all([category, categories])
            .then((results) => {

                return res.render('productByCategory', {
                    category: results[0],
                    categories: results[1],
                    usuarioLogueado: req.session.usuarioLogueado
                });
            }).catch((err) => console.error(err));
    },

    details: (req, res) => {
        
        let category = db.Category.findByPk(req.params.id, {
            include: [{
                association: "products"
            }],
        })

        let product = db.Product.findByPk(req.params.id, {
            include: [{
                association: "categories"
            }]
        })

        let related = db.Product.findAll({
            include: [{
                association: "categories"
            }],
            where: {
                enabled: 1,
                id: {[Op.not]: req.params.id},
            },
            order: [
                ['id', "DESC"]
            ],
            limit: 3,
        })
        Promise.all([category, product, related])
            .then((results) => {
                if (results[1] == null) {
                    return res.redirect('/');
                }
                return res.render('productDetail', {
                    category: results[0],
                    product: results[1],
                    related: results[2],
                    usuarioLogueado: req.session.usuarioLogueado
                });
            }).catch((err) => console.error(err));
    },

    admin: (req, res) => {
        db.Product.findAll()
            .then(products => {

                return res.render('productAdmin', {
                    products: products,
                    usuarioLogueado: req.session.usuarioLogueado
                });

            })
            .catch((err) => console.error(err));
    },

    // cart: (req, res) => {

    //     return res.render('productCart', { usuarioLogueado: req.session.usuarioLogueado });

    // },

    //MUESTRA LA VISTA DENTRO DEL IFRAME DE DETALLES DEL PRODUCTO SELECCIONADO
    // Recibe como parámetros el id del producto y edit (null muestra, 1 edito, 2 nuevo)
    adminDetails: (req, res) => {
        var product = [];
        if (req.params.id != 0) {
            //Edito un producto existente
            product = db.Product.findByPk(req.params.id, {
                include: [{
                        association: "diets"
                    },
                    {
                        association: "categories"
                    },
                    {
                        association: "recipes"
                    }
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

        let errors = validationResult(req);

        if (errors.isEmpty()) {

            db.Product.update({
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

            //Borro las relaciones antiguas con categorìas
            db.ProductCategory.destroy({
                where: {
                    id_product: product.id
                }
            }).then(
                //Creo las relaciones exitentes con categorías
                product.categories.forEach(idCategory => {
                    db.ProductCategory.create({
                        id_product: product.id,
                        id_category: idCategory
                    })
                })
            )

            //Borro las relaciones antiguas con dietas
            db.ProductDiet.destroy({
                where: {
                    id_product: product.id
                }
            }).then(
                //Creo las relaciones exitentes con dietas
                product.diets.forEach(idDiet => {
                    db.ProductDiet.create({
                        id_product: product.id,
                        id_diet: idDiet
                    })
                })
            )

            //Borro las relaciones antiguas con recetas
            db.ProductRecipe.destroy({
                where: {
                    id_product: product.id
                }
            }).then(
                //Creo las relaciones exitentes con recetas
                product.recipes.forEach(idRecipe => {
                    db.ProductRecipe.create({
                        id_product: product.id,
                        id_recipe: idRecipe
                    })
                })
            ).then(() => {
                var categories = db.Category.findAll();
                var diets = db.Diet.findAll();
                var recipes = db.Recipe.findAll();
                Promise.all([categories, diets, recipes])
                    .then((results) => {
                        return res.render('productAdminDetail', {
                            product: product,
                            categories: results[0],
                            diets: results[1],
                            recipes: results[2],
                        });
                    })
                    .catch((err) => console.error(err));
            })

        } else {
            var categories = db.Category.findAll();
            var diets = db.Diet.findAll();
            var recipes = db.Recipe.findAll();
            Promise.all([categories, diets, recipes])
                .then((results) => {
                    return res.render('productAdminDetail', {
                        product: product,
                        categories: results[0],
                        diets: results[1],
                        recipes: results[2],
                        edit: 1,
                        errors: errors.errors
                    });
                })
                .catch((err) => console.error(err));
        }

    },

    adminCreate: (req, res, next) => {
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

        let errors = validationResult(req);
        if (errors.isEmpty()) {

            db.Product.create({
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
            }).then((prod) => {

                //Creo las relaciones exitentes con categorías
                product.categories.forEach(idCategory => {
                    db.ProductCategory.create({
                        id_product: prod.id,
                        id_category: idCategory
                    })
                });

                //Creo las relaciones exitentes con dietas
                product.diets.forEach(idDiet => {
                    db.ProductDiet.create({
                        id_product: prod.id,
                        id_diet: idDiet
                    })
                });

                //Creo las relaciones exitentes con recetas
                product.recipes.forEach(idRecipe => {
                    db.ProductRecipe.create({
                        id_product: prod.id,
                        id_recipe: idRecipe
                    })
                });


                var categories = db.Category.findAll();
                var diets = db.Diet.findAll();
                var recipes = db.Recipe.findAll();
                Promise.all([categories, diets, recipes])
                    .then((results) => {
                        return res.render('productAdminDetail', {
                            product: product,
                            categories: results[0],
                            diets: results[1],
                            recipes: results[2],
                        });
                    })
                    .catch((err) => console.error(err));
            });

        } else {
            var categories = db.Category.findAll();
            var diets = db.Diet.findAll();
            var recipes = db.Recipe.findAll();
            Promise.all([categories, diets, recipes])
                .then((results) => {
                    return res.render('productAdminDetail', {
                        product: product,
                        categories: results[0],
                        diets: results[1],
                        recipes: results[2],
                        edit: 2,
                        errors: errors.errors
                    });
                })
                .catch((err) => console.error(err));
        }

    },


    delete: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            db.ProductCategory.destroy({
                where: {
                    id_product: req.body.id
                }
            })
            db.ProductDiet.destroy({
                where: {
                    id_product: req.body.id
                }
            })
            db.ProductRecipe.destroy({
                where: {
                    id_product: req.body.id
                }
            })
            db.Product.destroy({
                where: {
                    id: req.body.id
                }
            })
        }
        return res.redirect('/product/admin');
    },


    // INTENTO DE IMPLEMENTAR BUSCADOR

    find: (req, res) => {
      let products =
        db.Product.findAll({
            where: {
            enabled: 1,
            name: {[Op.like]: `%${req.body.search}%`}
        }
        })

        let recetas = 
        db.Recipe.findAll({
            where: {
            enabled: 1,
            name: {[Op.like]: `%${req.body.search}%`}
        }
        })

        Promise.all([products, recetas])
        .then((results) => {
            return res.render('search', {products: results[0], recetas: results[1], usuarioLogueado: req.session.usuarioLogueado })
        })

    }
};

module.exports = controller;