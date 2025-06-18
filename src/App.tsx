import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FiturPage from './pages/FiturPage';
import LinkPage from './pages/LinkPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fitur" element={<FiturPage />} />
        <Route path="/tautan/halaman-4" element={<LinkPage />} />
        <Route path="/tautan/halaman-4.html" element={<LinkPage />} />
      </Routes>
    </Router>
  );
}

export default App;