import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      {/* Hero Section - Premium with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-sky-400 to-lime-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-lime-400 to-indigo-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight max-w-5xl mx-auto break-keep px-4"
          >
            운전은 <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">안전</span>,{' '}
            합격은 <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">결과</span>로 증명합니다
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed break-keep px-4"
          >
            <span className="whitespace-nowrap">광연자동차운전전문학원</span> - 국내 최고 수준의 운전 교육으로 안전 운전과 합격을 동시에 이루세요
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <button className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700">
              📞 상담 예약하기
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2">
              📚 교육 과정 보기
            </button>
          </motion.div>
        </div>
      </section>

      {/* Key Strengths - Glass Cards */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 px-4"
          >
            왜 광연자동차운전전문학원을 선택해야 할까요?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: '전문 강사', desc: '20년 이상 경력의 전문 강사진', icon: '👨‍🏫' },
              { title: '최신 코스', desc: '개정된 교통 법규 반영 교육', icon: '📚' },
              { title: '높은 합격률', desc: '95% 이상의 합격률 달성', icon: '🎯' },
              { title: '최신 차량', desc: '안전하고 최신 교육 차량', icon: '🚗' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 text-center hover:scale-[1.03] hover:shadow-glow hover:-translate-y-2 transition-all duration-500 will-change-transform"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-700 dark:text-sky-300">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course CTA - Gradient Cards */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 px-4"
          >
            대표 교육 과정
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: '1종 대형면허', desc: '프로 운전자를 위한 전문 과정', icon: '🚛', gradient: 'from-indigo-100 via-sky-100 to-lime-100' },
              { name: '2종 보통면허', desc: '일반 운전면허 취득 과정', icon: '🚗', gradient: 'from-sky-100 via-lime-100 to-indigo-100' },
              { name: '장롱면허 재취득', desc: '빠르고 효율적인 재취득 교육', icon: '🔄', gradient: 'from-lime-100 via-indigo-100 to-sky-100' }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl bg-gradient-to-br ${course.gradient} dark:from-white/10 dark:to-white/5 border-2 border-white/30 shadow-xl p-8 text-center hover:scale-[1.03] hover:shadow-glow transition-all duration-500 cursor-pointer will-change-transform`}
              >
                <div className="text-5xl sm:text-6xl mb-6">{course.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700 dark:text-sky-200 px-2">{course.name}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-200 mb-6 px-2">{course.desc}</p>
                <button className="px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-lg hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2">
                  자세히 보기
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics - Glass Dark */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 text-white px-4"
          >
            신뢰할 수 있는 실적
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '95%', label: '합격률', desc: '높은 합격률로 검증된 교육' },
              { number: '20+', label: '년 경력', desc: '20년 이상의 전문 교육 경험' },
              { number: '5000+', label: '졸업생', desc: '만족한 졸업생들의 선택' },
              { number: '100%', label: '안전 교육', desc: '안전 운전을 최우선으로' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:bg-white/20 hover:scale-[1.03] hover:shadow-glow transition-all duration-500 will-change-transform"
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-lg sm:text-xl font-semibold mb-2 text-white">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Premium Glass */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 sm:p-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 px-4">
              지금 바로 <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">운전면허</span> 도전하세요
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto px-4">
              전문 강사진과 최신 교육 시스템으로 안전 운전과 합격을 동시에 이루세요.
              무료 상담을 통해 맞춤 교육 과정을 안내받으실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700">
                📞 무료 상담 예약
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl bg-white/80 dark:bg-white/10 border-2 border-indigo-200 dark:border-white/20 hover:border-indigo-300 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 shadow-lg">
                📍 오시는 길
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;