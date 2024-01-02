import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Navbar from './Components/Navbar';
import Myinfo from './Components/Myinfo';
import Skills from './Components/Skills';
import Projects from './Components/Projects';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar />
    <Myinfo />
    <Skills />
    <Projects/>
  </React.StrictMode>
);

