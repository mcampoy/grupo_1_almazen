import React, { Component } from 'react';
import './Ventas.css'

class Ventas extends Component {
    constructor(){
        super();
        this.state = {
            ventas: 0,
            recaudacion: 0
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

        this.apiCall("http://localhost:3030/api/products/orders", this.showVentas)

                    }

    showVentas = (data) => {
        this.setState(
            {
                ventas: data.data.total,
                recaudacion: data.data.recaudacion
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
                <div className="reca">
                    <h5> {toThousand(this.state.ventas)}  </h5>
                    <h5 className="recaudacion"> $ {toThousand(this.state.recaudacion)} </h5>
                </div>
            </div>
        )
    }
}

export default Ventas