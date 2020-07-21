window.addEventListener("load", function() {

    let savedFavs = JSON.parse(localStorage.getItem("prodFavs"));
if (!savedFavs) {
    savedFavs = [];
}


     // CAMBIAR CORAZÓN EN FAVORITO
     
     let favs = document.querySelectorAll('i.prodFav')
     for (let fav of favs) {
         
         fav.addEventListener('click', function () {
             
           
             if (fav.classList.contains('far')) {
                 fav.classList.remove('far')
                 fav.classList.add('fas')

                 let prods = document.querySelectorAll('div.prodFavId')
                
                 for( let i = 0; i < prods.length; i++ ){
                    let guardar =  prods[i].id
                      localStorage.setItem("favsProd", prods[i].id)
                      console.log(guardar)
                    }

             } else {
                 fav.classList.remove('fas')
                 fav.classList.add('far')
             }


         })
     }


})