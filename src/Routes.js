import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro"

function Routes(){
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cadastro' component={Cadastro}/>
        </Switch>
    )
}

export default Routes;