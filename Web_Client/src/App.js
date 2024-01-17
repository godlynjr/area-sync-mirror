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

import Youtube from './Services/Youtube/Youtube';
import Youtube1 from './Services/Youtube/area1';
import Youtube2 from './Services/Youtube/area2';
import Youtube3 from './Services/Youtube/area3';


import Spotify from './Services/Spotify/Spotify';
import Spotify1 from './Services/Spotify/area1';
import Spotify2 from './Services/Spotify/area2';
import Spotify3 from './Services/Spotify/area3';

import Mail from './Services/Mail/Mail';
import Mail1 from './Services/Mail/area1';
import Mail2 from './Services/Mail/area2';
import Mail3 from './Services/Mail/area3';

import Quote from './Services/Quote/Quote';
import Quote1 from './Services/Quote/area1';
import Quote2 from './Services/Quote/area2';
import Quote3 from './Services/Quote/area3';

import Github from './Services/Github/Github';
import Github1 from './Services/Github/area1';
import Github2 from './Services/Github/area2';
import Github3 from './Services/Github/area3';

import Download from 'Download';
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


        <Route path="/Youtube" element={disconnected(<Youtube />)} />
        <Route path="/Youtube-1" element={disconnected(<Youtube1 />)} />
        <Route path="/Youtube-2" element={disconnected(<Youtube2 />)} />
        <Route path="/Youtube-3" element={disconnected(<Youtube3 />)} />

        <Route path="/Quote" element={disconnected(<Quote />)} />
        <Route path="/Quote-1" element={disconnected(<Quote1 />)} />
        <Route path="/Quote-2" element={disconnected(<Quote2 />)} />
        <Route path="/Quote-3" element={disconnected(<Quote3 />)} />

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

        <Route path="/client.apk" element={disconnected(<Spotify3 />)} />
      </Routes>
    </Router>
  );
}

export default App;
