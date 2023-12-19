import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Screens/Dashboard';
import LoginForm from './Auth/LoginForm';
import UserList from './Screens/UserList';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/UserList" element={<UserList />} />
        </Routes>
    </Router>
  );
};

export default App;
