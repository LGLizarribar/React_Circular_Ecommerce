import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RegisterForm } from './components';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/register" component={(props) => <RegisterForm {...props} />} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
