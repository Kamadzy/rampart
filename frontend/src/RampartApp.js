import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import localforage from 'localforage';


import HomePage from './pages/home/home-page';
import OwnerOperatorPage from './pages/owner-operator/owner-operator-page';
import DriverPage from './pages/driver/driver-page';

// set up localforage (helper to work with Web API cache - IndexedDB, local storage etc)
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

        <Route path='/owner-operator-form'>
          <OwnerOperatorPage />
        </Route>

        <Route path='/driver-application'>
          <DriverPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default RampartApp;