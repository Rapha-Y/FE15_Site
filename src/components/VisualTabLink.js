import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function VisualTabLink(props) {
    return (
        <Container className="my-3" style={{backgroundColor: "#eee"}}>
            <Row>
                <Col 
                    md={5} 
                    className="d-flex align-items-center justify-content-center border border-danger"
                >
                    <Container className="py-4">
                        {props.content}   
                    </Container>
                </Col>
                <Col md={7} style={{padding: 0}} className="border border-left-0 border-danger">
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