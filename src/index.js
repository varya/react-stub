import React from 'react';
import ReactDOM from 'react-dom';

import Index from "./pages/Index/Index.js";
import Settings from "./pages/Settings/Settings.js";

import { Router, Route } from 'react-router';
import { history } from 'history';

ReactDOM.render(
  <Router
    forceFetch={true}
    history={history}>
    <Route
        path="/"
        component={Index}
    />
    <Route
        path="settings"
        component={Settings}
    />
  </Router>
  ,
  document.getElementById('root')
);
