import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, BookOpen, Shield, Award, Users, Car, Target,
  ChevronRight, Star, ArrowRight, CheckCircle2, Clock, Zap
} from 'lucide-react';

/* ───── Animated Counter Hook ───── */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

/* ───── Section Fade-in Wrapper ───── */
const FadeSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ═══════════════════════════════════════════ */
const Home: React.FC = () => {
  const stats = [
    { target: 95, suffix: '%', label: '합격률', icon: Target },
    { target: 20, suffix: '+년', label: '교육 경력', icon: Award },
    { target: 5000, suffix: '+', label: '졸업생', icon: Users },
    { target: 100, suffix: '%', label: '안전 교육', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-navy-950 text-white">

      {/* ══════ HERO ══════ */}
      <section data-hero-bleed className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern" />

        {/* Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] animate-pulse-soft" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-400/15 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] animate-float-slow" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="badge-gold">
              <Star className="w-3 h-3" />
              서울 강남 · 20년 전통 운전전문학원
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-display-xl xl:text-display-2xl font-extrabold mb-6 leading-[1.05] tracking-tight"
          >
            운전은{' '}
            <span className="text-gradient-blue">안전</span>
            ,<br className="hidden sm:block" /> 합격은{' '}
            <span className="text-gradient-gold">결과</span>
            로<br className="hidden sm:block" /> 증명합니다
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-navy-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            광연자동차운전전문학원 — 국내 최고 수준의
            운전 교육으로 안전 운전과 합격을 동시에 이루세요
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-gold text-base">
              <Phone className="w-5 h-5" />
              상담 예약하기
            </Link>
            <Link to="/courses" className="btn-secondary text-base">
              <BookOpen className="w-5 h-5" />
              교육 과정 보기
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════ KEY STRENGTHS ══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <FadeSection>
            <p className="section-subtitle text-sm font-semibold tracking-widest uppercase text-brand-400 mb-3">WHY CHOOSE US</p>
            <h2 className="section-title text-gradient">왜 광연을 선택해야 할까요?</h2>
            <p className="section-subtitle">20년 이상의 실전 교육 경험과 95% 이상의 합격률로 검증된 전문 학원입니다</p>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '전문 강사진', desc: '20년 이상 경력의 엘리트 강사진이 1:1 맞춤 교육을 제공합니다', icon: Users, accent: 'brand' },
              { title: '최신 커리큘럼', desc: '개정 교통법규를 반영한 체계적인 5일 완성 교육 과정', icon: BookOpen, accent: 'brand' },
              { title: '95% 합격률', desc: '검증된 교육 시스템으로 높은 합격률을 자랑합니다', icon: Target, accent: 'gold' },
              { title: '최신 교육 차량', desc: '안전하고 최신 사양의 교육 차량으로 실전 교육 제공', icon: Car, accent: 'brand' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div className="premium-card p-8 h-full group">
                  <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${
                    item.accent === 'gold'
                      ? 'bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20'
                      : 'bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20'
                  } transition-colors duration-500`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COURSES OVERVIEW ══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-brand-950/30 to-navy-950" />
        <div className="relative max-w-7xl mx-auto">
          <FadeSection>
            <p className="section-subtitle text-sm font-semibold tracking-widest uppercase text-brand-400 mb-3">COURSES</p>
            <h2 className="section-title text-white">대표 교육 과정</h2>
            <p className="section-subtitle">목적에 맞는 최적의 교육 과정을 선택하세요</p>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: '1종 대형면허', desc: '프로 운전자를 위한 전문 면허 과정. 대형 차량 운전 교육 및 시험 준비를 철저히 지원합니다.', icon: '🚛', features: ['대형 차량 실습', '전문 강사 1:1', '시험장 동행'] },
              { name: '2종 보통면허', desc: '가장 인기 있는 일반 운전면허 취득 과정. 빠르고 확실한 합격을 위한 체계적 교육.', icon: '🚗', features: ['5일 완성 코스', '시내 도로 연수', '주차 교육 포함'], popular: true },
              { name: '장롱면허 재취득', desc: '면허는 있지만 운전이 두려운 분들을 위한 맞춤 재교육 프로그램.', icon: '🔄', features: ['공포심 해소', '실전 도로 연습', '맞춤 스케줄'] },
            ].map((course, i) => (
              <FadeSection key={i} delay={i * 0.12}>
                <div className={`premium-card p-8 h-full relative group ${course.popular ? 'border-brand-500/30 shadow-glow-soft' : ''}`}>
                  {course.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="badge-gold text-xs">
                        <Zap className="w-3 h-3" /> 가장 인기
                      </span>
                    </div>
                  )}
                  <div className="text-5xl mb-6">{course.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{course.name}</h3>
                  <p className="text-sm text-navy-400 mb-6 leading-relaxed">{course.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {course.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-sm text-navy-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group/link"
                  >
                    자세히 보기
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ STATISTICS ══════ */}
      <section className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold-500/10 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto">
          <FadeSection>
            <h2 className="section-title text-white">신뢰할 수 있는 <span className="text-gradient-gold">실적</span></h2>
            <p className="section-subtitle text-brand-200/60">숫자로 증명하는 광연의 교육 품질</p>
          </FadeSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const { count, ref } = useCounter(stat.target);
              return (
                <FadeSection key={i} delay={i * 0.1}>
                  <div ref={ref} className="text-center p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-500 group">
                    <stat.icon className="w-8 h-8 text-brand-400 mx-auto mb-4 group-hover:text-gold-400 transition-colors duration-500" />
                    <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tabular-nums">
                      {count}{stat.suffix}
                    </div>
                    <div className="text-sm text-navy-400 font-medium">{stat.label}</div>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <FadeSection>
            <p className="section-subtitle text-sm font-semibold tracking-widest uppercase text-brand-400 mb-3">TESTIMONIALS</p>
            <h2 className="section-title text-white">수강생 후기</h2>
            <p className="section-subtitle">실제 졸업생들의 생생한 후기를 확인하세요</p>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: '김OO', course: '2종 보통', text: '친절하고 체계적인 교육 덕분에 한 번에 합격했습니다. 운전이 두려웠는데 자신감이 생겼어요!', rating: 5 },
              { name: '이OO', course: '장롱면허', text: '10년 넘게 운전을 안 했는데 5일만에 다시 도로에 나갈 수 있게 됐습니다. 강사님 감사합니다!', rating: 5 },
              { name: '박OO', course: '1종 대형', text: '대형면허 따기 쉽지 않을 줄 알았는데, 전문적인 교육 덕분에 한 번에 합격했습니다.', rating: 5 },
            ].map((review, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div className="premium-card p-8 h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-sm text-navy-300 leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-sm font-bold text-brand-400">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-navy-500">{review.course} 수강</p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROCESS PREVIEW ══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-brand-950/20 to-navy-950" />
        <div className="relative max-w-5xl mx-auto">
          <FadeSection>
            <p className="section-subtitle text-sm font-semibold tracking-widest uppercase text-brand-400 mb-3">PROCESS</p>
            <h2 className="section-title text-white">간편한 수강 절차</h2>
            <p className="section-subtitle">신분증만 있으면 바로 시작할 수 있습니다</p>
          </FadeSection>

          <div className="space-y-4">
            {[
              { step: '01', title: '학원 등록', desc: '신분증 지참 후 방문 또는 온라인 등록', icon: CheckCircle2 },
              { step: '02', title: '적성검사 & 학과시험', desc: '적성검사 후 컴퓨터 학과시험 응시', icon: BookOpen },
              { step: '03', title: '기능 & 도로주행', desc: '전문 강사와 함께 실전 교육 진행', icon: Car },
              { step: '04', title: '면허증 발급', desc: '시험 합격 후 면허증 즉시 발급', icon: Award },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div className="premium-card p-6 sm:p-8 flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-brand-500 tabular-nums">STEP {item.step}</span>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-navy-400">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-navy-600 flex-shrink-0 group-hover:text-brand-400 group-hover:translate-x-1 transition-all duration-300 hidden sm:block" />
                </div>
              </FadeSection>
            ))}
          </div>

          <FadeSection delay={0.4}>
            <div className="text-center mt-10">
              <Link to="/process" className="btn-secondary text-sm">
                <Clock className="w-4 h-4" />
                수강 절차 자세히 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <FadeSection>
            <h2 className="text-display-sm sm:text-display-md md:text-display-lg font-bold text-white mb-6">
              지금 바로<br />
              <span className="text-gradient-gold">운전면허</span> 도전하세요
            </h2>
            <p className="text-lg text-brand-200/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              전문 강사진과 최신 교육 시스템으로<br className="hidden sm:block" />
              안전 운전과 합격을 동시에 이루세요.
              <br />
              <span className="text-gold-300 font-medium">무료 상담을 통해 맞춤 교육 과정을 안내받으세요.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold text-base">
                <Phone className="w-5 h-5" />
                무료 상담 예약
              </Link>
              <Link to="/location" className="btn-secondary text-base border-white/10">
                <ArrowRight className="w-5 h-5" />
                오시는 길
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
