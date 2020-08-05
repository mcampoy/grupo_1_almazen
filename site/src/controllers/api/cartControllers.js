let db = require('../../database/models');
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const controller = {
    // sincroniza el carrito de LocalStorage y el de DB
    syncDBCart: async(req, res) => {
        console.log("req.body");
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
            console.log("cartDB.Cart");
            console.log(cartDB[0]);
            console.log(Object.keys(cartItems).lenght);
            if (cartItems.lenght) {
                cartItems.forEach(item => {
                    console.log("item");
                    console.log(item);

                    //var idItemDB = null;
                    //             // // var qty = 0;
                    // if (cartDB[0].lenght) {
                    //     cartDB[0].forEach((itemDB) => {
                    //         console.log("itemDB");
                    //         console.log(itemDB);

                    //         if (itemDB.id_product == item.id) {
                    //             idItemDB = itemDB.id;
                    //             //qtyDB = itemDB.quantity;
                    //         }


                    //         console.log("itemDB.products");
                    //         console.log(itemDB.products.description_short);
                    //     })
                    // }



                    //             // if (idItemDB) {
                    //             //     console.log("idItemDB");
                    //             //     console.log(idItemDB);



                    //             //     db.Cart.update({
                    //             //         quantity: item.quantity,
                    //             //         price: item.price,
                    //             //         discount: item.discount
                    //             //     }, {
                    //             //         where: {
                    //             //             id: idItemDB,
                    //             //         },
                    //             //     })


                    //             // } else {
                    //             //     console.log(" create in db");
                    //             //     db.Cart.create({
                    //             //         id_user: userId,
                    //             //         id_product: item.id,
                    //             //         quantity: item.quantity,
                    //             //         price: item.price,
                    //             //         discount: item.discount
                    //             //     })
                    //             // }
                })
            }
            //     // tengo que enviar a CART y a Local Storage: id name  description_short weight unit price discount image quantity
            //     // let newCart = await db.Products.findAll({

            //     //     //attributes: ['id', 'name', 'description_short', 'quantity', 'unit', 'price', 'discount', 'image', 'quantity'],
            //     //     include: ["users"
            //     //         //{association: "users" }
            //     //     ],
            //     //     where: {
            //     //         id_user: userId
            //     //     }
            //     // })

            //     // console.log("newCart");

            //     // console.log(newCart);

            //     //return res.json(newCart)
            return res.send([{ "id": 1, "name": "Cúrcuma", "description_short": "Cúrcuma en polvo para darle sabor y color a tus comidas", "weight": "100", "unit": "gr", "price": 60, "discount": 12, "image": "curcuma en polvo.jpg", "quantity": 2 }, { "id": 2, "name": "Cacao", "description_short": "Cacao en polvo para darle sabor y color a tus preparaciones", "weight": "250", "unit": "gr", "price": 300, "discount": 10, "image": "Cacao - 22-6-2020 11_0_56.jpg", "quantity": 2 }]);



        } catch (error) {
            return res.status(500).json({ ok: false, error })
        }

    },

    //envío item y qty para actualizar cart en DB
    updateDBItem: (req, res) => {
        console.log(req.body);
        userId = req.body.userId;
        cartItems = JSON.parse(req.body.cartItems);
        console.log(typeof(cartItems));
        try {
            cartItems.forEach(item => {
                    console.log(item);
                    db.Cart.create({
                        id_user: userId,
                        id_product: item.id,
                        quantity: item.quantity,
                        price: item.price,
                        discount: item.discount
                    })


                    return res.status(500).json({ ok: false, error })
                }

            )

            return res.status(200)

        } catch (error) {
            return res.status(500).json({ ok: false, error })
        }
    }

}

module.exports = controller;