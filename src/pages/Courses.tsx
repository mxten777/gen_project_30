import { motion } from 'framer-motion';

const Courses: React.FC = () => {
  const courses = [
    {
      name: '1종 대형면허',
      target: '프로 운전자, 화물차 운전자',
      duration: '4주 ~ 6주',
      price: '500,000원 ~ 700,000원',
      features: ['실전 운전 집중', '화물차 특성 교육', '안전 운전 전문'],
      icon: '🚛',
      color: 'from-primary-500 to-primary-600',
      popular: true
    },
    {
      name: '2종 보통면허',
      target: '일반 운전자',
      duration: '2주 ~ 4주',
      price: '300,000원 ~ 400,000원',
      features: ['기초부터 실전까지', '도심 운전 집중', '응급 상황 대처'],
      icon: '🚗',
      color: 'from-secondary-500 to-secondary-600',
      popular: false
    },
    {
      name: '장롱면허 재취득',
      target: '면허 취소자, 장기 미운전자',
      duration: '1주 ~ 2주',
      price: '200,000원 ~ 300,000원',
      features: ['집중 교육 프로그램', '법규 업데이트', '빠른 재취득'],
      icon: '🔄',
      color: 'from-success-500 to-success-600',
      popular: false
    },
    {
      name: '도로연수',
      target: '면허 취득 예정자',
      duration: '1일 ~ 3일',
      price: '50,000원 ~ 150,000원',
      features: ['실전 도로 경험', '안전 교육', '시험 대비'],
      icon: '🛣️',
      color: 'from-warning-500 to-warning-600',
      popular: false
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
            맞춤형 운전 교육 과정
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed break-keep"
          >
            각자의 상황과 목표에 맞는 최적의 교육 과정을 선택하세요.{' '}
            저렴한 가격과 친절한 서비스로 최고의 결과를 약속합니다.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">
        {/* 교육 과정 카드 */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 will-change-transform p-8 ${
                course.popular ? 'ring-4 ring-sky-200' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-200 to-lime-200 border border-white/30 text-sm font-semibold text-indigo-700 shadow-lg animate-pulse">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-glow inline-block" />
                    인기 과정
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-500`}>
                  {course.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-sky-300">{course.name}</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">{course.target}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-white/5 dark:to-white/10 border border-white/20">
                  <span className="font-semibold text-gray-700 dark:text-gray-200">교육 기간</span>
                  <span className="text-indigo-600 dark:text-sky-400 font-bold">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-sky-50 to-lime-50 dark:from-white/5 dark:to-white/10 border border-white/20">
                  <span className="font-semibold text-gray-700 dark:text-gray-200">교육 비용</span>
                  <span className="text-lime-600 dark:text-lime-400 font-bold">{course.price}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-xl text-gray-800 dark:text-gray-100">주요 특징</h3>
                <ul className="space-y-3">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-base text-gray-700 dark:text-gray-200">
                      <div className="w-2 h-2 rounded-full bg-lime-500 flex-shrink-0 shadow-glow"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700">
                상담 신청하기
              </button>
            </motion.div>
          ))}
        </div>

        {/* 추가 정보 섹션 */}
        <section className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
          >
            교육 과정 특징
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '저렴한 교육비',
                desc: '합리적인 가격으로 최고 수준의 운전 교육을 제공합니다',
                icon: '💰'
              },
              {
                title: '빠른 면허 취득',
                desc: '최단 기간 내 운전면허 취득을 위한 체계적인 교육 과정',
                icon: '⚡'
              },
              {
                title: '친절한 서비스',
                desc: '수강생 여러분의 교육시간을 친절하며 상냥하게 진행합니다',
                icon: '😊'
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
      </div>
    </div>
  );
};

export default Courses;