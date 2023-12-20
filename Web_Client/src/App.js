import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginForm from './Authentification/LoginForm';
import RegisterForm from './Authentification/RegisterForm';
import Forgot from './Authentification/Forgot';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
    </Router>
  );
};

export default App;
