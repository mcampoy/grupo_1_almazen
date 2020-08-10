let db = require('../database/models');

const controller = {
    //muestra el carrito de compras
    showCart: (req, res) => {
        res.render('productCart', { usuarioLogueado: req.session.usuarioLogueado })
    },

    //si está logueado muestra la página de confirmación de compra y si no, va a loguearse
    confirmPurchase: (req, res) => {
        if (req.session.usuarioLogueado) {
            res.render('confirmPurchase', { usuarioLogueado: req.session.usuarioLogueado })
        } else {
            return res.render("login", { usuarioLogueado: req.session.usuarioLogueado });
        }
    },

    //recibe el id de usuario y crea una orden a partir del carrito de la BD
    createOrder: async(req, res) => {
        if (req.session.usuarioLogueado) {

            userId = req.body.id_user;

            try {
                var cartItems = await db.Cart.findAll({
                    where: {
                        id_user: userId
                    }
                })
                if (cartItems.length) {

                    //busco el último número de orden en la DB
                    var lastOrderNumber = await db.Order.findOne({
                        order: [
                            ['order_number', "DESC"]
                        ],
                        limit: 1,
                    })

                    if (lastOrderNumber) {
                        var orderNumber = lastOrderNumber.order_number + 1;
                    } else {
                        var orderNumber = 1;
                    }

                    //Guardo cada item del carrito en la orden
                    cartItems.forEach(item => {
                        db.Order.create({
                            id_user: userId,
                            order_number: orderNumber,
                            id_product: item.id_product,
                            quantity: item.quantity,
                            price: item.price,
                            discount: item.discount
                        })
                    })

                    //Descuento las cantidades del stock
                    cartItems.forEach(item => {
                        //Me fijo stock actual
                        db.Product.findAll({
                            where: {
                                id: item.id_product,
                            }
                        }).then((productDB) => {
                            //Actualizo stock descontando lo vendido
                            console.log("productDB[0]");
                            console.log(productDB[0]);
                            let newQuantity = productDB[0].stock - item.quantity;
                            if (newQuantity < 0) {
                                newQuantity = 0;
                            }

                            db.Product.update({
                                stock: newQuantity
                            }, {
                                where: {
                                    id: item.id_product,
                                }
                            })
                        })
                    })



                    //Borro el carrito del usuario
                    db.Cart.destroy({
                        where: {
                            id_user: userId
                        }
                    })
                }
                res.redirect("/")

            } catch (error) {
                console.log(error);
            }


        } else {
            return res.render("login", { usuarioLogueado: req.session.usuarioLogueado });
        }

    },

}


module.exports = controller