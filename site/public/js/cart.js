document.addEventListener('DOMContentLoaded', () => {
    //when the page is ready
    //get the cart items from localStorage
    CART.init();
    //load the cart items
});


const CART = {
    KEY: 'bkasjbdfkjasdkfjhaksdfjskd',
    contents: [],
    init() {
        //check localStorage and initialize the contents of CART.contents
        let _contents = localStorage.getItem(CART.KEY);
        if (_contents) {
            CART.contents = JSON.parse(_contents);
        } else {
            CART.contents = [];
            CART.sync();
        }
    },
    async sync() {
        let _cart = JSON.stringify(CART.contents);
        await localStorage.setItem(CART.KEY, _cart);
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
    add(id, name, description_short, weight, unit, price, discount, image, qty = 1) {
        //add a new item to the cart
        //check that it is not in the cart already
        if (CART.find(id)) {
            CART.increase(id, qty);
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
                qty: qty,
            };
            CART.contents.push(obj);
            //update localStorage
            CART.sync();

        }
    },
    increase(id, qty = 1) {
        //increase the quantity of an item in the cart
        CART.contents = CART.contents.map(item => {
            if (item.id === id)
                item.qty = item.qty + qty;
            return item;
        });
        //update localStorage
        CART.sync()
    },
    reduce(id, qty = 1) {
        //reduce the quantity of an item in the cart
        CART.contents = CART.contents.map(item => {
            if (item.id === id && item.qty > 1)
                item.qty = item.qty - qty;
            return item;
        });

        //----DESCOMENTAR LAS LÍNEAS SIGUIENTES Y QUITAR LA CONDICIOÓN item.qty>1 DE ARRIBA PARA QUE BORRE EL ELEMENTO SI REDUZCO LA CANTIDAD A 0
        // CART.contents.forEach(async item => {
        //     if (item.id === id && item.qty === 0)
        //         await CART.remove(id);
        // });
        //update localStorage
        CART.sync()
    },
    remove(id) {
        //remove an item entirely from CART.contents based on its id
        CART.contents = CART.contents.filter(item => {
            if (item.id !== id)
                return true;
        });
        //update localStorage
        CART.sync()
    },
    empty() {
        //empty whole cart
        CART.contents = [];
        //update localStorage
        CART.sync()
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
};


//para VISTA productDetails.ejs
function comprarAhora(productId) {
    document.getElementById(`btnCargar${productId}`).click();
    window.location.href = '/cart';
}