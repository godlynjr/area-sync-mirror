// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
// import RegisterForm from './RegisterForm';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/register" component={RegisterForm} />
      <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
