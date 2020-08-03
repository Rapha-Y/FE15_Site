import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import Characters from './Characters';
import Battlefield from './Battlefield';
import BuyNow from './BuyNow';

function Body() {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/characters" component={Characters} />
            <Route path="/battlefield" component={Battlefield} />
            <Route path="/buynow" component={BuyNow} />
        </Switch>
    );
}

export default Body;