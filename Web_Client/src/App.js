import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginForm from './Authentification/LoginForm';
import RegisterForm from './Authentification/RegisterForm';
import Forgot from './Authentification/Forgot';
import HomePage from './HomePage';
import User from './User';

function App() {

  const connected = (component) => {
    
    // check if a token exists
    // token = localStorage.getItem('authToken')
    // return token ? <Navigate to="/home" /> : component;
    
    // use the bool
    return User.isLoggedIn ? <Navigate to="/home" /> : component;
  };

  const disconnected = (component) => {
    console.log(User.isLoggedIn);
    return User.isLoggedIn ? component : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={connected(<RegisterForm />)} />
        <Route path="/login" element={connected(<LoginForm />)} />
        <Route path="/forgot" element={connected(<Forgot />)} />
        <Route path="/home" element={disconnected(<HomePage />)} />
      </Routes>
    </Router>
  );
}

export default App;
