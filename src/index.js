import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import LoginPage from "./Components/LoginPage";
import CadastroPage from "./Components/CadastroPage";

ReactDOM.render(
    <BrowserRouter>

        <Switch>

            <Route exact path='/' component={App}/>
            <Route exact path='/Components/LoginPage' component={LoginPage}/>
            <Route exact path='/Components/CadastroPage' component={CadastroPage}/>

        </Switch>

    </BrowserRouter>

    , document.getElementById('root'));

