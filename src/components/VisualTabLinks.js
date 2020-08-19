import React from 'react';

import Repayment from '../resources/repayment.png';
import VeteranKnight from '../resources/veteranknight.png';
import Brands from '../resources/brands.png';
import VisualTabLink from './VisualTabLink';

function VisualTabLinks() {    
    return (
        <div>
            <VisualTabLink 
                content={
                    <div>
                        <h2 style={{paddingBottom: "12px"}}>Meet the Characters</h2>
                        <p>
                            Learn more about both allies and enemies alike, with a brief summary of who
                            they are and what they do.
                        </p>
                    </div>
                } 
                img={Repayment}
            />
            <VisualTabLink 
                content={
                    <div>
                        <h2 style={{paddingBottom: "12px"}}>Join the Battlefield</h2>
                        <p>
                            Learn a little about how the game plays out and what differentiates Fire
                            Emblem Echoes: Shadows of Valentia from other titles in the series.
                        </p>
                    </div>
                } 
                img={VeteranKnight}
            />
            <VisualTabLink 
                content={
                    <div>
                        <h2 style={{paddingBottom: "12px"}}>Start the Adventure</h2>
                        <p>
                            Acquire the game and enjoy this amazing game with an engaging story and 
                            gameplay.
                        </p>
                    </div>
                } 
                img={Brands}
            />
        </div>
    );
}

export default VisualTabLinks;