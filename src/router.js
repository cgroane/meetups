import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import components
import Attendees from './components/ViewComponents/Attendees/Attendees';
import MapView from './components/ViewComponents/MapView/MapView';
import Selected from './components/ViewComponents/Selected/Selected';

export default (
    <Switch>
        <Route exact path="/" component={MapView} />
        <Route path="/attendees" component={Attendees} />
        <Route path="/selected" component={Selected} />
    </Switch>
)