import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import ListValut from './components/ListValut';
import Subscribe from './components/Subscribe';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <div>
                <Body/>
                <ListValut/>
            </div>     );
    }
}

export default App;