import React, { Component } from 'react';

class Ventas extends Component {
    constructor(){
        super();
        this.state = {
            ventas: 0
        }
    }

    apiCall(url, handler) {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data =>{
            console.log(data)
            handler(data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount(){

        this.apiCall("http://localhost:3030/api/products/orders", this.showVentas)

                    }

    showVentas = (data) => {
        console.log(data)
        this.setState(
            {
                ventas: data.data.total
            }
            )
        }

        render(){

            const toThousand = function (n) {
                return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              };

            return(
            <div id="card" className="ladofrente col-3">
                <h6 className="headcard ventas">Ventas</h6>
                <h5> {toThousand(this.state.ventas)} </h5>
               
            </div>
        )
    }
}

export default Ventas