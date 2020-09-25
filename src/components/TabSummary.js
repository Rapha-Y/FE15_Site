import React from 'react';
import { Jumbotron, Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TabSummary(props) {
    if (props.img !== null) {
        return (
            <Jumbotron style={{margin: 0}} fluid>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h2 style={{paddingBottom: "12px"}}>
                                {props.title}
                            </h2>
                            {props.content}
                        </Col>
                        <Col lg={4}>
                            <Image 
                                src={props.img} 
                                className="d-none d-lg-block float-right"
                            />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    } else {
        return (
            <Jumbotron style={{margin: 0}} fluid>
                <Container>
                    <h2 style={{paddingBottom: "12px"}}>
                        {props.title}
                    </h2>
                    {props.content}
                </Container>
            </Jumbotron>
        );
    }
}

export default TabSummary;