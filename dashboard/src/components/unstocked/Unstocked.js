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

componentDidMount(){
    fetch("/api/products/unstocked")
    .then(function(response){
        console.log(response);

        return response.json();
    })
    .then(function(data){
        console.log(data.unstokedTotal);

            this.setState({
                total: data.unstokedTotal,
                products:data.unstocked,
            });
console.log(data.unstockedTotal);


    })
    .catch(function(error){
        console.log(error);
    })
}

    render(){




        return(
        <div classname="Stock d-flex flex-column flex-wrap col-lg-6">
            <h5 classname="headcardred">Productos con poco stock</h5>
            <div classname="contenido-card ">
                <table classname="table table-borderless col">
                    <thead>
                        <tr>
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">STOCK</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {this.state.products.map((product)=>  
            <tr>
                 <th scope="row">{product.name}</th>
                 <td>
                     <th scope="row">{product.stock}</th>
                 </td>
             </tr> 
             )} */}

                    </tbody>
                </table>
            </div>
        </div>
        )
}
}

export default Unstocked