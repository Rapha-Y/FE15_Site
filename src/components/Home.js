import React from 'react';

import Banner from './Banner';
import TabSummary from './TabSummary';
import VisualTabLinks from './VisualTabLinks';

import Mila from '../resources/mila.png';

function Home() {
    return (
        <div>
            <Banner />
            <TabSummary
                img={Mila}
                title="Two paths, one destiny"
                content={
                    <div>
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
                    </div>
                }
            />
            <VisualTabLinks />
        </div>
    );
}

export default Home;