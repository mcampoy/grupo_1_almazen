import React from 'react';

function Header(){
    return(
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg mobile d-flex flex-wrap align-items-center">
                <div className="col-8 col-md-6 col-lg-2 marca">
                    <a href="https://localhost:3030/" role="button" className="logo">
                        <img src="assets/images/Logo.svg" alt="marca almazen" width="" className="logoImg" />
                    </a>
                </div>

                <div className="col-2 col-md-2 col-lg-1 mt-1 d-flex justify-content-center profile align-items-center">

                </div>

                <form id="searchForm" action="/product/search" method="get" className="search-form col-10 col-md-10 col-lg-4 d-flex justify-content-center input-group">
                    <input id="search" type="text" name="search" placeholder="Buscá productos o recetas" className="form-control search-form_input col-10" />
                    <button id="btnSearch" type="submit" className="search-form_button col-2">
                        <i className="fas fa-search"></i>
                    </button>
                </form>

                {/* <button className="navbar-toggler col-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="assets/images/toggler_icon.png" alt="" />
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="col-12 col-md-12 col-lg-12 col-xl-12 align-items-center justify-content-between navbar-nav">

                        <li className="col-12 col-md-12 col-lg-2 mt-1 d-flex  justify-content-center align-items-center">
                            <a className="col-12 col-lg-1 col-xl-1 d-flex justify-content-center" href="https://localhost:3030/product/" type="button" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                                PRODUCTOS
                            </a>
                        </li>

                        <li className="col-12 col-md-12 col-lg-1 mt-1 d-flex justify-content-center align-items-center">
                            <a className="col-12 col-lg-1 col-xl-1 d-flex justify-content-center" href="https://localhost:3030/recetas/">
                                RECETAS
                            </a>
                        </li>

                        <li className="col-12 col-md-12 col-lg-1 mt-1 d-flex justify-content-center align-items-center">
                            <a className="col-12 col-lg-1 col-xl-1 d-flex justify-content-center" href="https://localhost:3030/product/details">
                                DIETAS
                            </a>
                        </li>
                        <li className="col-12 col-md-12 col-lg-1 mt-1 d-flex justify-content-center align-items-center">
                            <a className="col-12 col-lg-1 col-xl-1 d-flex justify-content-center" href="https://localhost:3030/tips/tips">
                                TIPS
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-2 col-md-2 col-lg-1 mt-1 d-flex align-items-center justify-content-center carrito">
                    <a href="/cart" role="button" className="justify-content-center">
                        <img src="assets/images/cart.png" width="29px" alt="carrito" />
                    </a>
                </div>

                <img src="assets/images/profile.png" className="dropdown-toggle userLogImage imgProfile" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,50" width="35px" alt="Imagen de usuario"/>

            </nav>
        </header>
    )
}

export default Header