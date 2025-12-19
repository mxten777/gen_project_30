import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '학원 등록',
      desc: '신분증만 있으시면 학원등록 가능합니다. 등록 시 모든 서류 업무를 학원에서 처리해 드립니다.',
      icon: '📝',
      color: 'from-primary-500 to-primary-600'
    },
    {
      step: '02',
      title: '적성검사',
      desc: '학과시험 접수 전에 적성검사를 받아야 합니다. 국가면허시험장이나 지정병원에서 진행됩니다.',
      icon: '🏥',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      step: '03',
      title: '학과시험',
      desc: '컴퓨터 학과시험을 통해 운전면허의 종류와 관리 등 자동차 운전에 필요한 지식을 평가합니다.',
      icon: '📋',
      color: 'from-success-500 to-success-600'
    },
    {
      step: '04',
      title: '기능시험',
      desc: '전문 강사의 지도하에 체계적인 교육을 받은 후 기능시험에 응시합니다.',
      icon: '🚗',
      color: 'from-warning-500 to-warning-600'
    },
    {
      step: '05',
      title: '면허증 발급',
      desc: '모든 시험에 합격하시면 운전면허증이 발급됩니다. 안전 운전자로서의 첫 걸음을 내딛으세요.',
      icon: '🎉',
      color: 'from-primary-500 to-secondary-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-sky-600 to-lime-500">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-lime-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg break-keep"
          >
            쉽고 빠른 운전면허 취듍 과정
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed break-keep"
          >
            체계적인 5단계 교육 시스템으로 누구나 빠르고 저렴하게 운전면허를 취듍할 수 있습니다.{' '}
            친절한 서비스로 처음 운전면허를 취득하시는 분들도 안심하고 교육받으실 수 있습니다.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">
        {/* 수강 절차 타임라인 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
        >
          5단계 교육 시스템
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* 중앙 선 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 via-sky-500 to-lime-500 h-full rounded-full shadow-glow"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* 중앙 아이콘 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-xl border-4 border-white hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-indigo-600">{step.step}</span>
                  </div>
                </div>

                {/* 내용 카드 */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                  <div className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] transition-all duration-500 will-change-transform p-8">
                    <h3 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-sky-300">{step.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 추가 정보 섹션 */}
        <section className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
          >
            교육 지원 시스템
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '셔틀버스 운영',
                desc: '전 지역 셔틀버스 운행으로 편리하게 통학하실 수 있습니다',
                icon: '🚌'
              },
              {
                title: '저렴한 교육비',
                desc: '합리적인 가격으로 최고 수준의 운전 교육을 제공합니다',
                icon: '💰'
              },
              {
                title: '친절한 상담',
                desc: '24시간 상담이 가능하며, 언제나 친절하게 안내해 드립니다',
                icon: '📞'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 will-change-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-sky-300">{item.title}</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24 max-w-4xl mx-auto rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">
            지금 바로 운전면허 도전하세요
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto">
            체계적인 교육 시스템과 전문 강사진으로 안전 운전과 합격을 동시에 이루세요.
            무료 상담을 통해 맞춤 교육 계획을 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700">
              📞 무료 상담 예약
            </button>
            <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-indigo-700 dark:text-sky-300 border-2 border-white/30 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-offset-2 shadow-lg backdrop-blur-md">
              📋 교육 과정 보기
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;