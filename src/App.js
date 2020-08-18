import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Payment from '../src/components/PaymentContainer/Payment.js';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Payment} />
      </Switch>
     
    </div>
  </Router>
  );
}

export default App;
