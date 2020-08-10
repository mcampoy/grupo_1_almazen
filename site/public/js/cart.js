let usuarioLogueadoId = 0;

document.addEventListener('DOMContentLoaded', () => {
    //when the page is ready
    //get the cart items from localStorage
    CART.init();
    var _usuarioLogueadoId = document.getElementById('logUserId');
    if (_usuarioLogueadoId) {
        usuarioLogueadoId = parseInt(_usuarioLogueadoId.innerText);
        if (usuarioLogueadoId) {
            CART.syncDB(usuarioLogueadoId);
        }
    }

    //Si está en la página de carrito carga los items
    if (document.getElementById('cartList')) showCart();
});


const CART = {
    KEY: 'almazenCartKey',
    contents: [],
    init() {
        //check localStorage and initialize the contents of CART.contents
        let _contents = localStorage.getItem(CART.KEY);
        if (_contents) {
            CART.contents = JSON.parse(_contents);
            let itemsQty = 0;
            CART.contents.forEach(element => {
                itemsQty += element.quantity;
            });
            document.querySelector('.qtyItemsIcon').innerHTML = itemsQty;
        } else {
            CART.contents = [];
        }
        CART.sync();

    },

    //Sincroniza el carrito de local storage con la variable CART
    sync() {
        let _cart = JSON.stringify(CART.contents);

        localStorage.setItem(CART.KEY, _cart);

        //Calcula cantidad total de ítems en carrito y modifica el número en el header
        let itemsQty = 0;
        CART.contents.forEach(element => {
            itemsQty += element.quantity;
        });

        // if (itemsQty !== 0) {
        document.querySelector('.qtyItemsIcon').innerHTML = itemsQty;

        var btnConfirm = document.querySelector('.btn-finalizar-compra');
        var emptyCartMsg = document.querySelector('.emptyCartMsg');
        if (btnConfirm) {
            if (itemsQty == 0) {
                btnConfirm.style.display = 'none';
                emptyCartMsg.style.display = 'block';

            } else {
                btnConfirm.style.display = 'block';
                emptyCartMsg.style.display = 'none';
            }
        }

        var btnEmptyCart = document.querySelector('.btn-vaciar-carrito');
        if (btnEmptyCart) {
            if (itemsQty == 0) {
                btnEmptyCart.style.display = 'none';
            } else {
                btnEmptyCart.style.display = 'flex';
            }
        }

        // } else {
        //     document.querySelector('.qtyItemsIcon').innerHTML = '';
        // }

        //Si el usuario está logueado sincronizo también con la base de datos

    },

    find(id) {
        //find an item in the cart by its id
        let match = CART.contents.filter(item => {
            if (item.id == id)
                return true;
        });
        if (match && match[0])
            return match[0];
    },

    add(id, name, description_short, weight, unit, price, discount, image, quantity = 1) {
        //add a new item to the cart
        //check that it is not in the cart already
        if (CART.find(id)) {
            CART.increase(id, quantity);
        } else {
            let obj = {
                id: id,
                name: name,
                description_short: description_short,
                weight: weight,
                unit: unit,
                price: price,
                discount: discount,
                image: image,
                quantity: quantity,
            };
            CART.contents.push(obj);
            //update localStorage
            CART.sync();
            CART.syncItemDB(id);


        }
    },

    increase(id, quantity = 1) {
        //increase the quantity of an item in the cart
        CART.contents = CART.contents.map(item => {
            if (item.id === id)
                item.quantity = item.quantity + quantity;
            var newQuantity = item.quantity;
            return item;
        });
        //update localStorage
        CART.sync()
        CART.syncItemDB(id);
    },

    reduce(id, quantity = 1) {
        //reduce the quantity of an item in the cart
        CART.contents = CART.contents.map(item => {
            if (item.id === id && item.quantity > 1)
                item.quantity = item.quantity - quantity;
            return item;
        });
        CART.sync()
        CART.syncItemDB(id);

    },

    remove(id) {
        //remove an item entirely from CART.contents based on its id
        CART.contents = CART.contents.filter(item => {
            if (item.id !== id)
                return true;
        });
        //update localStorage
        CART.sync()
        CART.syncItemDB(id);

    },

    empty() {
        //empty whole cart
        CART.contents = [];
        //update localStorage
        CART.sync()
        CART.emptyCartDB();

    },

    sort(field = 'name') {
        //sort by field - title, price
        //return a sorted shallow copy of the CART.contents array
        let sorted = CART.contents.sort((a, b) => {
            if (a[field] > b[field]) {
                return 1;
            } else if (a[field] < a[field]) {
                return -1;
            } else {
                return 0;
            }
        });
        return sorted;
        //NO impact on localStorage
    },

    syncDB(userId) {
        let cartItems = localStorage.getItem(CART.KEY);
        if (cartItems) {
            var cartData = JSON.stringify({ userId: userId, cartItems: cartItems });
            const url = '/api/cart/sync';
            const params = {
                headers: {
                    "content-type": "application/json"
                },
                body: cartData,
                method: "POST"
            };

            fetch(url, params)
                .then(data => {
                    // if (data.status == "200") {
                    return data.json()
                        // } else {
                        //     return [];
                        // }
                })
                .then(resp => {
                    CART.contents = resp;
                    CART.sync();
                })
                .catch(error => console.log(error))
        }
    },

    syncItemDB(itemId) {

        if (usuarioLogueadoId) {

            if (CART.contents) {
                var syncItem = CART.contents.filter((item) => {
                    if (item.id == itemId) {
                        return true;
                    }
                });


                if (syncItem[0]) { cartItem = JSON.stringify(syncItem[0]) } else { cartItem = `{"id":${itemId},"quantity":0}` }

                let cartData = JSON.stringify({ userId: usuarioLogueadoId, cartItem: cartItem });
                const url = '/api/cart/update';
                const params = {
                    headers: {
                        "content-type": "application/json"
                    },
                    body: cartData,
                    method: "POST"
                };

                fetch(url, params)
                    .then(data => {
                        return data.json()
                    })
                    .then(resp => {
                        CART.contents = JSON.parse(resp);
                        CART.sync();
                    })
                    .catch(error => console.log(error))
            }
        }
    },

    emptyCartDB() {

        if (usuarioLogueadoId) {

            let cartData = JSON.stringify({ userId: usuarioLogueadoId });
            const url = '/api/cart/empty';
            const params = {
                headers: {
                    "content-type": "application/json"
                },
                body: cartData,
                method: "POST"
            };

            fetch(url, params)
                .then(data => {
                    return data.json()
                })
                .then(resp => {
                    //  CART.empty();
                    //  CART.contents = resp;
                    //  CART.sync();
                })
                .catch(error => console.log(error))
        }
    }

}

function logout() {
    localStorage.removeItem("prodFavs");
    localStorage.removeItem(CART.KEY);
    location.href = '/users/logout'
}




//para VISTA productDetails.ejs
function comprarAhora(productId) {
    document.getElementById(`btnCargar${productId}`).click();
    window.location.href = '/cart';
}