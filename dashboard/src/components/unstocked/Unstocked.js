import React from 'react';
import "./Unstocked.css"
function Unstocked() {
    return (
        <div classname="Stock d-flex flex-column flex-wrap col-lg-6">
            <h5 classname="headcardred">Productos con poco stock</h5>
            <div classname="contenido-card ">
                <table classname="table table-borderless col">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">STOCK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">cúrcuma</th>
                            <td>10</td>
                        </tr>                        <tr>
                            <th scope="row">cúrcuma</th>
                            <td>10</td>
                        </tr>                        <tr>
                            <th scope="row">cúrcuma</th>
                            <td>10</td>
                        </tr>                        <tr>
                            <th scope="row">cúrcuma</th>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
}

export default Unstocked