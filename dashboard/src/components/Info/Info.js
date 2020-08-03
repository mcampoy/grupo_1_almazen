import React from 'react';
import Enabled from '../Enabled/Enabled';
import Capital from '../Capital/Capital';
import Ventas from '../Ventas/Ventas';

import './info.css'


function Info() {
    return (
        <div className="row info justify-content: space-between">
            <Enabled />
            <Capital />
            <Ventas />
        </div>
    )
}

export default Info