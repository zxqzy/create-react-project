import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}