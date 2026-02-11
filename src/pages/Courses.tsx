import { motion } from 'framer-motion';
import { BookOpen, Car, CheckCircle2, Clock, MapPin, Zap } from 'lucide-react';
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

const daysCurriculum = [
  {
    day: '1일차',
    title: '차량 기본조작 요령 숙지',
    desc: '넓고 안전한 공간에서 기본조작 숙지 (운전자세 / 명칭과 기능 설명 / 출발 / 제동 / 조향 / 기어변속 / 좌·우회전 / U턴 / 차선맞추기) 반복 연습',
  },
  {
    day: '2일차',
    title: '안전 주행 · 방어 운전',
    desc: '넓고 안전한 도로에서 주행 연습 (좌·우회전 / 유턴 / 거리감 / 속도감 / 차선 맞추기 / 신호등·표지판 식별 / 차간거리 / 코너링)',
  },
  {
    day: '3일차',
    title: '고속주행 · 시내주행',
    desc: '간선도로 차선변경 / 고속화 도로 차선변경 / 시내주행 / 양보운전 / 교차로 / 병목구간 숙지 (신호등 식별 / 표지판 식별 / 차선변경 / 좌회전 / 우회전 / U턴)',
  },
  {
    day: '4일차',
    title: '이면도로 · 시내주행',
    desc: '시내주행 / 이면도로 (비보호 좌회전 / 신호등 없는 교차로 통행) 주행',
  },
  {
    day: '5일차',
    title: '주차 · 복잡한 시내주행',
    desc: '골목길 / 후진주차(T자주차) / 전진주차 / 일렬주차(평행주차) 연습 / 복잡한 도로 주행',
  },
];

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Hero */}
      <section data-has-hero className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-500/15 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="badge"><BookOpen className="w-3 h-3" /> COURSES</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-display-lg font-extrabold mb-6"
          >
            운전연수 안내
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed"
          >
            운전면허는 취득하셨는데 운전을 하지 못하십니까? 노련한 강사님이 친절하고 안전하게 지도합니다.
          </motion.p>
        </div>
      </section>

      {/* Education Time */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <Fade>
            <div className="premium-card p-6 sm:p-8 flex items-center gap-4 text-center justify-center">
              <Clock className="w-5 h-5 text-brand-400 flex-shrink-0" />
              <p className="text-nav-300">
                <span className="font-semibold text-white">교육시간</span> — 08:30 ~ 19:20 시내운전연수교육 (주차교육 포함)
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* 보통반 5-Day Curriculum */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">CURRICULUM</p>
            <h2 className="section-title text-white">보통반 교육 과정</h2>
            <p className="section-subtitle">체계적인 5일 완성 커리큘럼</p>
          </Fade>

          <div className="space-y-4 mt-8">
            {daysCurriculum.map((item, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="premium-card p-6 sm:p-8 group">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-sm tabular-nums group-hover:bg-brand-500/20 transition-colors">
                      {item.day.replace('일차', '')}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.day} — {item.title}</h3>
                      <p className="text-sm text-navy-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* Weekend */}
          <Fade delay={0.4}>
            <div className="premium-card p-6 mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-gold-400 mb-2">
                <Zap className="w-4 h-4" />
                <span className="font-semibold text-sm">주말반</span>
              </div>
              <p className="text-sm text-navy-400">토요일 2시간 × 2, 일요일 2시간 × 2 (2주에 걸쳐 완성)</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* RV / 중형차 */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-brand-950/20 to-navy-950" />
        <div className="relative max-w-5xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">RV / MIDSIZE</p>
            <h2 className="section-title text-white">RV차 · 중형차 교육</h2>
            <p className="section-subtitle">08:30 ~ 20:30 방문교육 · 시내연수(주차교육 포함)</p>
          </Fade>

          <div className="space-y-4 mt-8">
            {daysCurriculum.map((item, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="premium-card p-6 sm:p-8 group">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 font-bold text-sm tabular-nums group-hover:bg-gold-500/20 transition-colors">
                      {item.day.replace('일차', '')}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.day} — {item.title}</h3>
                      <p className="text-sm text-navy-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          <Fade delay={0.4}>
            <div className="premium-card p-6 mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-gold-400 mb-2">
                <Zap className="w-4 h-4" />
                <span className="font-semibold text-sm">주말반</span>
              </div>
              <p className="text-sm text-navy-400">토요일 2시간 × 2, 일요일 2시간 × 2 (2주에 걸쳐 완성)</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Fade>
              <div className="premium-card p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-5 h-5 text-brand-400" />
                  <h3 className="text-lg font-semibold text-white">추가 교육</h3>
                </div>
                <ul className="space-y-3">
                  {['부족한 부분의 추가 교육 가능', '개인 맞춤 스케줄 조정', '방문 교육 서비스 제공'].map((t, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-navy-400">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
            <Fade delay={0.1}>
              <div className="premium-card-gold p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <h3 className="text-lg font-semibold text-white">안전 보장</h3>
                </div>
                <ul className="space-y-3">
                  {['전 차량 종합보험 가입', '안전 교육 전문 강사 배정', '비상 상황 대처 교육 포함'].map((t, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-navy-400">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>

          <Fade delay={0.2}>
            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary text-sm">
                교육 과정 상담하기
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Courses;
