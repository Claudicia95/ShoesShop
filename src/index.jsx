import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Utilise directement BrowserRouter
import Home from './pages/Home';
import Navbar from './pages/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Remplace Router par BrowserRouter */}
      <Navbar />    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>      
    </BrowserRouter>
  </React.StrictMode>
);
