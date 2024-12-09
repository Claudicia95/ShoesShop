//Point d'entrée principal de l'application


import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './pages/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>    
      <Routes>
        < Route path="/" element={<Home/>}/>
      </Routes>      
    </Router>
  </React.StrictMode>
)