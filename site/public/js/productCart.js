window.addEventListener("load", function() {

    showCart();

});

function showCart() {
    let cartList = document.getElementById('cartList');

    let cartProducts = CART.sort('name');
    cartProducts.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.className = 'row main d-flex align-items-center justify-content-center cartItem item' + item.id;

        //IMAGEN PRODUCTO CARRITO
        let imageDiv = document.createElement('div');
        imageDiv.className = 'col-3 img-carrito';
        let imageProd = document.createElement('img');
        imageProd.className = 'img-fluid';
        imageProd.src = "/images/imgProductos/" + item.image;
        imageDiv.appendChild(imageProd);
        cartItem.appendChild(imageDiv);

        //TÍTULO, DESCRIPCION y PRECIO UNITARIO
        let titleAndDescripDiv = document.createElement('div');
        titleAndDescripDiv.className = 'description-cart col-12 col-md-5 col-lg-4';
        //TÍTULO
        let titleDiv = document.createElement('div');
        titleDiv.className = 'row text-muted';
        let titleH3 = document.createElement('h3');
        titleH3.className = 'titulo_producto mb-2';
        titleH3.innerText = item.name;
        titleDiv.appendChild(titleH3);
        titleAndDescripDiv.appendChild(titleDiv);

        //DESCRIPCIÓN
        let descirptionDiv = document.createElement('div');
        descirptionDiv.className = 'row col-12';
        let descriptionP = document.createElement('p');
        descriptionP.className = 'descripcion_producto_carrito';
        descriptionP.innerHTML = `${item.description_short}<br>${item.weight} ${item.unit}`;
        descirptionDiv.appendChild(descriptionP);
        titleAndDescripDiv.appendChild(descirptionDiv);

        //PRECIO UNITARIO
        let unitPriceDiv = document.createElement('div');
        unitPriceDiv.className = 'row';
        let unitPriceH3 = document.createElement('p');
        unitPriceH3.className = ' mb-2';
        let unitCost = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        }).format(item.price * (1 - item.discount / 100));
        unitPriceH3.innerText = `Precio unitario: ${unitCost}`;
        unitPriceDiv.appendChild(unitPriceH3);
        titleAndDescripDiv.appendChild(unitPriceDiv);

        cartItem.appendChild(titleAndDescripDiv);

        let controls = document.createElement('div');
        //controls.className = 'controls col mr-sm-2 select-cart';
        controls.className = 'controls col-3 col-lg-1 select-cart';
        cartItem.appendChild(controls);


        let minus = document.createElement('span');
        minus.textContent = '-';
        minus.setAttribute('data-id', item.id)
        controls.appendChild(minus);
        minus.addEventListener('click', decrementCart)

        let qty = document.createElement('span');
        qty.textContent = item.qty;
        controls.appendChild(qty);

        let plus = document.createElement('span');
        plus.textContent = '+';
        plus.setAttribute('data-id', item.id)
        controls.appendChild(plus);
        plus.addEventListener('click', incrementCart)


        cartItem.appendChild(controls);
        //PRECIO PRODUCTO CARRITO


        let precioDiv = document.createElement('div');
        precioDiv.className = 'col-6 col-md-3 text-right precio_producto-carrito';
        let qtytCost = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        }).format(item.price * (1 - item.discount / 100) * item.qty);
        precioDiv.innerText = qtytCost;
        cartItem.appendChild(precioDiv);

        //ÍCONO ELIMINAR PRODUCTO CARRITO
        let eliminarDiv = document.createElement('div');
        eliminarDiv.className = 'col-1';
        //eliminarDiv.innerHTML = '<a href="CART.remove(item.id)"><i class="far fa-times-circle eliminar"></i></a>';
        let eliminarButton = document.createElement('button');
        eliminarButton.setAttribute("onclick", `removeItem(${item.id})`);
        let eliminarI = document.createElement('i');
        eliminarI.className = 'far fa-times-circle eliminar';
        eliminarButton.appendChild(eliminarI);
        eliminarDiv.appendChild(eliminarButton);
        cartItem.appendChild(eliminarDiv);
        cartList.appendChild(cartItem);

    });

    showTotalItemsAndPrices();

}



function showTotalItemsAndPrices() {
    let cartProducts = CART.sort('name');
    let totalPriceProducts = 0;
    let totalItems = 0;
    cartProducts.forEach(item => {

        totalItems += item.qty;
        totalPriceProducts += item.price * (1 - item.discount / 100) * item.qty;

    })


    let cost = new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD'
    }).format(totalPriceProducts);
    //document.querySelector(".precio_carrito").innerText = "$ " + totalPriceProducts;
    document.querySelector(".precio_productos").innerText = cost;

    document.querySelector(".precio_total").innerText = cost;
    if (totalItems > 1) {
        document.querySelector(".Items").innerHTML = totalItems + " items";
        document.querySelector(".qtyItems").innerHTML = totalItems + " items";
    } else {
        document.querySelector(".Items").innerHTML = totalItems + " item";
        document.querySelector(".qtyItems").innerHTML = totalItems + " item";
    }


}

