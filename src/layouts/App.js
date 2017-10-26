import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './Main';

function App() {
  return (
    <Switch>
      <Route path="/404" render={() => <div>not match</div>} />
      <Route path="/" component={MainLayout} />
    </Switch>
  );
}

export default App;
