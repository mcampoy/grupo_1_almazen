window.addEventListener("load", function() {

    showCart();

});
function itemCarrito() {
    let cartProducts = CART.sort('name');
    let totalPriceProducts = 0;
    let totalItems = 0;
    cartProducts.forEach(item => {

        totalItems += item.qty;
        

    })
    document.querySelector(".qtyItemsIcon").innerHTML = totalItems;
    let cost = new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD'
    }).format(totalPriceProducts);
    

}