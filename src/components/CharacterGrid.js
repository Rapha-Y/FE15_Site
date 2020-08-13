import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Alm from '../resources/portraits/alm.png';
import Atlas from '../resources/portraits/atlas.png';
import Berkut from '../resources/portraits/berkut.png';
import Boey from '../resources/portraits/boey.png';
import Catria from '../resources/portraits/catria.png';
import Celica from '../resources/portraits/celica.png';
import Clair from '../resources/portraits/clair.png';
import Clive from '../resources/portraits/clive.png';
import Conrad from '../resources/portraits/conrad.png';
import Deen from '../resources/portraits/deen.png';
import Delthea from '../resources/portraits/delthea.png';
import Desaix from '../resources/portraits/desaix.png';

import CharacterPortrait from './CharacterPortrait';

function CharacterGrid() {
    return (
        <Container>
            <Row>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Alm" img={Alm} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Atlas" img={Atlas} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Berkut" img={Berkut} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Boey" img={Boey} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Catria" img={Catria} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Celica" img={Celica} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Clair" img={Clair} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Clive" img={Clive} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Conrad" img={Conrad} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Deen" img={Deen} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Delthea" img={Delthea} />
                </Col>
                <Col xs={3} sm={2}>
                    <CharacterPortrait name="Desaix" img={Desaix} />
                </Col>
            </Row>
        </Container>
    );
}

export default CharacterGrid;