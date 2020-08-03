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
        <div classname="Stock d-flex flex-column flex-wrap col-lg-6">
            <h5 classname="headcardred">Productos con poco stock ({this.state.total})</h5>
            <div classname="contenido-card ">
                <table classname="table table-borderless col">
                    <thead>
                        <tr>
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">STOCK</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((product,i)=>{return(
                            <tr key={'trUnstock'+i}>
                                <th scope="row" key={'thUnstockName'+i}>{product.name}</th>
                                <td key={'tdUnstockStock'+i}>
                                    <th scope="row" key={'thUnstockStock'+i}>{product.stock}</th>
                                </td>
                            </tr>
                        )}
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default Unstocked