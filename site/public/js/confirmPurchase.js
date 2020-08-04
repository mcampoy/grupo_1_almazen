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
        titleAndDescripDiv.className = 'col-6 col-md-3';
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
        descirptionDiv.className = 'row';
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

        let precioDiv = document.createElement('div');
        precioDiv.className = 'col-4 col-md-3 text-right precio_producto-carrito';
        let qtytCost = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        }).format(item.price * (1 - item.discount / 100) * item.qty);
        precioDiv.innerText = qtytCost;
        cartItem.appendChild(precioDiv);


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


function confirmPurchase() {
    alert("Tu compra fue realizada con éxito. ¡Muchas gracias!");
    CART.empty();

}