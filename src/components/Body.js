import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Characters from './Characters';
import Battlefield from './Battlefield';
import BuyNow from './BuyNow';
import NotFound from './NotFound';

function Body() {
    return (
        <div className="bg-dark" style={{paddingBottom: 16, marginBottom: -16, marginRight: 0}}>
            <div style={{marginTop: 56}} />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/characters" component={Characters} />
                <Route path="/battlefield" component={Battlefield} />
                <Route path="/buynow" component={BuyNow} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default Body;