import React, { Component } from 'react';

class Capital extends Component {
    constructor(){
        super();
        this.state = {
            capital: 0
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

        this.apiCall("http://localhost:3030/api/products/capital", this.showCapital)

                    }

    showCapital = (data) => {
        this.setState(
            {
                capital: data.data.capital
            }
            )
        }

        render(){
            const toThousand = function (n) {
                return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              };

            return(
                <div id="card" className="ladofrente col-3">
                <h6 className="headcard capital">Bienes de cambio</h6>
                <h5> $ { toThousand(this.state.capital) }</h5>
            </div>
        )
    }
}

export default Capital