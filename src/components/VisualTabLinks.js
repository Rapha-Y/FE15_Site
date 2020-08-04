import React from 'react';

import Repayment from '../resources/repayment.png';
import VeteranKnight from '../resources/veteranknight.png';
import Brands from '../resources/brands.png';
import VisualTabLink from './VisualTabLink';

function VisualTabLinks() {    
    return (
        <div>
            <VisualTabLink text="Meet the Characters" img={Repayment}/>
            <VisualTabLink text="Join the Battlefield" img={VeteranKnight}/>
            <VisualTabLink text="Start the Adventure" img={Brands}/>
        </div>
    );
}

export default VisualTabLinks;