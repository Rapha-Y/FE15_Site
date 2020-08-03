import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import Characters from './Characters';
import Battlefield from './Battlefield';
import BuyNow from './BuyNow';

function Navbar() {
    return (
        <div>
            <BootstrapNavbar bg="dark" variant="dark" className="justify-content-center">
                <Nav>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
                    <Nav.Link as={Link} to="/battlefield">Battlefield</Nav.Link>
                    <Nav.Link as={Link} to="/buynow">Buy Now</Nav.Link>
                </Nav>
            </BootstrapNavbar>

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/characters" component={Characters} />
                <Route path="/battlefield" component={Battlefield} />
                <Route path="/buynow" component={BuyNow} />
            </Switch>
        </div>
    )
}

export default Navbar;