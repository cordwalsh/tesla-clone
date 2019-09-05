import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/Navbar';
import CenterBox from './components/CenterBox';




const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <CenterBox />
    </div>
  </BrowserRouter>
);

export default App;
