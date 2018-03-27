import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import components
import Home from './components/ViewComponents/Home/Home';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)