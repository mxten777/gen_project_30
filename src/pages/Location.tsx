import { motion } from 'framer-motion';

const Location: React.FC = () => {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg break-keep"
          >
            편리한 교통으로 쉽게 찾아오세요
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed break-keep"
          >
            <span className="whitespace-nowrap">송파구 문정동</span>에 위치한 <span className="whitespace-nowrap">광연자동차운전전문학원</span>입니다.{' '}
            전 지역 셔틀버스 운행으로 편리하게 방문하실 수 있습니다.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* 지도 및 기본 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">학원 위치</h2>

            {/* 지도 영역 */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-100 via-sky-100 to-lime-100 dark:from-white/10 dark:to-white/5 h-96 mb-8 shadow-xl flex items-center justify-center border-2 border-white/30 hover:shadow-glow transition-all duration-500">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-4 animate-float">📍</div>
                <div className="text-2xl font-bold text-indigo-700 dark:text-sky-300 mb-2">지도 API 연동 예정</div>
                <div className="text-base text-gray-600 dark:text-gray-300">실제 위치 정보가 표시됩니다</div>
              </div>
            </div>

            {/* 기본 정보 카드 */}
            <div className="space-y-6">
              {[
                { icon: '🏢', title: '주소', content: '서울특별시 송파구 문정동' },
                { icon: '📞', title: '전화', content: '02-481-6000' },
                { icon: '🕒', title: '운영시간', content: '평일 07:30~18:20\n토요일 07:30~16:20\n일요일 휴무' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] transition-all duration-500 will-change-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-sky-300">{item.title}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-200 whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 교통 정보 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">교통편 안내</h2>

            <div className="space-y-6">
              {[
                {
                  icon: '🚌',
                  title: '셔틀버스 운영',
                  color: 'from-primary-500 to-primary-600',
                  items: [
                    '전 지역 셔틀버스 운행 (신천역, 남한산성역, 개롱역, 방이역 등)',
                    '매시간 30분 간격 출발',
                    '평일 07:30~18:20, 토요일 07:30~16:20',
                    '일요일 및 공휴일 운행 안함'
                  ]
                },
                {
                  icon: '🚇',
                  title: '지하철 이용',
                  color: 'from-secondary-500 to-secondary-600',
                  items: [
                    '8호선 복정역 3번 출구 도보 10분',
                    '8호선 장지역 3번 출구',
                    '5호선 개롱역 1번 출구',
                    '2호선 신천역 8번 출구'
                  ]
                },
                {
                  icon: '🚗',
                  title: '자가용 이용',
                  color: 'from-success-500 to-success-600',
                  items: [
                    '네비게이션: 광연자동차운전전문학원',
                    '주차장 완비 (무료)',
                    '송파IC에서 가까운 거리'
                  ]
                },
                {
                  icon: '🚌',
                  title: '버스 이용',
                  color: 'from-warning-500 to-warning-600',
                  items: [
                    '복정역, 장지역, 개롱역 등에서 도보 연계',
                    '다양한 버스 노선 이용 가능',
                    '학원까지 도보 5-10분 거리'
                  ]
                }
              ].map((transport, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] transition-all duration-500 will-change-transform p-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${transport.color} flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-500`}>
                      {transport.icon}
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-sky-300">{transport.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {transport.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-base text-gray-600 dark:text-gray-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime-500 flex-shrink-0 shadow-glow"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 접근성 정보 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent px-4">편의 시설 및 접근성</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '장애인 편의시설',
                icon: '♿',
                color: 'from-primary-500 to-primary-600',
                items: [
                  '전동 휠체어 접근 가능',
                  '장애인 전용 주차구역',
                  '점자 안내판 설치',
                  '화장실 편의시설 구비'
                ]
              },
              {
                title: '편의시설',
                icon: '🏪',
                color: 'from-secondary-500 to-secondary-600',
                items: [
                  '넓은 주차장 (50대 동시 주차)',
                  '편의점 인근',
                  '은행 ATM 설치',
                  '커피숍 운영'
                ]
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] transition-all duration-500 will-change-transform p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform duration-500`}>
                    {facility.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-700 dark:text-sky-300">{facility.title}</h3>
                </div>
                <ul className="space-y-3">
                  {facility.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base text-gray-600 dark:text-gray-200">
                      <div className="w-2 h-2 rounded-full bg-lime-500 flex-shrink-0 shadow-glow"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24 max-w-4xl mx-auto rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent px-4">
            방문 예약 및 상담 안내
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto">
            방문 전 전화 예약을 권장합니다. 교육 환경을 직접 확인하시고
            맞춤 상담을 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700">
              📞 전화 상담 예약
            </button>
            <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-indigo-700 dark:text-sky-300 border-2 border-white/30 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-offset-2 shadow-lg backdrop-blur-md">
              🗺️ 길찾기
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;