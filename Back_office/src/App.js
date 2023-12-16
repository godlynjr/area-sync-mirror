import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Screens/Dashboard';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
    </Router>
  );
};

export default App;