const fs = require('fs');
const path = require('path');

const { check, validationResult, body } = require('express-validator');

let productsPath = path.resolve(__dirname, '../data/productsDataBase.json');
let categoriasPath = path.resolve(__dirname, '../data/categoriasDataBase.json');
let recetasPath = path.resolve(__dirname, '../data/recetasDataBase.json');
let dietasPath = path.resolve(__dirname, '../data/dietasDataBase.json');

const products = getProducts();
const categorias = getCategorias();
const recetas = getRecetas();
const dietas = getDietas();

function getProducts() {
    let productsJson = fs.readFileSync(productsPath, 'utf-8');

    if (productsJson != ' ') {
        return JSON.parse(productsJson)
    } else {
        return []
    }
};

function getCategorias() {
    let categoriasJson = fs.readFileSync(categoriasPath, 'utf-8');
    if (categoriasJson != ' ') {
        return JSON.parse(categoriasJson)
    } else {
        return []
    }
};

function getRecetas() {
    let recetasJson = fs.readFileSync(recetasPath, 'utf-8');
    if (recetasJson != ' ') {
        return JSON.parse(recetasJson)
    } else {
        return []
    }
};

function getDietas() {
    let dietasJson = fs.readFileSync(dietasPath, 'utf-8');
    if (dietasJson != ' ') {
        return JSON.parse(dietasJson)
    } else {
        return []
    }
};

function getProductById(id) {
    return products.find(product => product.id == id);
}

function saveProduct(product) {
    // let products = getProducts();
    let esNuevo = true;
    products.forEach((productoExistente, index) => {
        if (productoExistente.id == product.id) {
            esNuevo = false;
            if (typeof product.image == 'undefined')
                product.image = products[index].image;
            products[index] = product;
        }
    });

    if (esNuevo == true) products.push(product);
    fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
}

function productIdGenerator() {
    let mayor = 1;
    if (products.length) {
        products.forEach(product => {
            if (product.id > mayor) mayor = product.id;
        });
        return mayor + 1;
    } else {
        return 1;
    }
};

const controller = {
    productsList: (req, res) => {
        let productos = [];
        for (let product of products) {
            if (product.habilitado) {
                productos.push(product);
            }
        }
        res.render('products', {
            productos
        })
    },

    details: (req, res) => {
        const product = products.find((product) => {
            return product.id == req.params.id;
        })
        if (product == null) {
            return res.redirect('/');
        }
        res.render('productDetail', {
            product: product
        });
    },

    admin: (req, res) => {
        res.render('productAdmin', { products });
    },

    cart: (req, res) => {
        res.render('productCart');
    },

    adminShowDetails: (req, res) => {
        let product;
        if (typeof getProductById(req.params.id) != 'undefined') {
            product = getProductById(req.params.id);
        } else {
            product = getProductById(Math.min.apply(null, products.map(function(a) { return a.id; })));
        }

        for (i = 0; i < categorias.length; i++) {
            var xx = categorias[i].checked = (product.categoria.find((categoria) => {
                return categoria == categorias[i].id;
            })) ? 1 : 0;
        }

        for (i = 0; i < dietas.length; i++) {
            var xx = dietas[i].checked = (product.dieta.find((dieta) => {
                return dieta == dietas[i].id;
            })) ? 1 : 0;
        }

        for (i = 0; i < recetas.length; i++) {
            var xx = recetas[i].checked = (product.receta.find((receta) => {
                return receta == recetas[i].id;
            })) ? 1 : 0;
        }

        if (product == null) {
            // Acá debería mostrar un mensaje de error
            return res.redirect('/');
        }

        res.render('productAdminDetail', { product, categorias, dietas, recetas, edit: false });
    },

    adminEditDetails: (req, res) => {
        let product = [];
        if (req.params.id == "0") {
            product.id = productIdGenerator();
            product.codigo = "";
            product.nombre = "";
            product.descripcion = "";
            product.descripcion_breve = "";
            product.cantidad = [cantidad = 100, unidad_medida = "gr."];
            product.precio = 0;
            product.descuento = 0;
            product.stock = 0;
            product.image = "defaultProduct.jpg";
            product.habilitado = true;
            product.categoria = [];
            product.receta = [];
            product.dieta = [];

        } else {
            product = getProductById(req.params.id);
            if (product == null) {
                // Acá debería mostrar un mensaje de error
                return res.redirect('/');
            }
        }


        for (i = 0; i < categorias.length; i++) {
            var xx = categorias[i].checked = (product.categoria.find((categoria) => {
                return categoria == categorias[i].id;
            })) ? 1 : 0;
        }

        for (i = 0; i < dietas.length; i++) {
            var xx = dietas[i].checked = (product.dieta.find((dieta) => {
                return dieta == dietas[i].id;
            })) ? 1 : 0;
        }

        for (i = 0; i < recetas.length; i++) {
            var xx = recetas[i].checked = (product.receta.find((receta) => {
                return receta == recetas[i].id;
            })) ? 1 : 0;
        }

        res.render('productAdminDetail', { product, categorias, dietas, recetas, edit: true });

    },

    adminSaveDetails: (req, res, next) => {
        let errors = validationResult(req);
        let product = {
            id: parseInt(req.body.id),
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            descripcion_breve: req.body.descripcion_breve,
            cantidad: {
                cantidad: parseInt(req.body.cantidad),
                unidad_medida: req.body.unidad_medida
            },
            precio: parseInt(req.body.precio),
            descuento: parseInt(req.body.descuento),
            stock: parseInt(req.body.stock),
            categoria: req.body.categoria,
            receta: req.body.receta,
            dieta: req.body.dieta
        }

        if (!Array.isArray(product.dieta)) {
            product.dieta = [product.dieta];
        }

        if (!Array.isArray(product.receta)) {
            product.receta = [product.receta];
        }

        if (!Array.isArray(product.categoria)) {
            product.categoria = [product.categoria];
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

        if (typeof req.body.habilitado !== 'undefined') {
            product.habilitado = true;
        } else {
            product.habilitado = false;
        }

        if (errors.isEmpty()) {

            saveProduct(product);
            res.render('productAdminDetail', { product, categorias, dietas, recetas, edit: false })

        } else {
            return res.render('productAdminDetail', { product, categorias, dietas, recetas, edit: true, errors: errors.errors });
        }

    },

    delete: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            products.forEach((product, index) => {
                if (product.id == parseInt(req.body.id)) {
                    products.splice(index, 1);
                }
            });
            fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
            res.redirect('admin');
        } else {
            res.render('productAdmin', { products, errors: errors.errors });
        }
    }
};

module.exports = controller;