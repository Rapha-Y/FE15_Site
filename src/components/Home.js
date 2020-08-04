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
            {/* link to characters */}
            {/* link to battlefield */}
            {/* link to buynow */}
        </div>
    );
}

export default Home;