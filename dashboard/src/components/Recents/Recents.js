import React, { Component } from 'react';
import './Recents.css'

class LastProducts extends Component{
  constructor(){
    super();
    this.state = {
        recents:[]
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

    this.apiCall("http://localhost:3030/api/products/recent", this.showRecent)

                }

showRecent = (data) => {
    this.setState(
        {
            recents: data.data
        }
        )
      }
    render(){

        return(

          <div id="cards" className="Recent ladofrente d-flex flex-column flex-wrap col-lg-5">
          <h5 className="headcard headRec title">Últimos productos cargados</h5>
          <div className="contenido-card">
                  <table className="table table-borderless col">
                      <thead>
                      <tr className="lineaRec">
                          <th className="prod" scope="col cabecera">PRODUCTO</th>
                          <th scope="col cabecera">STOCK</th>
                          <th scope="col cabecera">PRECIO</th>
                        </tr>
                      </thead>
                      <tbody >
                      {
                        this.state.recents.map((recent, i) => {
                        return(
                        <tr key={'nameCat'+i}>
                          <td key={'name'+i} className="categoryName"> {recent.name } </td> 
                          <td key={'product'+i} className="categoryQuantity"> {recent.stock} </td> 
                          <td key={'produc'+i} className="categoryQuantity"> {recent.price} </td> 
                        </tr>)
                        })
                      }
                          {/* <thead>
                              <tr>
                                  <th >Total de productos:</th>
                                  <th >{this.state.recents.length}</th>
                              </tr>
                          </thead> */}
                      </tbody>
                  </table>
          </div>
      </div>
      );
    };
}
export default LastProducts;