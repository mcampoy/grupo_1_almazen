import React from 'react';
import Enabled from '../Enabled/Enabled';
import Capital from '../Capital/Capital';
import Ventas from '../Ventas/Ventas';
import './infoheader.css'


function Infoheader() {
    return (
        <div className="col-12 info justify-content: space-around">
            <Enabled />
            <Capital />
            <Ventas />
        </div>
    )
}

export default Infoheader