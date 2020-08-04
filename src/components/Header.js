import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-center fixed-top">
            <Nav>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
                <Nav.Link as={Link} to="/battlefield">Battlefield</Nav.Link>
                <Nav.Link as={Link} to="/buynow">Buy Now</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;