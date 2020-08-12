import React from 'react';

import Banner from './Banner';
import Summary from './Summary';
import VisualTabLinks from './VisualTabLinks';

function Home() {
    return (
        <div>
            <Banner />
            <Summary />
            <VisualTabLinks />
        </div>
    );
}

export default Home;