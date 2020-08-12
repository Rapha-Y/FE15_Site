import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function VisualTabLink(props) {
    return (
        <Container className="bg-secondary my-3">
            <Row>
                <Col 
                    md={5} 
                    className="d-flex align-items-center justify-content-center"
                >
                    <Container className="my-4 text-center">
                        <h1>{props.text}</h1>   
                    </Container>
                </Col>
                <Col md={7} style={{padding: 0}}>
                    <Image 
                        src={props.img}
                        className="max-width"
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default VisualTabLink;