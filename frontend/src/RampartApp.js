import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/home-page';
import OwnerOperatorPage from './pages/owner-operator/owner-operator-page';

// init and set up localforage
import localforage from 'localforage';

localforage.config({
  name: 'RampartDB',
  storeName: 'images'
});

function RampartApp() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        {<Route path='/owner-operator-form'>
          <OwnerOperatorPage />
        </Route>

          /*<Route path='/driver-application'>
            <DriverForm />
          </Route>*/}
      </Switch>
    </Router>
  );
}

export default RampartApp;