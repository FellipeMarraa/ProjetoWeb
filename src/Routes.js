import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Cliente from "./pages/cliente/cliente";
import Profissional from "./pages/profissional/profissional";
import PerfilProfissional from "./pages/home/perfil-profissional/perfil.profissional";
import PerfilAdmin from "./pages/perfil-admin/perfil.admin";
import Cards from "./pages/cards/cardsExample";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cliente' component={Cliente}/>}/>
            <Route exact path='/profissional' component={Profissional}/>
            <Route exact path='/perfil-profissional' component={PerfilProfissional}/>
            <Route exact path='/perfil-admin' component={PerfilAdmin}/>
            <Route exact path='/cards' component={Cards}/>
        </Switch>
    )
}

export default Routes;
