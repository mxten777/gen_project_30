import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 glassmorphism">
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
            셔틀버스안내
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed break-keep"
          >
            셔틀버스 노선 시간표 문의전화 (02) 481-6000<br/>
            평일 07:30~18:20 / 토요일 07:30~16:20분까지 / 일.공휴일 : 셔틀운행안함 / ※ 매시간 30분 출발
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* 셔틀버스 노선 안내 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent"
        >
          셔틀버스 노선 시간표
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 2호차 노선 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 mobile-card-spacing"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-2xl shadow-lg">
                🚌
              </div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-sky-300">2호차 (신천역.잠실아파트 단지)</h3>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
              <div className="flex justify-between">
                <span>30) 학원출발</span>
                <span>40) 레이크팰리스 서문</span>
              </div>
              <div className="flex justify-between">
                <span>41) 갤러리아팰리스 상가앞</span>
                <span>42) 잠실롯데마트 입구</span>
              </div>
              <div className="flex justify-between">
                <span>43) 2호선 잠실역 5번 출구</span>
                <span>44) 잠실YMCA앞</span>
              </div>
              <div className="flex justify-between">
                <span>46) 리센츠APT 남3문 버스정류장</span>
                <span>48) 2호선 신천역 8번 출구</span>
              </div>
              <div className="flex justify-between">
                <span>2호선 신천역 5번 출구</span>
                <span>50) 엘스APT 잠실2동 우체국 앞</span>
              </div>
              <div className="flex justify-between">
                <span>52) 아시아선수촌APT 정문 앞</span>
                <span>54) 성현교회 앞</span>
              </div>
              <div className="flex justify-between">
                <span>55) 잠실등기소 앞</span>
                <span>56) 농협중앙회</span>
              </div>
              <div className="flex justify-between">
                <span>삼전사거리 기아자동차 대리점</span>
                <span>00) 학여울역 1번 출구</span>
              </div>
              <div className="flex justify-between">
                <span>05) 수서역 6번 출구</span>
                <span>10) 학원도착</span>
              </div>
            </div>
          </motion.div>

          {/* 3호차 노선 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 mobile-card-spacing"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center text-2xl shadow-lg">
                🚌
              </div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-sky-300">3호차 (남한산성역,모란역,태평역)</h3>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
              <div className="flex justify-between">
                <span>30) 학원출발</span>
                <span>35) 산성역 기능대 앞</span>
              </div>
              <div className="flex justify-between">
                <span>38) 남한상선 입구(GS주유소 앞)</span>
                <span>40) 을지대 정문</span>
              </div>
              <div className="flex justify-between">
                <span>41) 은행동 베스킨라빈스</span>
                <span>43) 양지동 주민센터 앞</span>
              </div>
              <div className="flex justify-between">
                <span>45) 8호선 남한산성역 3번 출구</span>
                <span>47) 8호선 단대오거리역 7번 출구</span>
              </div>
              <div className="flex justify-between">
                <span>49) 세이브존 정문 앞</span>
                <span>51) 8호선 신흥역 3번 출구</span>
              </div>
              <div className="flex justify-between">
                <span>52) 8호선 수진역 3번 출구</span>
                <span>55) 8호선·분당선 모란역 10번 출구</span>
              </div>
              <div className="flex justify-between">
                <span>58) 수진2동 주민센터 앞</span>
                <span>59) 분당선 태평역 1번 출구</span>
              </div>
              <div className="flex justify-between">
                <span>00) 가나자동차용품점(태평고개)</span>
                <span>03) 분당선 경원대역 1번 출구</span>
              </div>
              <div className="flex justify-between">
                <span>05) 동서울대학(버스정류장)</span>
                <span>06) 명인만두</span>
              </div>
              <div className="flex justify-between">
                <span>08) 8호선 복정역 3번 출구</span>
                <span>10) 학원도착</span>
              </div>
            </div>
          </motion.div>

          {/* 4호차 노선 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 mobile-card-spacing"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                🚌
              </div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-sky-300">4호차 (개롱역,마천동,거여역)</h3>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
              <div className="flex justify-between">
                <span>30) 학원출발</span>
                <span>39) 문정대우푸르지오APT 정문</span>
              </div>
              <div className="flex justify-between">
                <span>41) 삼성레미안APT 정문</span>
                <span>43) 가락극동APT 버스정류정</span>
              </div>
              <div className="flex justify-between">
                <span>45) 5호선 개롱역 1번출구</span>
                <span>46) 송파도서관 건너편</span>
              </div>
              <div className="flex justify-between">
                <span>47) 마천사거리 국민은행건너편 조외과</span>
                <span>48) 세계로약국앞</span>
              </div>
              <div className="flex justify-between">
                <span>49) 우방APT 건너편 버스정류장</span>
                <span>52) 금호어울림APT 건너편 버스정류장</span>
              </div>
              <div className="flex justify-between">
                <span>55) 비호APT 건너편 버스정류장</span>
                <span>57) 5호선 거여역 1번출구</span>
              </div>
              <div className="flex justify-between">
                <span>59) 가락프라자APT 버스정류장</span>
                <span>00) 삼성레미안APT후문 버스정류장</span>
              </div>
              <div className="flex justify-between">
                <span>02) 파인타운1단지 정문 맞은편</span>
                <span>유정유치원</span>
              </div>
              <div className="flex justify-between">
                <span>파인타운2단지 정문앞</span>
                <span>04) 8.9단지 건너편 문현중학교앞</span>
              </div>
              <div className="flex justify-between">
                <span>06) 8호선 장지역 3번출구</span>
                <span>09) 8호선 복정역 3번출구</span>
              </div>
              <div className="flex justify-between">
                <span>10) 학원도착</span>
                <span></span>
              </div>
            </div>
          </motion.div>

          {/* 7호차 노선 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500 mobile-card-spacing"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-2xl shadow-lg">
                🚌
              </div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-sky-300">7호차 (방이역,올림픽공원역,둔촌역)</h3>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
              <div className="flex justify-between">
                <span>30) 학원출발</span>
                <span>40) 근화제약상가앞</span>
              </div>
              <div className="flex justify-between">
                <span>41) 신가초등학교</span>
                <span>43) 방이역1번출구</span>
              </div>
              <div className="flex justify-between">
                <span>45) 올림픽공원역1번출구</span>
                <span>50) 둔촌역4번출구</span>
              </div>
              <div className="flex justify-between">
                <span>52) GS주유소앞</span>
                <span>55) 올림픽공원역3번출구</span>
              </div>
              <div className="flex justify-between">
                <span>56) 벽제갈비도로변</span>
                <span>57) 방이역3번출구</span>
              </div>
              <div className="flex justify-between">
                <span>58) 송이공원입구</span>
                <span>성지아파트앞 버스정류장</span>
              </div>
              <div className="flex justify-between">
                <span>59) 가락아파트90동옆 버스정류장</span>
                <span>00) 가락종합사회복지관앞</span>
              </div>
              <div className="flex justify-between">
                <span>05) 수서역6번출구</span>
                <span>10) 학원도착</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 문의 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center rounded-2xl bg-gradient-to-br from-indigo-100 via-sky-100 to-lime-100 dark:from-white/10 dark:to-white/5 border-2 border-white/30 shadow-xl backdrop-blur-xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500"
        >
          <div className="text-4xl mb-4 animate-float">📞</div>
          <h3 className="text-xl font-bold text-indigo-700 dark:text-sky-300 mb-2">셔틀버스 문의</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            문의전화: (02) 481-6000
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
            평일 07:30~18:20 / 토요일 07:30~16:20분까지 / 일.공휴일 : 셔틀운행안함
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;