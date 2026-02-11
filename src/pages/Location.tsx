import { motion } from 'framer-motion';
import { MapPin, Phone, Bus, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fade: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >{children}</motion.div>
);

const shuttleRoutes = [
  {
    name: '2호차',
    route: '신천역 · 잠실아파트 단지',
    stops: ['잠실역', '신천역', '석촌역', '송파역', '방이역 경유'],
    time: '매시간 30분 출발',
  },
  {
    name: '3호차',
    route: '남한산성역 · 모란역 · 태평역',
    stops: ['태평역', '모란역', '남한산성역 경유'],
    time: '매시간 30분 출발',
  },
  {
    name: '4호차',
    route: '개롱역 · 마천동 · 거여역',
    stops: ['거여역', '마천역', '개롱역 경유'],
    time: '매시간 30분 출발',
  },
  {
    name: '7호차',
    route: '방이역 · 올림픽공원역 · 둔촌역',
    stops: ['둔촌역', '올림픽공원역', '방이역 경유'],
    time: '매시간 30분 출발',
  },
];

const Location: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Hero */}
      <section data-has-hero className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-500/15 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="badge"><Bus className="w-3 h-3" /> SHUTTLE & LOCATION</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-display-lg font-extrabold mb-6"
          >
            셔틀버스 안내 &<br />오시는 길
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-navy-300 max-w-xl mx-auto"
          >
            셔틀버스 문의전화 (02) 481-6000<br />
            평일 07:30~18:20 / 토요일 07:30~16:20 / 매시간 30분 출발
          </motion.p>
        </div>
      </section>

      {/* Shuttle Routes */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">SHUTTLE BUS</p>
            <h2 className="section-title text-white">셔틀버스 노선 시간표</h2>
            <p className="section-subtitle">일·공휴일 셔틀 운행 안 함</p>
          </Fade>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {shuttleRoutes.map((route, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div className="premium-card p-6 group h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-sm group-hover:bg-brand-500/20 transition-colors">
                      <Bus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{route.name}</h3>
                      <p className="text-xs text-navy-500">{route.route}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {route.stops.map((stop, si) => (
                      <li key={si} className="flex items-center gap-2 text-sm text-navy-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500/50" />
                        {stop}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-xs text-brand-400">
                    <Clock className="w-3.5 h-3.5" />
                    {route.time}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-brand-950/20 to-navy-950" />
        <div className="relative max-w-5xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">LOCATION</p>
            <h2 className="section-title text-white">오시는 길</h2>
          </Fade>

          <Fade delay={0.1}>
            <div className="premium-card p-8 sm:p-10 mt-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-navy-500 mb-1">주소</p>
                    <p className="font-semibold text-white">서울시 강남구 헌릉로 733번(세곡동)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-navy-500 mb-1">전화</p>
                    <a href="tel:02-481-6000" className="font-semibold text-brand-300 hover:text-brand-200 transition-colors">02-481-6000</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Bus className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-navy-500 mb-1">대중교통</p>
                    <p className="font-semibold text-white">8호선 복정역 3번 출구 도보 10분</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-navy-500 mb-1">운영시간</p>
                    <p className="font-semibold text-white">평일 07:30~18:20</p>
                    <p className="text-sm text-navy-400">토 07:30~16:20 / 일·공휴일 휴무</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* CTA */}
          <Fade delay={0.2}>
            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary text-sm">
                <Phone className="w-4 h-4" />
                상담 예약하기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Location;
