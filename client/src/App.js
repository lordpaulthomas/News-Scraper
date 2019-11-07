import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Articles from './pages/Articles';
import Saved from './pages/Saved'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Articles} />
        <Route exact Path='/saved' component={Saved} />
        <Route component={Articles} />
      </Switch>
    </Router>
  );
}

export default App;
