import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function VisualTabLinks() {
    /*
        The code repetition is due to an issue regarding passing Image src as a prop, as it doesn't work.
        Borders should be internal
        Both issues must be fixed asap
    */
    
    return (
        <div>
            <Container className="bg-secondary my-3">
                <Row>
                    <Col 
                        md={5} 
                        className="d-flex align-items-center justify-content-center border border-light"
                    >
                        <h1>Meet the Characters</h1>
                    </Col>
                    <Col md={7} style={{padding: 0}}>
                        <Image 
                            src={require("../resources/repayment.png")}
                            className="max-width"
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="bg-light my-3">
                <Row>
                    <Col 
                        md={5} 
                        className="d-flex align-items-center justify-content-center border border-secondary"
                    >
                        <h1>Join the Battle</h1>
                    </Col>
                    <Col md={7} style={{padding: 0}}>
                        <Image 
                            src={require("../resources/veteranknight.png")}
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="bg-secondary my-3">
                <Row>
                    <Col 
                        md={5} 
                        className="d-flex align-items-center justify-content-center border border-light"
                    >
                        <h1>Start the Adventure</h1>
                    </Col>
                    <Col md={7} style={{padding: 0}}>
                        <Image 
                            src={require("../resources/brands.png")}
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default VisualTabLinks;