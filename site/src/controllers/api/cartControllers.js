let db = require('../../database/models');
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const controller = {
    // sincroniza el carrito de LocalStorage y el de DB
    syncDBCart: (req, res) => {
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
                    quantity: item.qty,
                    price: item.price,
                    discount: item.discount
                })
            })

            return res.status(200)

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
                    quantity: item.qty,
                    price: item.price,
                    discount: item.discount
                })
            })

            return res.status(200)

        } catch (error) {
            return res.status(500).json({ ok: false, error })
        }
    },
}

module.exports = controller;