import React, {Component} from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
//import {BrowserRouter, Routes, Route, Link, } from "react-router-dom";
//import Home from '../pages/Home';
//import About from '../pages/About';
//import Subscribe from '../pages/Subscribe';


class Headers extends Component {
    render() {
        return (
            <>
            <Navbar className="h-25" collapseOnSelect expand="md" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav nav-masthead float-md-end row">
                            <Nav.Link className="col-sm" href="/">Главная</Nav.Link>
                            <Nav.Link className="col-sm" href="/subscribe">Подписка</Nav.Link>
                            <Nav.Link className="col-sm" href="/about">О нас</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }
}

export default Headers