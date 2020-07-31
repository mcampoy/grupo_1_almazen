import React, {Component} from 'react';
class LastProducts extends Component{
       
    render(){
       
        
        return(
        <div className="componentes d-flex flex-row flex-wrap align-items-center justify-content-around col-12 align-items-strech">
                        <div className="contenido-card d-flex flex-column ">
                                <div className="lastProduct d-flex flex-column flex-wrap col">
                                    <div className="contenido-card-ul d-flex flex-row justify-content-between">
                                    <table className="table table-borderless col">
                                    <thead>
                                      <tr>
                                        <th scope="col cabecera">PRODUCTO</th>
                                        <th scope="col cabecera">STOCK</th>
                                        <th scope="col cabecera">PRECIO</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                      </tr>
                                      <tr>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>10</td>
                                      </tr>
                                      <tr>
                                        <td>10</td>
                                        <td>200</td>
                                        <td>10</td>
                                      </tr>
                                      <thead>
                                        <tr>
                                          <th scope="col">Total de categorías</th>
                                          <th scope="col">5</th>
                                        </tr>
                                      </thead>
                                    </tbody>
                                  </table>
                            </div>
                        </div>
                        </div> 
            </div>
        
            );
    };
}
export default LastProducts;