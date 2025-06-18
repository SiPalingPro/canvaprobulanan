import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/assets/Canva Pro.png" alt="Canva Pro Logo" className="w-10 h-10 rounded-full object-cover" loading="eager" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Canva Pro Bulanan
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
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
      <main>
        <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span>Gabung Canva Pro</span>
                <br />
                <span className="text-yellow-300">GRATIS</span>
                <span> tiap bulan!</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Akses semua fitur premium Canva tanpa biaya. Bergabunglah dengan komunitas kreatif kami sekarang!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button 
                  onClick={() => window.location.href = '/tautan/halaman-4'}
                  className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <span>🚀 Gabung Sekarang</span>
                </button>
                
                <button 
                  onClick={() => window.location.href = '/fitur'}
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  <span>✨ Lihat Semua Fitur Canva Pro</span>
                </button>
                
                <button 
                  id="donateBtn" 
                  className="bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <span>💝 Donasi</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section id="info" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  📢 Informasi Penting
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Silakan dipakai dan dibagikan, tapi jangan dijual!</strong>
                  </p>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Saran dari kami:</strong> Silakan bagikan website ini ke teman kalian yang ingin bergabung dengan tim Canva Pro Bulanan daripada harus kalian undang melalui Canva, karena setelah kami membagikan Canva ini maka kami tidak akan membuka Canva lagi dan undangan kalian pasti tertunda sampai kapanpun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Fitur Canva Pro
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Dapatkan akses ke semua fitur premium yang akan mengubah cara Anda berkreasi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Background Remover</h3>
                <p className="text-gray-600 dark:text-gray-400">Hapus background gambar secara otomatis dengan AI canggih</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Templates</h3>
                <p className="text-gray-600 dark:text-gray-400">Akses ribuan template premium untuk semua kebutuhan desain</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🖼️</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Stock Photos</h3>
                <p className="text-gray-600 dark:text-gray-400">Jutaan foto, ilustrasi, dan video berkualitas tinggi</p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Magic Resize</h3>
                <p className="text-gray-600 dark:text-gray-400">Ubah ukuran desain untuk berbagai platform secara otomatis</p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-400">Berkolaborasi dengan tim dalam real-time</p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Video Editor</h3>
                <p className="text-gray-600 dark:text-gray-400">Edit video profesional dengan mudah</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img src="/assets/Canva Pro.png" alt="Canva Pro Logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="text-xl font-bold">Canva Pro Bulanan</h3>
                <p className="text-gray-400">email@sharecanva.pro</p>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://www.canva.com/policies/terms-of-use/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="https://www.canva.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Canva Pro Bulanan. Dibuat dengan ❤️ untuk komunitas kreatif Indonesia.
            </p>
          </div>
        </div>
      </footer>

      {/* QRIS Modal */}
      <div id="qrisModal" className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-95 opacity-0" id="qrisContent">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              💝 Donasi QRIS
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Terima kasih atas dukungan Anda untuk menjaga website ini tetap gratis!
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 mb-6 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-6xl">📱</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">QRIS Code akan ditampilkan di sini</p>
              </div>
            </div>
            
            <button id="closeQrisBtn" className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              <span>Tutup</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;