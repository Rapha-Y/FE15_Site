import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderLink from './HeaderLink';

function Header() {
    return (
        <Navbar 
            bg="dark" 
            variant="dark" 
            className="fixed-top px-4" 
            expand="md"
        >
            <Navbar.Brand className="d-md-none">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mx-auto">
                    <HeaderLink path="/home" name="Home" />
                    <HeaderLink path="/characters" name="Characters" />
                    <HeaderLink path="/battlefield" name="Battlefield" />
                    <HeaderLink path="/buynow" name="Buy Now" />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;