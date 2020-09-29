import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Cliente from "./pages/cliente/index";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cliente' component={Cliente}/>
        </Switch>
    )
}

export default Routes;