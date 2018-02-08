import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ShowYe from './components/shouYe'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/list" exact component={IndexPage} />
        <Route path="/"  component={ShowYe} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
 