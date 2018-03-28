import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import components
import Home from './components/ViewComponents/Home/Home';
import MapView from './components/ViewComponents/MapView/MapView';
import Selected from './components/ViewComponents/Selected/Selected';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/places" component={MapView} />
        <Route path="/selected" component={Selected} />
    </Switch>
)