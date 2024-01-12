import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginForm from './Authentification/LoginForm';
import RegisterForm from './Authentification/RegisterForm';
import Forgot from './Authentification/Forgot';
import HomePage from './HomePage';

import Discord from './Services/Discord/Discord';
import Discord1 from './Services/Discord/area1';
import Discord2 from './Services/Discord/area2';
import Discord3 from './Services/Discord/area3';



import Calendar from './Services/Calendar/Calendar';
import Calendar1 from './Services/Calendar/area1';
import Calendar2 from './Services/Calendar/area2';
import Calendar3 from './Services/Calendar/area3';

import Notion from './Services/Notion/Notion';
import Notion1 from './Services/Notion/area1';
import Notion2 from './Services/Notion/area2';
import Notion3 from './Services/Notion/area3';


import Spotify from './Services/Spotify/Spotify';
import Spotify1 from './Services/Spotify/area1';
import Spotify2 from './Services/Spotify/area2';
import Spotify3 from './Services/Spotify/area3';

import Mail from './Services/Mail/Mail';
import Mail1 from './Services/Mail/area1';
import Mail2 from './Services/Mail/area2';
import Mail3 from './Services/Mail/area3';

import Tally from './Services/Tally/Tally';
import Tally1 from './Services/Tally/area1';
import Tally2 from './Services/Tally/area2';
import Tally3 from './Services/Tally/area3';

import Github from './Services/Github/Github';
import Github1 from './Services/Github/area1';
import Github2 from './Services/Github/area2';
import Github3 from './Services/Github/area3';

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
        <Route path="/" element={connected(<LandingPage />)} />
        <Route path="/register" element={connected(<RegisterForm />)} />
        <Route path="/login" element={connected(<LoginForm />)} />
        <Route path="/forgot" element={connected(<Forgot />)} />
        <Route path="/home" element={disconnected(<HomePage />)} />

        <Route path="/Discord" element={disconnected(<Discord />)} />
        <Route path="/Discord-1" element={disconnected(<Discord1 />)} />
        <Route path="/Discord-2" element={disconnected(<Discord2 />)} />
        <Route path="/Discord-3" element={disconnected(<Discord3 />)} />


        <Route path="/Notion" element={disconnected(<Notion />)} />
        <Route path="/Notion-1" element={disconnected(<Notion1 />)} />
        <Route path="/Notion-2" element={disconnected(<Notion2 />)} />
        <Route path="/Notion-3" element={disconnected(<Notion3 />)} />

        <Route path="/Tally" element={disconnected(<Tally />)} />
        <Route path="/Tally-1" element={disconnected(<Tally1 />)} />
        <Route path="/Tally-2" element={disconnected(<Tally2 />)} />
        <Route path="/Tally-3" element={disconnected(<Tally3 />)} />

        <Route path="/Google Calendar" element={disconnected(<Calendar />)} />
        <Route path="/Calendar-1" element={disconnected(<Calendar1 />)} />
        <Route path="/Calendar-2" element={disconnected(<Calendar2 />)} />
        <Route path="/Calendar-3" element={disconnected(<Calendar3 />)} />

        <Route path="/Gmail" element={disconnected(<Mail />)} />
        <Route path="/Mail-1" element={disconnected(<Mail1 />)} />
        <Route path="/Mail-2" element={disconnected(<Mail2 />)} />
        <Route path="/Mail-3" element={disconnected(<Mail3 />)} />

        <Route path="/Github" element={disconnected(<Github />)} />
        <Route path="/Github-1" element={disconnected(<Github1 />)} />
        <Route path="/Github-2" element={disconnected(<Github2 />)} />
        <Route path="/Github-3" element={disconnected(<Github3 />)} />

        <Route path="/Spotify" element={disconnected(<Spotify />)} />
        <Route path="/Spotify-1" element={disconnected(<Spotify1 />)} />
        <Route path="/Spotify-2" element={disconnected(<Spotify2 />)} />
        <Route path="/Spotify-3" element={disconnected(<Spotify3 />)} />

      </Routes>
    </Router>
  );
}

export default App;
