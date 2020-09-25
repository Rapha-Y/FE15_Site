import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderLink(props) {
    return (
        <div>
            {/* HeaderLink with padding for bigger screens */}
            <Nav.Link as={Link} to={props.path} className="d-none d-md-block px-3">
                {props.name}
            </Nav.Link>
            {/* HeaderLink without padding for smaller screens */}
            <Nav.Link as={Link} to={props.path} className="d-md-none">
                {props.name}
            </Nav.Link>
        </div>
    );
}

export default HeaderLink;