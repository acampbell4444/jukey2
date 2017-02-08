import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import Albums from './components/Albums'
import Album from './components/Album'
import Artists from './components/Artists';
import Artist from './components/Artist';
ReactDOM.render(
<Router history={hashHistory}>
  <Route path='/' component={AppContainer}>
    <Route path='/albums' component={Albums} /> {/* This one is self-closing */}
  	<Route path="albums/:albumId" component={Album} />
    <Route path="/artists" component={Artists} />
    <Route path="/artists/:artistId" component={Artist} />

  	<IndexRedirect to= '/albums' />
  </Route>
</Router>,
  document.getElementById('app')
);
