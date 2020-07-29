window.addEventListener("load", function() {
    //  let favs = document.querySelectorAll('i.prodFav')

    let savedFavs = JSON.parse(localStorage.getItem("prodFavs"));
    if (!savedFavs) {
        savedFavs = [];
    } else {
        let favos = document.querySelectorAll('i.prodFav')

        for (let fav of favos) {
            // let exists = savedFavs.filter(item => {
            //     if (item.id == fav.id)
            //         return true;
            // });

            // //Si existe pinta el corazón
            // if (exists[0]) {
            //     fav.classList.remove('far');
            //     fav.classList.add('fas');
            // }
        }
    }



    let favs = document.querySelectorAll('i.prodFav')
    for (let fav of favs) {


        //PINTA LOS CORAZONES DE LOS PRODUCTOS FAVORITOS AL CARGAR LA PÁGINA
        let isFav = savedFavs.filter(item => {
            if (item.id == fav.id)
                return true;
        });

        //Si existe pinta el corazón
        if (isFav[0]) {
            fav.classList.remove('far');
            fav.classList.add('fas');
        }


        // CAMBIAR CORAZÓN EN FAVORITO

        fav.addEventListener('click', function() {
            //savedFavs.push(fav)

            let prodId = this.id;

            if (fav.classList.contains('far')) {
                fav.classList.remove('far');
                fav.classList.add('fas');

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