import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupVariant, setPopupVariant] = useState<'A' | 'B'>('A');
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    // A/B 테스트: 랜덤으로 팝업 변형 선택
    setPopupVariant(Math.random() > 0.5 ? 'A' : 'B');

    // 팝업 타이밍 설정 (조정 가능)
    const POPUP_DELAY = 5000; // 5초로 변경 (원래 3초)

    // 페이지 로드 후 설정된 시간 뒤 팝업 표시
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, POPUP_DELAY);

    // Exit-intent 팝업 비활성화 (원하지 않으면 주석 처리)
    // const handleMouseLeave = (e: MouseEvent) => {
    //   if (e.clientY < 0) {
    //     setShowPopup(true);
    //   }
    // };

    // document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      // document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // 팝업 자동 닫기 타이머
  useEffect(() => {
    if (showPopup) {
      setCountdown(20); // 카운트다운 초기화
      const autoCloseTimer = setTimeout(() => {
        setShowPopup(false);
      }, 20000); // 20초 후 자동 닫기

      // 카운트다운 업데이트 (setTimeout 체인으로 성능 최적화)
      let countdownTimer: number;
      const updateCountdown = () => {
        setCountdown((prev) => {
          if (prev > 1) {
            countdownTimer = window.setTimeout(updateCountdown, 1000);
            return prev - 1;
          }
          return 0;
        });
      };
      updateCountdown();

      return () => {
        clearTimeout(autoCloseTimer);
        if (countdownTimer) clearTimeout(countdownTimer);
      };
    }
  }, [showPopup]);

  // 모바일 터치 최적화
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // 모바일 터치 피드백 강화
      const handleTouchStart = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('button, a, [role="button"]')) {
          target.style.transform = 'scale(0.98)';
        }
      };

      const handleTouchEnd = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('button, a, [role="button"]')) {
          target.style.transform = '';
        }
      };

      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Animated Background Blobs - Mobile Optimized */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-full blur-3xl animate-mobile-float" />
          <div className="absolute bottom-10 right-5 sm:right-10 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-sky-400 to-lime-400 rounded-full blur-3xl animate-mobile-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-lime-400 to-indigo-400 rounded-full blur-3xl animate-mobile-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto break-keep"
          >
            운전은 <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">안전</span>,{' '}
            합격은 <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">결과</span>로 증명합니다
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-200 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed break-keep mobile-text-scale"
          >
            <span className="whitespace-nowrap">광연자동차운전전문학원</span> - 국내 최고 수준의 운전 교육으로 안전 운전과 합격을 동시에 이루세요
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-2xl mx-auto"
          >
            <motion.button
              className="flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden mobile-button-touch touch-feedback"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>📞</span>
              <span>상담 예약하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700" />
            </motion.button>
            <motion.button
              className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 mobile-button-touch touch-feedback"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center gap-2">
                <span>📚</span>
                <span>교육 과정 보기</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Key Strengths - Ultra Premium Glass Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
          >
            왜 광연자동차운전전문학원을 선택해야 할까요?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: '전문 강사', desc: '20년 이상 경력의 전문 강사진', icon: '👨‍🏫', color: 'from-indigo-500 to-indigo-600' },
              { title: '최신 코스', desc: '개정된 교통 법규 반영 교육', icon: '📚', color: 'from-sky-500 to-sky-600' },
              { title: '높은 합격률', desc: '95% 이상의 합격률 달성', icon: '🎯', color: 'from-lime-500 to-lime-600' },
              { title: '최신 차량', desc: '안전하고 최신 교육 차량', icon: '🚗', color: 'from-indigo-500 to-sky-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: window.innerWidth >= 768 ? 1.05 : 1.02,
                  y: window.innerWidth >= 768 ? -8 : -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-6 sm:p-8 text-center hover:shadow-glow transition-all duration-500 will-change-transform overflow-hidden mobile-card-spacing touch-feedback"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-60 animate-ping" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-sky-400 to-lime-400 rounded-full opacity-0 group-hover:opacity-60 animate-ping" style={{ animationDelay: '0.5s' }} />

                <motion.div
                  className="text-5xl mb-4 relative z-10"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold mb-3 text-indigo-700 dark:text-sky-300 relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-600 dark:text-gray-300 relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  {item.desc}
                </motion.p>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course CTA - Ultra Premium Interactive Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
          >
            대표 교육 과정
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: '1종 대형면허', desc: '프로 운전자를 위한 전문 과정', icon: '🚛', gradient: 'from-indigo-100 via-sky-100 to-lime-100', hoverGradient: 'from-indigo-500 to-sky-500' },
              { name: '2종 보통면허', desc: '일반 운전면허 취득 과정', icon: '🚗', gradient: 'from-sky-100 via-lime-100 to-indigo-100', hoverGradient: 'from-sky-500 to-lime-500' },
              { name: '장롱면허 재취득', desc: '빠르고 효율적인 재취득 교육', icon: '🔄', gradient: 'from-lime-100 via-indigo-100 to-sky-100', hoverGradient: 'from-lime-500 to-indigo-500' }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: window.innerWidth >= 768 ? 1.05 : 1.02,
                  y: window.innerWidth >= 768 ? -10 : -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`group relative rounded-2xl bg-gradient-to-br ${course.gradient} dark:from-white/10 dark:to-white/5 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-6 sm:p-8 text-center hover:shadow-glow transition-all duration-500 cursor-pointer will-change-transform overflow-hidden mobile-card-spacing touch-feedback`}
              >
                {/* Dynamic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full bg-white/90 dark:bg-black/90 rounded-2xl" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-70 animate-bounce" />
                <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-r from-sky-400 to-lime-400 rounded-full opacity-0 group-hover:opacity-70 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-gradient-to-r from-lime-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-70 animate-bounce" style={{ animationDelay: '0.4s' }} />

                <motion.div
                  className="text-5xl sm:text-6xl mb-6 relative z-10"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {course.icon}
                </motion.div>
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700 dark:text-sky-200 px-2 relative z-10"
                  whileHover={{ scale: 1.05, color: '#ffffff' }}
                >
                  {course.name}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-700 dark:text-gray-200 mb-6 px-2 relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  {course.desc}
                </motion.p>
                <motion.button
                  className="px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:scale-[1.05] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 relative z-10 overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">자세히 보기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full hover:translate-x-full transition-transform duration-700" />
                </motion.button>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics - Ultra Premium with Counter Animation */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            신뢰할 수 있는 <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">실적</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '95%', label: '합격률', desc: '높은 합격률로 검증된 교육', icon: '🎯' },
              { number: '20+', label: '년 경력', desc: '20년 이상의 전문 교육 경험', icon: '🏆' },
              { number: '5000+', label: '졸업생', desc: '만족한 졸업생들의 선택', icon: '👥' },
              { number: '100%', label: '안전 교육', desc: '안전 운전을 최우선으로', icon: '🛡️' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: window.innerWidth >= 768 ? 1.05 : 1.02,
                  y: window.innerWidth >= 768 ? -5 : -2,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative text-center p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:bg-white/20 hover:shadow-glow transition-all duration-500 will-change-transform overflow-hidden mobile-card-spacing touch-feedback"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full bg-white/5 rounded-2xl" />
                </div>

                {/* Floating Icon */}
                <motion.div
                  className="text-3xl mb-4"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.6 }
                  }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  className="text-4xl sm:text-5xl font-bold mb-2 text-white relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  className="text-lg sm:text-xl font-semibold mb-2 text-white relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.div>
                <motion.div
                  className="text-sm text-white/80 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                >
                  {stat.desc}
                </motion.div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra Premium Glass with Enhanced Effects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-lime-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-sky-500/20 via-lime-400/20 to-indigo-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-3xl bg-white/80 dark:bg-white/10 border-2 border-white/40 shadow-2xl backdrop-blur-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden group mobile-card-spacing"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
              <div className="w-full h-full bg-white/95 dark:bg-black/95 rounded-3xl" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-6 left-6 w-4 h-4 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-60 animate-ping" />
            <div className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-sky-400 to-lime-400 rounded-full opacity-0 group-hover:opacity-60 animate-ping" style={{ animationDelay: '0.3s' }} />
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-r from-lime-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-60 animate-ping" style={{ animationDelay: '0.6s' }} />

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              지금 바로 <motion.span
                className="bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                운전면허
              </motion.span> 도전하세요
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              전문 강사진과 최신 교육 시스템으로 안전 운전과 합격을 동시에 이루세요.
              <br />
              <span className="font-semibold text-indigo-600 dark:text-sky-400">
                무료 상담을 통해 맞춤 교육 과정을 안내받으실 수 있습니다.
              </span>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="text-xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  📞
                </motion.span>
                <span>무료 상담 예약</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700" />
              </motion.button>
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl bg-white/80 dark:bg-white/10 border-2 border-indigo-200 dark:border-white/20 hover:border-indigo-300 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 shadow-lg backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#3b82f6"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <span>📍</span>
                  <span>오시는 길</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Event Popup - Mobile-Optimized Premium Design */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 py-6"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full max-w-sm sm:max-w-md rounded-3xl bg-white/95 dark:bg-black/95 border-2 border-white/40 dark:border-white/20 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] backdrop-blur-2xl p-6 sm:p-8 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-lime-400/5 rounded-3xl" />

            {/* Floating Particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full opacity-30 animate-ping" />
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-sky-400 to-lime-400 rounded-full opacity-30 animate-ping" style={{ animationDelay: '1s' }} />

            <div className="text-center mb-6 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  className="text-4xl sm:text-5xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  🚗
                </motion.div>
                <motion.div
                  className="text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full font-bold shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  {countdown}s 남음
                </motion.div>
              </div>
              <motion.h3
                className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {popupVariant === 'A' ? '무료 상담 이벤트!' : '특별 할인 이벤트!'}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {popupVariant === 'A'
                  ? '지금 상담 예약 시, 첫 수업료 10% 할인 혜택을 드립니다.'
                  : '지금 등록 시, 수강료 15% 할인 + 무료 모의시험 혜택!'}
              </motion.p>
            </div>

            <div className="space-y-4 relative z-10">
              <motion.button
                onClick={() => setShowPopup(false)}
                className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white font-bold shadow-xl hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-base sm:text-lg relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    📞
                  </motion.span>
                  상담 예약하기
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full hover:translate-x-full transition-transform duration-700" />
              </motion.button>

              <motion.div
                className="flex items-start gap-3 text-xs sm:text-sm text-gray-500 bg-gray-50 dark:bg-white/5 p-3 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <input
                  type="checkbox"
                  id="cookie-consent"
                  className="rounded border-2 border-gray-300 mt-0.5 flex-shrink-0 w-4 h-4"
                />
                <label htmlFor="cookie-consent" className="leading-relaxed cursor-pointer">
                  쿠키 사용에 동의합니다 (GDPR 준수)
                </label>
              </motion.div>

              <motion.button
                onClick={() => setShowPopup(false)}
                className="w-full px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 text-sm sm:text-base font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                나중에 하기
              </motion.button>
            </div>

            <motion.div
              className="mt-6 text-center relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-black/50 px-3 py-2 rounded-full inline-block">
                📱 터치하여 닫기 • ESC 키로 닫기 가능
              </p>
            </motion.div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine rounded-3xl" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;