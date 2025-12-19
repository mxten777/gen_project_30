import { motion } from 'framer-motion';

const About: React.FC = () => {
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
            <span className="whitespace-nowrap">광연자동차운전전문학원</span>을 소개합니다
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed break-keep"
          >
            저희 운전학원의 모토는{' '}
            <span className="font-bold whitespace-nowrap">"빠르게, 저렴하게, 친절하게"</span> 입니다.{' '}
            최고 수준의 운전 교육 서비스로 여러분의 운전면허 취득을 지원합니다.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* 학원 연혁 */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
          >
            학원 연혁
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2010년', desc: '광연자동차운전전문학원 설립', icon: '🚀' },
                { year: '2015년', desc: '도로교통공단 지정 교육 기관 인증', icon: '🏆' },
                { year: '2020년', desc: '최신 교육 시설 및 차량 확충', icon: '🏢' },
                { year: '2024년', desc: '프리미엄 운전 교육 서비스 제공', icon: '⭐' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-8 p-8 rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 will-change-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-lime-400 flex items-center justify-center text-2xl shadow-lg">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="text-2xl font-bold text-indigo-700 dark:text-sky-300 mb-2">{item.year}</div>
                    <div className="text-lg text-gray-700 dark:text-gray-200">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 교육 철학 */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent px-4"
          >
            교육 철학
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-100 via-sky-100 to-lime-100 dark:from-white/10 dark:to-white/5 border-2 border-white/30 shadow-xl backdrop-blur-xl p-12 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 mobile-card-spacing"
          >
            <div className="text-center mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-6 animate-float">🎯</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-700 dark:text-sky-300 mb-6 break-keep">"빠르게, 저렴하게, 친절하게"</h3>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-200 text-center max-w-3xl mx-auto break-keep">
              저희 운전학원의 모토는{' '}
              <span className="font-bold text-indigo-600 dark:text-sky-400 whitespace-nowrap">"빠르게, 저렴하게, 친절하게"</span> 입니다.{' '}
              <span className="font-semibold">빠르게</span>란 운전면허취득기간을 최단기간으로 단축시키는 노력을 하고있으며,{' '}
              <span className="font-semibold">저렴하게</span>란 교육수강비를 낮게 책정하여 많은 분들이 교육을 받는데에 부담이 없도록 노력하고 있으며,{' '}
              <span className="font-semibold">친절하게</span>란 수강생여러분의교육시간을 친절하며 상냥하게 하여 좀 더 효율적인 교육성과를 위하여 노력하고 있습니다.
              <br /><br />
              체계적 실무이론과 풍부한 교수 경험을 두루 갖춘 엘리트 강사진으로 편성되어 있어 수강을 원하시는 여러분의 눈높이에 맞추어 친절하고 편안함과 즐거움 속에서 교육지도가 이루어지고 있어 100% 가까운 높은 합격률을 자랑하고 있습니다.
            </p>
          </motion.div>
        </section>

        {/* 강사진 소개 */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent px-4"
          >
            엘리트 강사진
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-100 via-sky-100 to-lime-100 dark:from-white/10 dark:to-white/5 border-2 border-white/30 shadow-xl backdrop-blur-xl p-12 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 mobile-card-spacing"
          >
            <div className="text-center mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-6 animate-float">👨‍🏫</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-700 dark:text-sky-300 mb-6 break-keep">체계적 실무이론과 풍부한 교수 경험</h3>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-200 text-center max-w-3xl mx-auto break-keep">
              체계적 실무이론과 풍부한 교수 경험을 두루 갖춘 엘리트 강사진으로 편성되어 있어 수강을 원하시는 여러분의 눈높이에 맞추어 친절하고 편안함과 즐거움 속에서 교육지도가 이루어지고 있어 100% 가까운 높은 합격률을 자랑하고 있습니다.
            </p>
          </motion.div>
        </section>

        {/* 교육 환경 */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent px-4"
          >
            최첨단 교육 환경
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '넓고 쾌적한 실습장', desc: '5,000여평의 넓은 실습 공간', icon: '🏞️' },
              { title: '우수한 강사 확보', desc: '경험이 풍부한 전문 강사진', icon: '👨‍🏫' },
              { title: '친절교육 실시', desc: '친절하고 상냥한 교육 서비스', icon: '🤝' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 will-change-transform cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-100 via-sky-100 to-lime-100 dark:from-white/10 dark:to-white/5 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                    <div className="text-2xl font-bold text-indigo-700 dark:text-sky-300 mb-2">{item.title}</div>
                    <div className="text-base text-gray-600 dark:text-gray-300">{item.desc}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 학원 정보 */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent px-4"
          >
            학원 정보
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-100 via-sky-100 to-lime-100 dark:from-white/10 dark:to-white/5 border-2 border-white/30 shadow-xl backdrop-blur-xl p-12 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 mobile-card-spacing"
          >
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 dark:text-sky-300 mb-2">학원명</h3>
                <p className="text-lg text-gray-700 dark:text-gray-200">광연 자동차운전 전문학원</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 dark:text-sky-300 mb-2">주소</h3>
                <p className="text-lg text-gray-700 dark:text-gray-200">서울시 강남구 헌릉로 733번(세공동)</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 인증 정보 */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent px-4"
          >
            공식 인증 및 지정
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '도로교통공단 지정', desc: '공식 교육 기관 인증', icon: '🏆' },
              { title: '경기도 운전면허시험장 제휴', desc: '공식 제휴 기관', icon: '🤝' },
              { title: 'ISO 9001 품질 인증', desc: '국제 품질 인증 획득', icon: '⭐' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 will-change-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>{cert.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-sky-300">{cert.title}</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;