window.addEventListener("load", function() {

    let savedFavs = JSON.parse(localStorage.getItem("prodFavs"));
    if (!savedFavs) {
        savedFavs = [];
    }


    // CAMBIAR CORAZÓN EN FAVORITO

    let favs = document.querySelectorAll('i.prodFav')
    for (let fav of favs) {

        fav.addEventListener('click', function() {
            //savedFavs.push(fav)

            let prodId = this.id;
            console.log(prodId);

            if (fav.classList.contains('far')) {
                fav.classList.remove('far')
                fav.classList.add('fas')

                //Antes de agregarlo al array de favoritos se fija si ya existe
                let exists = savedFavs.filter(item => {
                    if (item.id == prodId)
                        return true;
                });

                //Si no existe lo agrega
                if (!exists[0]) {
                    savedFavs.push({ "id": prodId });
                    let favs = JSON.stringify(savedFavs);
                    localStorage.setItem("prodFavs", favs);
                }

                //  let prods = document.querySelectorAll('div.prodFavId')

                //  for( let i = 0; i < prods.length; i++ ){
                //     let guardar =  prods[i].id
                //       localStorage.setItem("favsProd", prods[i].id)
                //       console.log(guardar)
                //     }

            } else {
                fav.classList.remove('fas')
                fav.classList.add('far')

                //Lo quita de la lista de favoritos
                savedFavs = savedFavs.filter(item => {
                    if (item.id !== prodId)
                        return true;
                });

                //Transforma en Json y lo guarda en localStorage
                let favs = JSON.stringify(savedFavs);
                localStorage.setItem("prodFavs", favs);
            }
        })
    }
})