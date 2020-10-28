import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from './Routes';


class App extends Component {

    render() {
     return   (
            <BrowserRouter>
                <Routes></Routes>
            </BrowserRouter>
        );
    }
}

export default App;
