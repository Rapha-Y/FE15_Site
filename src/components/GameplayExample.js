import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function GameplayExample(props) {
    return (
        <Container className="my-3" style={{backgroundColor: "#eee"}}>
            <Row>
                <Col 
                    md={5} 
                    className="d-flex align-items-center justify-content-center"
                >
                    <Container className="py-4">
                        {props.content}
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

export default GameplayExample;