import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FiturPage: React.FC = () => {
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

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/assets/Canva Pro.png" alt="Canva Pro Logo" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Fitur Canva Pro
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
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <svg className="w-12 h-12 inline-block mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Fitur Canva Pro
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Jelajahi semua fitur premium yang akan mengubah cara Anda berkreasi dan mendesain
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Background Remover</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Hapus background gambar secara otomatis dengan teknologi AI canggih. Sempurna untuk foto produk, portrait, dan desain profesional.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ AI-powered background removal</li>
                <li>✓ Hasil berkualitas tinggi</li>
                <li>✓ Proses cepat dan mudah</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Templates</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Akses ribuan template premium untuk presentasi, poster, social media, dan berbagai kebutuhan desain lainnya.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ 100,000+ template premium</li>
                <li>✓ Kategori lengkap</li>
                <li>✓ Update template terbaru</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🖼️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Stock Photos</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Jutaan foto, ilustrasi, video, dan audio berkualitas tinggi dari Getty Images, Shutterstock, dan koleksi premium lainnya.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ 100+ juta aset premium</li>
                <li>✓ Resolusi tinggi</li>
                <li>✓ Bebas royalti</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Magic Resize</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Ubah ukuran desain untuk berbagai platform media sosial dan format dengan sekali klik. Hemat waktu dan tenaga.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ Resize otomatis</li>
                <li>✓ 100+ format tersedia</li>
                <li>✓ Optimasi untuk setiap platform</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Team Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Berkolaborasi dengan tim dalam real-time. Berbagi desain, berikan feedback, dan kelola proyek bersama dengan mudah.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ Real-time collaboration</li>
                <li>✓ Comment & feedback</li>
                <li>✓ Team management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Video Editor</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Edit video profesional dengan mudah. Tambahkan musik, efek, transisi, dan teks untuk membuat video yang menakjubkan.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ Video editing tools</li>
                <li>✓ Premium music library</li>
                <li>✓ Export HD quality</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Brand Kit</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Simpan logo, warna, dan font brand Anda. Pastikan konsistensi brand di semua desain dengan mudah.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ Brand colors & fonts</li>
                <li>✓ Logo storage</li>
                <li>✓ Brand consistency</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Planner</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Rencanakan dan jadwalkan konten media sosial Anda. Kelola semua platform dari satu tempat.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ Social media scheduling</li>
                <li>✓ Content calendar</li>
                <li>✓ Multi-platform posting</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">☁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Storage</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Penyimpanan cloud 1TB untuk semua desain dan aset Anda. Akses dari mana saja, kapan saja.</p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>✓ 1TB cloud storage</li>
                <li>✓ Sync across devices</li>
                <li>✓ Backup otomatis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Menggunakan Semua Fitur Ini?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Bergabunglah dengan ribuan kreator yang sudah merasakan manfaat Canva Pro
          </p>
          <button 
            onClick={() => navigate('/')}
            className="inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🚀 Gabung Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default FiturPage;