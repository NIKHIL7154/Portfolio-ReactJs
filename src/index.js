import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Navbar from './Components/Navbar';
import Myinfo from './Components/Myinfo';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar/>
    <Myinfo/>
  </React.StrictMode>
);

