import { motion } from 'framer-motion';

const Courses: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section data-has-hero className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-sky-600 to-lime-500">
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
            운전연수안내
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed break-keep"
          >
            운전면허는 취득하셨는데, 운전을 하지 못하십니까? 저희 "광연자동차운전전문학원" 에서 배우세요.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* 운전연수안내 소개 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-4xl mx-auto">
            저희 노련한 강사님이 친절하고 안전하게 지도하여 안전하고 훌륭한 운전자가 되도록 교육해 드릴것을 약속합니다.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-4xl mx-auto mt-4">
            저희 학원에서는 (강사교육)을 이수하신 전문강사진(강사자격증 소지자)으로 체계적이고 효율적으로 교육을 실시하고있습니다.
          </p>
        </motion.div>

        {/* 교육시간 */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-indigo-700 dark:text-sky-300"
          >
            교육시간
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 text-center mobile-card-spacing"
          >
            <p className="text-lg text-gray-700 dark:text-gray-200">
              08:30 ~ 19:20까지 시내운전연수교육(주차교육포함)
            </p>
          </motion.div>
        </section>

        {/* 보통반 교육 과정 */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-indigo-700 dark:text-sky-300"
          >
            보통반 교육 과정
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">1️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">1일 - 차량 기본조작 요령 숙지</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                넓고 안전한 공간에서 기본조작 숙지<br/>
                ( 운전자세 / 명칭과 기능 설명 / 출발 / 제동 / 조향 / 기어변속 / 좌,우회전 / U턴 / 차선맞추기 ) 반복 연습
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">2️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">2일 - 안전 주행 방어 운전</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                넓고 안전한 도로에서 주행 연습<br/>
                ( 좌,우회전 / 유턴 / 거리감 / 속도감 / 차선 맞추기 / 신호등식별 / 표지판식별 / 차간거리 / 코너링 )
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">3️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">3일 - 고속주행 시내주행</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                간선도로 차선변경 / 고속화 도로 차선변경 / 시내주행 / 양보운전 / 교차로 / 엉키는 병목구간숙지<br/>
                (신호등 식별 / 표지판 식별 / 차선변경 / 좌회전/ 우회전 /U턴 ) 주행
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">4️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">4일 - 이면도로 시내주행</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                시내주행 / 이면도로<br/>
                ( 비보호 좌회전 / 신호등없는 교차로 통행 ) 주행
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 md:col-span-2 lg:col-span-1"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">5️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">5일 - 주차 복잡한 시내주행</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                골목길 / 후진주차 ( T자주차 ) / 전진주차 / 일렬주차 ( 평행주차 ) 연습 / 복잡한 도로 주행
              </p>
            </motion.div>
          </div>
        </section>

        {/* 주말반 */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-indigo-700 dark:text-sky-300"
          >
            주말반
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 text-center"
          >
            <p className="text-lg text-gray-700 dark:text-gray-200">
              토요일 2시간x 2 , 일요일 2시간x 2 ( 2주에 걸쳐 완성)
            </p>
          </motion.div>
        </section>

        {/* RV차, 중형차 교육 */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-indigo-700 dark:text-sky-300"
          >
            RV차, 중형차 교육 (08:30 ~ 20:30 방문교육) 시내연수(주차교육포함)
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">1️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">1일 - 차량 기본조작 요령 숙지</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                넓고 안전한 공간에서 기본조작 숙지<br/>
                ( 운전자세 / 명칭과 기능 설명 / 출발 / 제동 / 조향 / 기어변속 / 좌,우회전 / U턴 / 차선맞추기 ) 반복 연습
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">2️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">2일 - 안전 주행 방어 운전</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                넓고 안전한 도로에서 주행 연습<br/>
                ( 좌,우회전 / 유턴 / 거리감 / 속도감 / 차선 맞추기 / 신호등식별 / 표지판식별 / 차간거리 / 코너링 )
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">3️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">3일 - 고속주행 시내주행</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                간선도로 차선변경 / 고속화 도로 차선변경 / 시내주행 / 양보운전 / 교차로 / 엉키는 병목구간숙지<br/>
                (신호등 식별 / 표지판 식별 / 차선변경 / 좌회전/ 우회전 /U턴 ) 주행
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">4️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">4일 - 이면도로 시내주행</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                시내주행 / 이면도로<br/>
                ( 비보호 좌회전 / 신호등없는 교차로 통행 ) 주행
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 md:col-span-2 lg:col-span-1"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">5️⃣</div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">5일 - 주차 복잡한 시내주행</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                골목길 / 후진주차 ( T자주차 ) / 전진주차 / 일렬주차 ( 평행주차 ) 연습 / 복잡한 도로 주행
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 text-center mt-8"
          >
            <p className="text-lg text-gray-700 dark:text-gray-200">
              주말반: 토요일 2시간x 2 , 일요일 2시간x 2 ( 2주에 걸쳐 완성)
            </p>
          </motion.div>
        </section>

        {/* 추가 정보 */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-indigo-700 dark:text-sky-300"
          >
            추가 교육 및 안전 보장
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-2xl shadow-lg">
                  ⚙️
                </div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">추가 교육</h4>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 mt-1">•</span>
                  <span>전차종 파워핸들로 교육</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 mt-1">•</span>
                  <span>추가 교육 필요시 (야간운전 / 자차 / 미흡한 부분)는 필요한 시간만큼 연수가능</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-2xl shadow-lg">
                  🛡️
                </div>
                <h4 className="text-xl font-bold text-indigo-700 dark:text-sky-300">안전 보장</h4>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 mt-1">•</span>
                  <span>본원의 교육용 전차량은 안전한 보험에 가입되어 있으며, 안전장치가 완벽하게 장착되어 있으므로 안심하시고 시내연수교육을 받으시면 됩니다.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-500 mt-1">•</span>
                  <span>또한 혹시라도 있을지 모르는 연수교육중의 어떠한 사고에도 본원에서 100%책임하에 교육을 하며, 경험많은 강사님의 교육으로 모든 연수생 여러분의 안전에 최대한 심혈을 기울이고 있습니다.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;