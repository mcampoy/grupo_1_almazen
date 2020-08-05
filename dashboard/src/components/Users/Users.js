import React, { Component } from 'react';
import  './Users.css'


class Users extends Component {

   

    constructor(){
        super();
        this.state = {
            users:[]
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

        this.apiCall("http://localhost:3030/api/users/role", this.showUsers)


                    }

    showUsers = (data) => {
        this.setState(
            {
                users: data.data
            }
            )
        }

        render(){

            return(
            <div id="cards" className="Category ladofrente d-flex flex-column flex-wrap col-lg-5">
                <h5 className="headcard headUsers title">Usuarios según su rol</h5>
                <div className="contenido-card">
                        <table className="table table-borderless col">
                            <thead>
                                <tr className="lineaUsers">
                                    <th className="prod" scope="col">ROL</th>
                                    <th scope="col">CANT.</th>
                                </tr>
                            </thead>
                            <tbody >

                                <tr>
                                  <td key={'name'} className="categoryName"> Administradores </td> 
                                  <td key={'products'} className="categoryQuantity"> {this.state.users.adminRole} </td> 
                                </tr>
                                <tr >
                                  <td key={'name'} className="categoryName"> Usuarios registrados </td> 
                                  <td key={'products'} className="categoryQuantity"> {this.state.users.users} </td> 
                                </tr>
                                <tr>
                                  <td key={'name'} className="categoryName"> Editores </td> 
                                  <td key={'products'} className="categoryQuantity"> {this.state.users.editRole} </td> 
                                </tr>
                                <thead className='usersLength'>
                                    <tr>
                                        <th >Total de usuarios:</th>
                                        <th className="headUsers">{this.state.users.length}</th>
                                    </tr>
                                </thead>
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default Users