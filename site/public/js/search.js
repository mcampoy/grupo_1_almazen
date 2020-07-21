window.addEventListener('load', function () {
    let input = document.getElementById('search');

    input.addEventListener('keyup', () => {
        let filter = input.value.toLowerCase();
        let data = {
            search: `${filter}`
        }
        let settings = {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify(data)
        }

        fetch("/api/products", settings)
            .then((response) => {
                return response.json()
            })
            .then((info) => {

                console.log(info)

                let div = document.getElementById('divSerch')

                if(!filter){
                    div.innerHTML = ""

                } else {
                    let searchList = []

                    for (let i = 0; i < info.data.products.length; i++) {

                    let discount = info.data.products[i].discount > 1 ? info.data.products[i].discount + '% OFF': ''

                    let productadd = '<li>' + '<a href="/product/details/' + info.data.products[i].id + '">' + '<img class="searchImg" src="/images/imgProductos/' + info.data.products[i].image + '">' + '<div>' + '<span class="searchCategory">' + 'Producto' + '</span>' + '<span class="searchName">' + info.data.products[i].name + '</span>' + '<span class="searchPrice">' + '$' + info.data.products[i].price + '</span>' + '   ' + '<span class="searchDiscount">' + discount  + '</span>' + '</div>' + '</a>' + '</li>'

                    searchList.push(productadd)
                    }

                    for (let i = 0; i < info.data.recetas.length; i++) {
                    let recipadd = '<li>' + '<a href="/recetas/' + info.data.recetas[i].id + '">' + '<img class="searchImg" src="/images/recetas/' + info.data.recetas[i].image + '">' + '<div>' + '<span class="searchCategory">' + 'Receta' + '</span>' + '<span class="searchName">' + info.data.recetas[i].name + '</span>' + '</div>' + '</a>' + '</li>'

                    searchList.push(recipadd)
                }

                if (searchList == 0) {
                    div.innerHTML = '<ul id="ulSearch">' +  '<li class="noFoundSearch">' + 'No hay resultados que coincidan con la búsqueda' + '</li>'  + '</ul>'   
                } else {
                    
                    div.innerHTML = '<ul id="ulSearch">' +  searchList  + '</ul>'
                }


            }
            })
            .catch(err => console.error(err))
    })

})