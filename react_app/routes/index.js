import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

import App from '../components/App';
import PageNotFound from '../components/PageNotFound';
import FastRider from '../components/FastRider';
import {Consts} from '../constants';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/rides" />
        <Route path="/rides" component={FastRider} />

        <Route path="*" component={PageNotFound}/>

    </Route>
);
