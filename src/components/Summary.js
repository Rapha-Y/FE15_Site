import React from 'react';
import { Jumbotron, Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Summary() {
    return (
        <Jumbotron style={{margin: 0}} fluid>
            <Container>
                <Row>
                    <Col lg={7}>
                        <h2 style={{paddingBottom: "12px"}}>Two paths, one destiny</h2>
                        <p>
                            The kingdom of Zofia, blessed by the goddess Mila, is suddenly found engulfed
                            in the flames of war, as the neighboring kingdom of Rigel invades the land
                            under command of Emperor Rudolf, bringing with them death and suffering.
                        </p>
                        <p>
                            Join Alm in his fight for Zofia, and Celica in her search for the goddess,
                            as they overcome bandits, armies and ancient horrors, through their different
                            paths, while sharing the single goal of stopping the war.
                        </p>
                        <p>
                            In this story, your role is to command Alm, Celica and their allies on the 
                            battlefield, gradually improving their performance with each battle, gathering 
                            resources from exploring towns and dungeons, and forging bonds with them, as
                            you learn of their personal tales and relationships.
                        </p>
                    </Col>
                    <Col lg={5}>
                        <Image 
                            src={require("../resources/mila.png")} 
                            className="d-none d-lg-block float-right"
                        />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );   
}

export default Summary;