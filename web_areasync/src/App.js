import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import LoginForm from './Authentification/LoginForm';
import RegisterForm from './Authentification/RegisterForm';
import Forgot from './Authentification/Forgot';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
    </Router>
  );
};

export default App;
