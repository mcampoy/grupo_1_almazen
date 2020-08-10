let db = require('../../database/models');
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const controller = {
    // sincroniza el carrito de LocalStorage y el de DB
    syncDBCart: async(req, res) => {


        userId = req.body.userId;
        cartItems = JSON.parse(req.body.cartItems);

        try {
            var cartDB = await db.Cart.findAll({
                raw: true,
                where: {
                    id_user: userId
                }
            })

            //Reviso cada item del carrito y si no está en la base de datos lo creo
            if (cartItems.length) {
                cartItems.forEach(item => {

                    var idItemDB = null;
                    if (cartDB.length) {
                        cartDB.forEach((itemDB) => {
                            if (itemDB.id_product == item.id) {
                                idItemDB = itemDB.id;
                            }
                        })
                    }



                    if (idItemDB) { //Ya está cargado de en la DB



                        promise1 = db.Cart.update({
                            quantity: item.quantity,
                            price: item.price,
                            discount: item.discount
                        }, {
                            where: {
                                id: idItemDB,
                            },
                        })


                    } else {
                        //Lo cargo porque no estaba
                        promise1 = db.Cart.create({
                            id_user: userId,
                            id_product: item.id,
                            quantity: item.quantity,
                            price: item.price,
                            discount: item.discount
                        })
                    }
                    Promise.all(promise1).then((values) => {

                    })


                })
            }






            //tengo que enviar a CART y a Local Storage: id name description_short weight unit price discount image quantity
            let newCart = await db.Cart.findAll({

                include: [{
                    association: "products"
                }],
                where: {
                    id_user: userId
                },
            })
            let resp = [];
            newCart.forEach(newItem => {
                let itemToPush = {
                    "id": newItem.id_product,
                    "name": newItem.products.name,
                    "description_short": newItem.products.description_short,
                    "weight": newItem.products.quantity,
                    "unit": newItem.products.unit,
                    "price": newItem.products.price,
                    "discount": newItem.products.discount,
                    "image": newItem.products.image,
                    "quantity": newItem.quantity,
                }

                resp.push(itemToPush);
            });

            return res.json(resp)




        } catch (error) {
            return res.status(500).json({ ok: false, error })
        }
    },

    //  /api/users/update recibe item y qty para actualizar cart en DB
    updateDBItem: (req, res) => {
        var userId = req.body.userId;
        var cartItem = JSON.parse(req.body.cartItem);



        if (cartItem.quantity == 0) {

            db.Cart.destroy({
                where: {
                    id_product: cartItem.id,
                    id_user: userId
                }
            }).then(() => {

                return res.status(200).json(cartItem)
            });

        } else {

            try {

                //Si está cargado, actualizo el registro

                db.Cart.findAll({
                        where: {
                            id_user: userId,
                            id_product: cartItem.id,
                        }
                    })
                    .then((itemDB) => {


                        if (itemDB[0]) {

                            db.Cart.update({
                                    quantity: cartItem.quantity,
                                    price: Number(cartItem.price),
                                    discount: Number(cartItem.discount)
                                }, {
                                    where: {
                                        id: itemDB[0].id
                                    }
                                })
                                .then((created) => {
                                    if (created) return res.status(200).json(cartItem)

                                }).catch(error => {
                                    return res.status(500).json({ ok: false, error })
                                })
                        } else {
                            console.log("no está en la base");
                            db.Cart.create({
                                id_user: userId,
                                id_product: cartItem.id,
                                quantity: cartItem.quantity,
                                price: Number(cartItem.price),
                                discount: Number(cartItem.discount)
                            }).then((created) => {
                                if (created) return res.status(200).json(cartItem)

                            }).catch(error => {
                                return res.status(500).json({ ok: false, error })
                            })
                        }


                    })

            } catch (error) {
                return res.status(500).json({ ok: false, error })
            }
        }
    },

    emptyCart: async(req, res) => {
        userId = req.body.userId;
        try {

            let deleteCArt = await db.Cart.destroy({
                where: {
                    id_user: userId
                },
            })


            let resp = [];
            return res.json(resp)

        } catch (error) {
            return res.status(500).json({ ok: false, error })
        }

    }

}

module.exports = controller;