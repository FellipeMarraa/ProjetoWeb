import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

const Profissional = props => {

    return (
        <div>
            <h1> Esta e a pagina de Profissional</h1>
            <h2><Link to={'/'}>Home</Link></h2>
        </div>
    );

}
export default Profissional;