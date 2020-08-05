import React, { Component } from 'react';
import "./Unstocked.css";

class Unstocked extends Component {

    constructor(){
    super();
    this.state={
        total:0,
        products:[],
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
    this.apiCall("http://localhost:3030/api/products/unstocked", this.showCategories)
    }

    showCategories = (data) => {
            this.setState({
                total: data.data.unstokedTotal,
                products:data.data.unstoked,
            });
    }

    render(){

        return(
            <div id="cards" className="Stock ladofrente d-flex flex-column flex-wrap col-lg-5">
            <h5 className="headcard headStock title">Productos con poco stock</h5>
            <div className="contenido-card ">
                <table className="table table-borderless col">
                    <thead>
                        <tr className="lineaStock">
                            <th className="prod" scope="col">PRODUCTO</th>
                            <th scope="col">STOCK</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((product,i)=>{return(
                            <tr key={'trUnstock'+i}>
                                <td className="categoryName" key={'thUnstockName'+i}>{product.name}</td>
                                <td className="categoryQuantity headStock" key={'thUnstockStock'+i}>{product.stock}</td>
                            </tr>
                        )}
                        )
                    }
                    <thead>
                        <tr>
                            <th >Total de productos:</th>
                            <th className="headStock" >{this.state.total}</th>
                        </tr>
                    </thead>
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default Unstocked