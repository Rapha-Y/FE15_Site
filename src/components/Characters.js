import React from 'react';
import { Image, Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CharacterGrid from './CharacterGrid';

function Characters() {
    return (
        <div className="pb-4">
            <Image src={require('../resources/starters.png')} fluid />
            <Jumbotron fluid>
                <Container>
                    <h2 style={{paddingBottom: "12px"}}>Many allies for many foes</h2>
                    <p>
                        In both Alm's and Celica's journeys, many allies with unique talents will be found, 
                        all of them carrying their own stories, which you can explore by talking to them or 
                        by letting them mingle with other allies. Childhood friends, military companions,
                        lovers - every character comes with their own connections and a place in the world.
                    </p>
                    <p>
                        Among your foes, you will find nameless soldiers and monster, whose only purpose
                        is to pose an obstacle, but also complex enemies, with understandable reasons for 
                        opposing the heroes. A colorful cast of mad antagonists, greedy monsters and tragic 
                        villains elevate the tales of Valentia.
                    </p>
                </Container>
            </Jumbotron>
            <CharacterGrid />
        </div>
    );
}

export default Characters;