import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/about', label: '학원 소개' },
    { path: '/courses', label: '교육 과정' },
    { path: '/process', label: '수강 절차' },
    { path: '/contact', label: '상담 예약' },
    { path: '/location', label: '오시는 길' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled 
        ? 'bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-b border-white/30 dark:border-white/10 shadow-lg' 
        : 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-white/20 dark:border-white/5 shadow-md'
      }
    `}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* 로고 - Premium Gradient */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
              🚗
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:via-sky-700 group-hover:to-lime-700 transition-all duration-300 whitespace-nowrap">
              광연운전전문학원
            </span>
          </Link>

          {/* 데스크톱 네비게이션 - Glass Style */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-5 py-2.5 rounded-full font-medium transition-all duration-300
                  ${location.pathname === item.path
                    ? 'bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-white/60 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-sky-400 hover:shadow-md'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA 버튼 - Desktop */}
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            <span>📞</span>
            <span>상담 예약</span>
          </Link>

          {/* 모바일 메뉴 버튼 - Premium Design */}
          <button
            className="md:hidden p-3 rounded-xl bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/30 dark:border-white/10 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 - Glass Dropdown with Animation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2 rounded-2xl bg-white/90 dark:bg-white/10 backdrop-blur-2xl border-2 border-white/30 dark:border-white/10 shadow-2xl overflow-hidden animate-slideDown">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item, idx) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    px-5 py-3 rounded-xl font-medium transition-all duration-300
                    animate-fadeIn
                    ${location.pathname === item.path
                      ? 'bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-white/60 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-sky-400'
                    }
                  `}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* 모바일 CTA 버튼 */}
              <Link
                to="/contact"
                className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white font-semibold text-center shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: '300ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📞 상담 예약하기
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;