import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/',             label: '홈' },
  { path: '/about',        label: '학원 소개' },
  { path: '/courses',      label: '교육 과정' },
  { path: '/process',      label: '수강 절차' },
  { path: '/registration', label: '온라인 신청' },
  { path: '/contact',      label: '상담 예약' },
  { path: '/location',     label: '오시는 길' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between app-header-inner">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow duration-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v6a2 2 0 01-2 2M5 17h2m10 0h2M9 17a2 2 0 104 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white tracking-tight whitespace-nowrap">
              광연운전전문학원
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-navy-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/[0.06]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            상담 예약
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-300"
            aria-label="메뉴"
          >
            {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="pb-6 pt-2 space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-500/10 text-brand-300 border border-brand-500/20'
                          : 'text-navy-300 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-3">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full text-center text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    상담 예약하기
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
