import React, { Component } from 'react';
import  './Categories.css'


class Categories extends Component {
   
    render(){
        return(
            <div className="Category d-flex flex-column flex-wrap col-lg-6">
                    <h5 className="headcard">Productos por categoría</h5>
                    <div className="contenido-card ">
                        <table className="table table-borderless col">
                            <thead>
                                <tr>
                                <th scope="col">PRODUCTO</th>
                                <th scope="col">STOCK</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>10</td>
                                <td>10</td>
                                </tr>
                                <tr>
                                <td>10</td>
                                <td>5</td>
                                </tr>
                                <tr>
                                <td>10</td>
                                <td>200</td>
                                </tr>
                            <thead>
                                <tr>
                                    <th scope="col">Total de categorías</th>
                                    <th scope="col">5</th>
                                </tr>
                            </thead>
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default Categories