import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CharacterInfo from '../resources/CharacterInfo';

import CharacterPortrait from './CharacterPortrait';

function CharacterGrid() {

    let characterButtons = [];
    for (var i = 0; i < CharacterInfo.length; i++) {
        characterButtons.push(
            <Col xs={4} sm={3} md={2}>
                <CharacterPortrait 
                    name={CharacterInfo[i].name} 
                    img={CharacterInfo[i].img}    
                    class={CharacterInfo[i].class}
                    age={CharacterInfo[i].age}
                    description={CharacterInfo[i].description}
                />
            </Col>
        );
    }

    return (
        <div>
            <Container>
                <Row>
                    {characterButtons}
                </Row>
            </Container>
        </div>
    );
}

export default CharacterGrid;