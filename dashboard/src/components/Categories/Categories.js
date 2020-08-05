import React, { Component } from 'react';
import  './Categories.css'


class Categories extends Component {

    constructor(){
        super();
        this.state = {
            categories:[]
        }
    }

    apiCall(url, handler) {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data =>{
            handler(data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount(){

        this.apiCall("http://localhost:3030/api/products/byCategory", this.showCategories)


                    }

    showCategories = (data) => {
        this.setState(
            {
                categories: data.data.categories
            }
            )
        }

        render(){

            return(
            <div id="cards" className="Category ladofrente d-flex flex-column flex-wrap col-lg-5">
                <h5 className="headcard headCat title">Productos por categoría</h5>
                <div className="contenido-card">
                        <table className="table table-borderless col">
                            <thead>
                                <tr className="lineaCat">
                                    <th className="prod" scope="col">CATEGORÍA</th>
                                    <th scope="col">CANT. PROD.</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    this.state.categories.map((category, i) => {
                                return(
                                <tr key={'nameCat'+i} className="resaltar">
                                  <td key={'name'+i} className="categoryName"> {category.name } </td> 
                                  <td key={'products'+i} className="categoryQuantity"> {category.products.length} </td> 
                                </tr>)
                                })
                                }
                                <thead>
                                    <tr>
                                        <th >Total de categorías:</th>
                                        <th className="headCat">{this.state.categories.length}</th>
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