import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-center">
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