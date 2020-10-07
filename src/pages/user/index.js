import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

const User = props => {

    return (
        <div>
        <h1> Esta e a pagina de cliente</h1>
        <h2><Link to={'/'}>Home</Link></h2>
        </div>
            );

}
export default User;