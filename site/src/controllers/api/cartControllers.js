let db = require('../../database/models');
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const controller = {
    // sincroniza el carrito de LocalStorage y el de DB
    syncDBCart: async(req, res) => {
        console.log("req.body syncDBCart");
        console.log(req.body);

        userId = req.body.userId;
        cartItems = JSON.parse(req.body.cartItems);
        console.log("cartItems");
        console.log(cartItems);

        try {

            var cartDB = await db.Cart.findAll({
                raw: true,
                where: {
                    id_user: userId
                }
            })

            console.log("cartDB");
            console.log(cartDB);
            console.log("cartDB[0].Cart");
            console.log(cartDB[0]);
            //console.log(Object.keys(cartItems).lenght);
            console.log("cartItems.length");
            console.log(cartItems.length);

            //Reviso cada item del carrito y si no está en la base de datos lo creo
            if (cartItems.length) {
                cartItems.forEach(item => {
                    console.log("item");
                    console.log(item);

                    var idItemDB = null;
                    // // var qty = 0;
                    if (cartDB.length) {
                        cartDB.forEach((itemDB) => {
                            console.log("itemDB");
                            console.log(itemDB);

                            if (itemDB.id_product == item.id) {
                                idItemDB = itemDB.id;
                                //qtyDB = itemDB.quantity;
                            }


                            console.log("idItemDB in foreach");
                            console.log(idItemDB);
                        })
                    }



                    if (idItemDB) { //Ya está cargado de en la DB
                        console.log("idItemDB");
                        console.log(idItemDB);



                        db.Cart.update({
                            quantity: item.quantity,
                            price: item.price,
                            discount: item.discount
                        }, {
                            where: {
                                id: idItemDB,
                            },
                        })


                    } else { //Lo cargo porque no estaba
                        console.log(" create in db");
                        var count = db.Cart.create({
                            id_user: userId,
                            id_product: item.id,
                            quantity: item.quantity,
                            price: item.price,
                            discount: item.discount
                        })
                    }
                })
            }
            //tengo que enviar a CART y a Local Storage: id name description_short weight unit price discount image quantity
            let newCart = await db.Cart.findAll({


                // ]include: ["users"],
                include: [{
                    association: "products"
                }],
                where: {
                    id_user: userId
                },
            })

            // product = db.Product.findByPk(req.params.id, {
            //     include: [{
            //             association: "diets"
            //         },
            //         {
            //             association: "recipes"
            //         }
            //     ],
            // });



            console.log("newCart");

            console.log(newCart);
            //console.log(newCart[0].products)


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

                console.log("itemToPush");
                console.log(itemToPush);
                resp.push(itemToPush);

            });


            return res.json(resp)
                //return res.send([{ "id": 1, "name": "Cúrcuma", "description_short": "Cúrcuma en polvo para darle sabor y color a tus comidas", "weight": "100", "unit": "gr", "price": 60, "discount": 12, "image": "curcuma en polvo.jpg", "quantity": 2 }, { "id": 2, "name": "Cacao", "description_short": "Cacao en polvo para darle sabor y color a tus preparaciones", "weight": "250", "unit": "gr", "price": 300, "discount": 10, "image": "Cacao - 22-6-2020 11_0_56.jpg", "quantity": 2 }]);



        } catch (error) {
            return res.status(500).json({ ok: false, error })
        }

    },

    //  /api/users/update recibe item y qty para actualizar cart en DB
    updateDBItem: (req, res) => {
        console.log("req.body en updateDBItem");
        console.log(req.body);
        userId = req.body.userId;
        //var cartItem = JSON.parse(req.body.cartItem);
        var cartItem = req.body.cartItem;


        console.log("cartItem");
        console.log(cartItem);





        try {
            console.log("cartItem");
            console.log(cartItem);
            console.log(cartItem.id);


            //Si está cargado, actualizo el registro

            db.Cart.findAll({
                    // include: [{
                    //     association: "products"
                    // }],
                    where: {
                        id_user: userId,
                        id_product: cartItem.id,
                    }
                })
                .then((itemDB) => {
                    console.log("itemDB");
                    console.log(itemDB);

                    if (itemDB) {

                        console.log("está en la BD");
                        console.log(itemDB.Cart.id);

                        promise = db.Cart.update({
                            quantity: cartItem.quantity,
                            price: cartItem.price,
                            discount: cartItem.discount
                        }, {
                            where: {
                                id: itemDB.id
                            }
                        })


                    } else {
                        console.log("no está en la base");
                        promise = db.Cart.create({
                            id_user: userId,
                            id_product: cartItem.id,
                            quantity: cartItem.quantity,
                            price: cartItem.price,
                            discount: cartItem.discount
                        })

                    }

                    Promise.all(promise)
                        //Si no está cargado, lo creo
                        .then((created) => {
                            // if (created) return res.json([{ "idd": "333" }]).status(200);
                            if (created) return res.status(200).json(cartItem)

                        }).catch(error => {
                            return res.status(500).json({ ok: false, error })
                        })
                })

        } catch (error) {
            return res.status(500).json({ ok: false, error })
        }



    }
}



module.exports = controller;