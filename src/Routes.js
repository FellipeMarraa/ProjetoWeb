import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Cliente from "./pages/cliente/cliente";
import Profissional from "./pages/profissional/profissional";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cliente' component={Cliente}/>}/>
            <Route exact path='/profissional' component={Profissional}/>
        </Switch>
    )
}

export default Routes;