function emptyCart() {
    CART.empty();
    window.location.href = window.location.href;
}

function removeItem(id) {

    document.querySelector(".item" + id).remove();
    CART.remove(id);
    showTotalItemsAndPrices();

    //showCart();
    //window.location.href = window.location.href;
}

function incrementCart(ev) {
    ev.preventDefault();
    let id = parseInt(ev.target.getAttribute('data-id'));
    CART.increase(id, 1);
    let controls = ev.target.parentElement;
    let qty = controls.querySelector('span:nth-child(2)');
    let item = CART.find(id);
    if (item) {
        qty.textContent = item.qty;

        let qtytCost = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        }).format(item.price * (1 - item.discount / 100) * item.qty);

        let precioDiv = controls.parentElement.querySelector('.precio_producto-carrito');
        precioDiv.innerText = qtytCost;
        showTotalItemsAndPrices();

    } else {
        document.getElementById('cartList').removeChild(controls.parentElement);
    }


}

function decrementCart(ev) {
    ev.preventDefault();
    let id = parseInt(ev.target.getAttribute('data-id'));
    CART.reduce(id, 1);
    let controls = ev.target.parentElement;
    let qty = controls.querySelector('span:nth-child(2)');
    let item = CART.find(id);
    if (item) {
        qty.textContent = item.qty;


        let qtytCost = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        }).format(item.price * (1 - item.discount / 100) * item.qty);

        let precioDiv = controls.parentElement.querySelector('.precio_producto-carrito');
        precioDiv.innerText = qtytCost;
        showTotalItemsAndPrices();
    } else {
        document.getElementById('cartList').removeChild(controls.parentElement);
    }
}



function confirmPurchase(usuarioLogueado) {
    if (usuarioLogueado) {
        this.location.href = "/cart/confirm";
    } else {
        document.getElementById('btn-login-header').click();
    }
}



// function addItem(ev) {
//     ev.preventDefault();
//     let id = parseInt(ev.target.getAttribute('data-id'));
//     //CART.add(id, 1);
//     CART.add(id);
//     showCart();
// }

// function errorMessage(err) {
//     //display the error message to the user
//     console.error(err);
// }



//     let title = document.createElement('h3');
//     title.textContent = item.title;
//     title.className = 'title'
//     cartitem.appendChild(title);

//     let controls = document.createElement('div');
//     controls.className = 'controls';
//     cartitem.appendChild(controls);

//     let plus = document.createElement('span');
//     plus.textContent = '+';
//     plus.setAttribute('data-id', item.id)
//     controls.appendChild(plus);
//     plus.addEventListener('click', incrementCart)

//     let qty = document.createElement('span');
//     qty.textContent = item.qty;
//     controls.appendChild(qty);

//     let minus = document.createElement('span');
//     minus.textContent = '-';
//     minus.setAttribute('data-id', item.id)
//     controls.appendChild(minus);
//     minus.addEventListener('click', decrementCart)

//     let price = document.createElement('div');
//     price.className = 'price';
//     let cost = new Intl.NumberFormat('en-CA', {
//         style: 'currency',
//         currency: 'CAD'
//     }).format(item.qty * item.itemPrice);
//     price.textContent = cost;
//     cartitem.appendChild(price);

//     cartList.appendChild(cartitem);
// })

// var productData = '<div class="row main d-flex align-items-center justify-content-center">';
// //IMAGEN PRODUCTO CARRITO
// productData += '  <div class="col-3 img-carrito">';
// productData += '      <img class="img-fluid" src="/images/imgProductos/curcuma en polvo.jpg" alt="">';
// productData += '  </div>';

// productData += '  <div class="col-6 col-md-3">';

// //TÍTULO PRODUCTO CARRITO
// productData += '      <div class="row text-muted">';
// productData += '          <h3 class="titulo_producto mb-2">Cúrcuma</h3>';
// productData += '      </div>';

// //DESCRIPCIÓN PRODUCTO CARRITO
// productData += '          <div class="row">';
// productData += '              <p class="descripcion_producto_carrito">Cúrcuma en polvo<br> Peso neto: 100 gr.</p>';
// productData += '          </div>';
// productData += '  </div>';

// //SELECTOR CANTIDAD PRODUCTO CARRITO
// productData += '  <select class="col custom-select mr-sm-2 select-cart" id="inlineFormCustomSelect">';
// productData += '      <option selected value="1">1 unidad</option>';
// productData += '      <option value="2">2 unidades</option>';
// productData += '      <option value="3">3 unidades</option>';
// productData += '      <option value="4">4 unidades</option>';
// productData += '  </select>';

// //PRECIO PRODUCTO CARRITO
// productData += '  <div class="col-4 col-md-3 text-right precio_producto-carrito">$ 44.<sup>00</sup></div>';
// //ÍCONO ELIMINAR PRODUCTO CARRITO
// productData += '  <div class="col"><a href="#"><i class="far fa-times-circle eliminar"></i></a></div>';
// productData += '</div>';

// var productList = document.querySelector(".productList");
// productList.innerHTML += productData;
// }