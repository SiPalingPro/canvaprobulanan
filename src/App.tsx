import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FiturPage from './pages/FiturPage';
import LinkPage from './pages/LinkPage';

function App() {
  useEffect(() => {
    // Dark mode functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      html.classList.add('dark');
    }

    const handleDarkModeToggle = () => {
      html.classList.toggle('dark');
      const theme = html.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    };

    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', handleDarkModeToggle);
    }

    // QRIS Modal functionality
    const qrisModal = document.getElementById('qrisModal');
    const qrisContent = document.getElementById('qrisContent');
    const donateBtn = document.getElementById('donateBtn');
    const closeQrisBtn = document.getElementById('closeQrisBtn');

    const showQrisModal = () => {
      if (qrisModal && qrisContent) {
        qrisModal.classList.remove('hidden');
        setTimeout(() => {
          qrisContent.classList.remove('scale-95', 'opacity-0');
          qrisContent.classList.add('scale-100', 'opacity-100');
        }, 10);
      }
    };

    const hideQrisModal = () => {
      if (qrisModal && qrisContent) {
        qrisContent.classList.remove('scale-100', 'opacity-100');
        qrisContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
          qrisModal.classList.add('hidden');
        }, 300);
      }
    };

    if (donateBtn) {
      donateBtn.addEventListener('click', showQrisModal);
    }

    if (closeQrisBtn) {
      closeQrisBtn.addEventListener('click', hideQrisModal);
    }

    // Close modal when clicking outside
    if (qrisModal) {
      qrisModal.addEventListener('click', (e) => {
        if (e.target === qrisModal) {
          hideQrisModal();
        }
      });
    }

    return () => {
      if (darkModeToggle) {
        darkModeToggle.removeEventListener('click', handleDarkModeToggle);
      }
      if (donateBtn) {
        donateBtn.removeEventListener('click', showQrisModal);
      }
      if (closeQrisBtn) {
        closeQrisBtn.removeEventListener('click', hideQrisModal);
      }
    };
  }, []);

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