import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DriverApp from './components/driver-app/driver-app';
import LandingPage from './components/landing-page/landing-page';
import OwnerOpApp from './components/ownerop-app/owperop-app';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />{' '}
        <Route path='/ownerop-app' component={OwnerOpApp} />{' '}
        <Route path='/driver-application' component={DriverApp} />{' '}
      </Switch>{' '}
    </Router>
  );
}

export default App;
