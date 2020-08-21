import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {
    return (
        <Jumbotron fluid>
            <Container>
                <h2 style={{paddingBottom: "12px"}}>Page Not Found</h2>
                <p>
                    The page you are trying to access does not exist. This error was probably caused due
                    to manual rewriting of the path in the site's url. To resume navigation in this site,
                    you may simply click on any item of the navigation bar at the top.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default NotFound;