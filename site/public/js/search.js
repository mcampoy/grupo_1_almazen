window.addEventListener('load', function () {
    let input = document.getElementById('search');

    input.addEventListener('keyup', () => {
        let filter = input.value.toLowerCase();

        let search = async (param) => {

            try {
                const response = await fetch(`/api/search/?search=${param}`)
                const info = await response.json()

                let div = document.getElementById('divSerch')

                if (filter === '') {

                    div.innerHTML = ''

                } else if (filter.length === 1) {

                    div.innerHTML = '<ul id="ulSearch" >' + '<li class="minSearch" style="padding-top: 1%">' + 'Debe ingresar 2 caracteres como mínimo' + '</li>' + '</ul>'

                } else {
                    let searchList = []

                    for (let i = 0; i < info.data.products.length; i++) {

                        let discount = info.data.products[i].discount > 1 ? info.data.products[i].discount + '% OFF' : ''

                        let productadd = '<li>' + '<a href="/product/details/' + info.data.products[i].id + '">' + '<img class="searchImg" src="/images/imgProductos/' + info.data.products[i].image + '">' + '<div>' + '<span class="searchCategory">' + 'Producto' + '</span>' + '<span class="searchName">' + info.data.products[i].name + '  ' + '<span class="searchQuantity">' + info.data.products[i].quantity + ' ' + info.data.products[i].unit + '</span>' + '</span>' + '<span class="searchPrice">' + '$' + info.data.products[i].price + '</span>' + '   ' + '<span class="searchDiscount">' + discount + '</span>' + '</div>' + '</a>' + '</li>'

                        searchList.push(productadd)
                    }

                    for (let i = 0; i < info.data.recetas.length; i++) {
                        let recipadd = '<li>' + '<a href="/recetas/' + info.data.recetas[i].id + '">' + '<img class="searchImg" src="/images/recetas/' + info.data.recetas[i].image + '">' + '<div>' + '<span class="searchCategory">' + 'Receta' + '</span>' + '<span class="searchName">' + info.data.recetas[i].name + '</span>' + '</div>' + '</a>' + '</li>'

                        searchList.push(recipadd)
                    }

                    if (searchList == 0) {
                        div.innerHTML = '<ul id="ulSearch">' + '<li class="noFoundSearch">' + 'No hay resultados para la búsqueda' + '</li>' + '</ul>'
                    } else {

                        div.innerHTML = '<ul id="ulSearch">' + searchList + '</ul>'
                    }

                }
            } catch (error) {
                console.error(error)
            }
        }
        search(filter)
    })
})

// Detener el redireccionamiento a la página Search si no se cumplen las condiciones
window.addEventListener('load', function () {
    let searchForm = document.getElementById('searchForm')

    searchForm.addEventListener('submit', (e)=>{

        let input2 = document.getElementById('search');
        let filterE = input2.value.toLowerCase();
        let div = document.getElementById('divSerch')

        if(filterE.length < 2) {
            e.preventDefault()
            div.innerHTML = '<ul id="ulSearch" >' + '<li class="minSearch" style="padding-top: 1%">' + 'Debe ingresar 2 caracteres como mínimo' + '</li>' + '</ul>'
        }
    })
})

