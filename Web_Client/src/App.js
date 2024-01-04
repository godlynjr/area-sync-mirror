import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginForm from './Authentification/LoginForm';
import RegisterForm from './Authentification/RegisterForm';
import Forgot from './Authentification/Forgot';
import HomePage from './HomePage';

function App() {

  const connected = (component) => {
    
    // check if a token exists
    const token = localStorage.getItem('authToken');
    console.log("connected " + token);


    return token ? <Navigate to="/home" /> : component;
  };

  const disconnected = (component) => {

    const token = localStorage.getItem('authToken');
    console.log(token);
    
    return token ? component : <Navigate to="/login" /> ;
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
