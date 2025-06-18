import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LinkPage: React.FC = () => {
  const navigate = useNavigate();

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

    return () => {
      if (darkModeToggle) {
        darkModeToggle.removeEventListener('click', handleDarkModeToggle);
      }
    };
  }, []);

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/assets/Canva Pro.png" alt="Canva Pro Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Link Canva Pro 2025
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/')}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                ← Kembali ke Beranda
              </button>
              
              <button id="darkModeToggle" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg id="sunIcon" className="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                </svg>
                <svg id="moonIcon" className="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 716.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/Canva Pro.png" alt="Canva Pro Logo" className="w-16 h-16 rounded-full object-cover mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Link Canva Pro 2025
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-8">
            Pilih bulan untuk bergabung dengan tim Canva Pro gratis
          </p>
        </div>
      </section>

      {/* Year Navigation */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm">
              📅 2022
            </span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm">
              📅 2023
            </span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm">
              📅 2024
            </span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
              📅 2025 (Aktif)
            </span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm">
              📅 2026
            </span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm">
              📅 2027
            </span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm">
              📅 2028
            </span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm">
              📅 2029
            </span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm">
              📅 2030
            </span>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Januari 2025 - Kadaluarsa */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Januari 2025
                </h3>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                  Kadaluarsa
                </span>
              </div>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Link sudah tidak aktif
              </div>
            </div>

            {/* Februari 2025 - Kadaluarsa */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Februari 2025
                </h3>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                  Kadaluarsa
                </span>
              </div>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Link sudah tidak aktif
              </div>
            </div>

            {/* Maret 2025 - Kadaluarsa */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Maret 2025
                </h3>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                  Kadaluarsa
                </span>
              </div>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Link sudah tidak aktif
              </div>
            </div>

            {/* April 2025 - Kadaluarsa */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  April 2025
                </h3>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                  Kadaluarsa
                </span>
              </div>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Link sudah tidak aktif
              </div>
            </div>

            {/* Mei 2025 - Kadaluarsa */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Mei 2025
                </h3>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                  Kadaluarsa
                </span>
              </div>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Link sudah tidak aktif
              </div>
            </div>

            {/* Juni 2025 - Kadaluarsa */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-gray-300 dark:border-gray-600 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Juni 2025
                </h3>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                  Kadaluarsa
                </span>
              </div>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Link sudah tidak aktif
              </div>
            </div>

            {/* Juli 2025 - Aktif */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Juli 2025
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Aktif
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button 
                    key={num}
                    onClick={() => openLink('https://canva.com/join/team-link-' + num)}
                    className="bg-purple-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                  >
                    Link {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Agustus 2025 - Aktif */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Agustus 2025
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Aktif
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button 
                    key={num}
                    onClick={() => openLink('https://canva.com/join/team-link-' + num)}
                    className="bg-purple-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                  >
                    Link {num}
                  </button>
                ))}
              </div>
            </div>

            {/* September 2025 - Aktif */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  September 2025
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Aktif
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button 
                    key={num}
                    onClick={() => openLink('https://canva.com/join/team-link-' + num)}
                    className="bg-purple-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                  >
                    Link {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Oktober 2025 - Aktif */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Oktober 2025
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Aktif
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button 
                    key={num}
                    onClick={() => openLink('https://canva.com/join/team-link-' + num)}
                    className="bg-purple-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                  >
                    Link {num}
                  </button>
                ))}
              </div>
            </div>

            {/* November 2025 - Aktif */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  November 2025
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Aktif
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button 
                    key={num}
                    onClick={() => openLink('https://canva.com/join/team-link-' + num)}
                    className="bg-purple-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                  >
                    Link {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Desember 2025 - Aktif */}
            <div className="bg-gradient-to-br from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Desember 2025
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Aktif
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button 
                    key={num}
                    onClick={() => openLink('https://canva.com/join/team-link-' + num)}
                    className="bg-purple-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                  >
                    Link {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <img src="/assets/Canva Pro.png" alt="Canva Pro Logo" className="w-12 h-12 rounded-full object-cover mr-4" />
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
                Cara Bergabung
              </h3>
            </div>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <p className="text-gray-700 dark:text-gray-300">Pilih bulan yang tersedia (yang berstatus "Aktif")</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <p className="text-gray-700 dark:text-gray-300">Klik salah satu dari 10 link yang tersedia pada bulan tersebut</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <p className="text-gray-700 dark:text-gray-300">Ikuti instruksi di halaman Canva untuk bergabung dengan tim</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <p className="text-gray-700 dark:text-gray-300">Nikmati semua fitur Canva Pro secara gratis!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkPage;