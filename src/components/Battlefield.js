import React from 'react';
import { Image, Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GameplayExample from './GameplayExample';

import Forecast from '../resources/forecast.png';
import Promotion from '../resources/promotion.png';
import Dungeon from '../resources/dungeon.png';

function Battlefield() {
    return (
        <div>
            <Image src={require('../resources/turnwheel.png')} fluid />
            <Jumbotron>
                <Container>
                    <h2 style={{paddingBottom: "12px"}}>Faithful, but innovative</h2>
                    <p>
                        In Fire Emblem Gaiden for the SNES, concepts such as dungeons were introduced, but
                        could never be fully explored due to limitations of the time. In this remake, such
                        ideas are brought to life in modern fashion, allowing for a one-of-a-kind Fire 
                        Emblem experience.
                    </p>
                    <p>
                        Gaiden was also known for presenting many unique ideas such as magic costing health
                        and very long-range archers, both of which are unchanged in this title. Building
                        upon such ideas, Fire Emblem Echoes: Shadows of Valentia also adds skills which cost
                        health and newer mechanics like forging, culminating in a game that preserves the
                        original identity of Gaiden, while feeling like a modern title.
                    </p>
                </Container>
            </Jumbotron>
            <GameplayExample 
                img={Forecast} 
                content={
                    <div>
                        <h2 style={{paddingBottom: "12px"}}>Grid-based combat</h2>
                        <p>
                            In classic Fire Emblem fashion, you control where and when to engage combat,
                            by moving your units around the map and picking your battles.
                        </p>
                    </div>
                }
            />
            <GameplayExample 
                img={Promotion} 
                content={
                    <div>
                        <h2 style={{paddingBottom: "12px"}}>Character progression</h2>
                        <p>
                            Each of your units can become stronger by leveling up, changing classes or
                            getting new weapons, which reward them with unique skills upon mastery.
                        </p>
                    </div>
                }
            />
            <GameplayExample 
                img={Dungeon} 
                content={
                    <div>
                        <h2 style={{paddingBottom: "12px"}}>Dungeon crawling</h2>
                        <p>
                            Unlike every previous entry in the franchise, environment exploration makes a 
                            big part of the game, allowing you to gather resources and grind experience in 
                            lesser battles, in case you feel difficulty progressing.
                        </p>
                    </div>
                }
            />
        </div>
    );
}

export default Battlefield;