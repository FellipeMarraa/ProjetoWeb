import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import User from "./pages/user/index";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/user' component={User}/>}/>
        </Switch>
    )
}

export default Routes;
