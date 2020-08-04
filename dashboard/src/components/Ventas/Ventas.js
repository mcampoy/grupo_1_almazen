import React, { Component } from 'react';

class Ventas extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         ventas: 5000
    //     }
    // }

    // apiCall(url, handler) {
    //     fetch(url)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then(data =>{
    //         console.log(data)
    //         handler(data)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }

    // componentDidMount(){

    //     // this.apiCall("http://localhost:3030/api/products/ventas", this.showventas)

    //                 }

    // showVentas = (data) => {
    //     // this.setState(
    //     //     {
    //     //         ventas: data.data.ventas
    //     //     }
    //     //     )
    //     }

        render(){

            const toThousand = function (n) {
                return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              };

            return(
            <div id="card" className="ladofrente col-4">
                <h6 className="headcard ventas">Ventas</h6>
                <h5> {toThousand(5000)} </h5>
               
            </div>
        )
    }
}

export default Ventas