import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
        </Switch>
    )
}

export default Routes;