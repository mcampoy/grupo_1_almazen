import React, { Component } from 'react';



class Enabled extends Component {
    constructor(){
        super();
        this.state = {
            total: 0
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

        this.apiCall("http://localhost:3030/api/products/enabled", this.showEnabled)

                    }

    showEnabled = (data) => {
        this.setState(
            {
                total: data.data.length
            }
            )
        }

        render(){
            return(
                <div id="card" className="ladofrente col-3">
                <h6 className="headcard ene">Total de productos habilitados</h6>
                <h5>{this.state.total}</h5>
            </div>
        )
    }
}

export default Enabled