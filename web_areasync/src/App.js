import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
    </Router>
  );
};

export default App;
