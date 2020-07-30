import React from 'react';

function Footer(){
    return (
        <footer class="row container-fluid">

        <div class="col-11 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center justify-content-around flex-wrap">
        
            <div class="mb-1 col-11 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-around flex-wrap">
                <a href="/" role="button"><img src="assets/images/Logo.svg" alt="marca almazen" /></a>
            </div>
            
            <div class="col-6 col-md-3 col-lg-2 col-xl-2 d-flex justify-content-center mb-2 menu-productos">
                <article>
                    <h6><a href="/product/">PRODUCTOS</a></h6>
                </article>
            </div>
            
            <div class="col-6 col-md-3 col-lg-2 col-xl-2 d-flex justify-content-center mb-2 menu-recetas">
                <article>
                    <h6><a href="/recetas/">RECETAS</a></h6>
                </article>
            </div>
        
            <div class="col-6 col-md-3 col-xl-2 d-flex justify-content-center mb-2 menu-tips">
                <article>
                    <h6><a href="#">DIETAS</a></h6>
                    
                </article>
            </div>
        

            <div class="col-6 col-md-3 col-lg-2 ccol-xl-2 d-flex justify-content-center mb-2 menu-tips">
                <article>
                    <h6><a href="/tips/tips">TIPS</a></h6>
                
                </article>
            </div>

          
            <div class="col-12 col-lg-12 d-flex justify-content-center align-items-center copyright">
                <h6 class="d-flex justify-content-center copy">© 2020 Almazen. Todos los derechos reservados</h6>
            </div>
        </div>
        <div class="col-11 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-around flex-wrap">

    </div>

</footer>
    )
}

export default Footer