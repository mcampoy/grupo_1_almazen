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
            console.log(data)
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
            <div className="enabled">
                <h6 className="headcard">Bienes de cambio</h6>
                <h5> $ { toThousand(this.state.capital) }</h5>
               
            </div>
        )
    }
}

export default Capital