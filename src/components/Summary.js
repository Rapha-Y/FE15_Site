import React from 'react';
import { Jumbotron, Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Summary() {
    return (
        <Jumbotron style={{marginLeft: 0, marginRight: 0}}>
            <Container>
                <Row>
                    <Col lg={7}>
                        <h2 style={{paddingBottom: "12px"}}>Two Paths, One Destiny</h2>
                        <p>
                            Long ago, two sibling gods arrived at the continent of Valentia. The eldest
                            god, Duma, took the southern lands and founded the kingdom of Rigel, where
                            strenght is valued above all. The merciful Mila, believing mankind deserved
                            to freely pursue happiness, founded the kingdom of Zofia at the south,
                            giving her blessings to the land.
                        </p>
                        <p>
                            Due to a divine accord between the gods, each nation was never to violate
                            each other's dominion and peace reigned for millennia. However, Rigel
                            suddenly broke the pact bringing death and sufferring to Zofia, under
                            command of Emperor Rudolf.
                        </p>
                        <p>
                            Join the journey of Alm and Celica, two Zofians who wish to end the war,
                            as you command them and their armies in the quest for peace.
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