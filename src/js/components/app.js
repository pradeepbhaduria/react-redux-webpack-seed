import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Template from './app-template';
import Home from './home/home';

export default () => {
  return (
    <Router>
      <Route path="/" component={ Template }>
      	<IndexRoute component={ Home } />
      </Route>
    </Router>
  );
}