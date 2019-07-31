import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Page404 from './components/pages/404';
import Login from './components/pages/Login';

export default () => (
  <Router>
      <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/Dashboard" push />} />        
          <Route path="/app" component={App} />
          <Route path="/404" component={Page404} />
          <Route path="/login" component={Login} />
          <Route component={Page404} /> 
      </Switch>
  </Router>
)