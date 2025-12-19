import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: '/', label: '홈', icon: '🏠' },
    { path: '/about', label: '학원 소개', icon: '🏫' },
    { path: '/courses', label: '교육 과정', icon: '📚' },
    { path: '/process', label: '수강 절차', icon: '📋' },
    { path: '/registration', label: '온라인 신청', icon: '💻' },
    { path: '/contact', label: '상담 예약', icon: '📞' },
    { path: '/location', label: '오시는 길', icon: '🗺️' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-700
        ${scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-3xl border-b border-white/40 dark:border-white/20 shadow-2xl shadow-indigo-500/10'
          : 'bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-white/30 dark:border-white/10 shadow-xl shadow-indigo-500/5'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* 로고 - Ultra Premium Design */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group relative"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-3xl sm:text-4xl filter drop-shadow-lg">
                🚗
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </motion.div>
            <motion.span
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:via-sky-700 group-hover:to-lime-700 transition-all duration-500 whitespace-nowrap relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              광연운전전문학원
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.span>
          </Link>

          {/* 데스크톱 네비게이션 - Premium Glass Style */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className={`
                    relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 group overflow-hidden
                    ${location.pathname === item.path
                      ? 'bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl shadow-indigo-500/40 scale-105'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-white/70 dark:hover:bg-white/15 hover:text-indigo-600 dark:hover:text-sky-400 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-105'
                    }
                  `}
                >
                  <span className="flex items-center gap-2 relative z-10">
                    <span className="text-lg group-hover:animate-bounce">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  {location.pathname !== item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA 버튼 - Ultra Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white font-bold shadow-2xl hover:shadow-glow hover:scale-110 transition-all duration-500 relative overflow-hidden group"
            >
              <motion.span
                className="text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                📞
              </motion.span>
              <span className="relative z-10">상담 예약</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-sky-400 to-lime-300 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </Link>
          </motion.div>

          {/* 모바일 메뉴 버튼 - Premium Design */}
          <motion.button
            className="md:hidden relative p-3 rounded-2xl bg-white/70 dark:bg-white/15 hover:bg-white/90 dark:hover:bg-white/25 border border-white/40 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg className="w-7 h-7 text-gray-700 dark:text-gray-200 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>

        {/* 모바일 메뉴 - Ultra Premium Glass Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute left-4 right-4 top-full mt-3 rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-3xl border-2 border-white/50 dark:border-white/30 shadow-2xl shadow-indigo-500/20 overflow-hidden"
            >
              <nav className="flex flex-col p-6 space-y-3">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={item.path}
                      className={`
                        flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 group relative overflow-hidden
                        ${location.pathname === item.path
                          ? 'bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl shadow-indigo-500/40'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-white/70 dark:hover:bg-white/15 hover:text-indigo-600 dark:hover:text-sky-400 hover:shadow-lg hover:scale-105'
                        }
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl group-hover:animate-pulse">{item.icon}</span>
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </motion.div>
                ))}

                {/* 모바일 CTA 버튼 - Premium */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <Link
                    to="/contact"
                    className="mt-6 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white font-bold text-center shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 relative overflow-hidden group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.span
                      className="text-xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      📞
                    </motion.span>
                    <span className="relative z-10">상담 예약하기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;