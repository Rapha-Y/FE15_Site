import React from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function VisualTabLink(props) {
    return (
        <Button as={Link} to={props.link} variant="outline-danger" className="my-3 p-0">
            <Container className="bg-success">
                    <Row style={{backgroundColor: "#eee", color: "black"}}>
                        <Col 
                            md={5} 
                            className="d-flex align-items-center"
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
        </Button>
    );
}

export default VisualTabLink;