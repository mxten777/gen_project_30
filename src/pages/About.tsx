import { motion } from 'framer-motion';
import { Award, Building2, GraduationCap, Heart, History, ShieldCheck, Star, Users } from 'lucide-react';

const Fade: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >{children}</motion.div>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Hero */}
      <section data-has-hero className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-500/15 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="badge"><Building2 className="w-3 h-3" /> ABOUT US</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-display-lg font-extrabold mb-6 leading-tight"
          >
            <span className="text-gradient">광연자동차운전전문학원</span>을<br />소개합니다
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed"
          >
            "빠르게, 저렴하게, 친절하게" — 최고 수준의 운전 교육 서비스로 여러분의 운전면허 취득을 지원합니다.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">HISTORY</p>
            <h2 className="section-title text-white">학원 연혁</h2>
          </Fade>

          <div className="relative mt-12">
            {/* Line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/[0.06]" />

            {[
              { year: '2010', title: '학원 설립', desc: '광연자동차운전전문학원 개원', icon: Star },
              { year: '2015', title: '교육기관 인증', desc: '도로교통공단 지정 교육 기관 인증 획득', icon: ShieldCheck },
              { year: '2020', title: '시설 확충', desc: '최신 교육 시설 및 차량 전면 업그레이드', icon: Building2 },
              { year: '2024', title: '프리미엄 서비스', desc: '맞춤형 프리미엄 운전 교육 서비스 런칭', icon: Award },
            ].map((item, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-500 border-4 border-navy-950 z-10" />

                  <div className="ml-16 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="premium-card p-6 group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-brand-400 tabular-nums">{item.year}년</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-navy-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-brand-950/20 to-navy-950" />
        <div className="relative max-w-4xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">PHILOSOPHY</p>
            <h2 className="section-title text-white">교육 철학</h2>
          </Fade>

          <Fade delay={0.1}>
            <div className="premium-card p-8 sm:p-12 text-center">
              <div className="flex justify-center gap-4 mb-8">
                {['빠르게', '저렴하게', '친절하게'].map((word, i) => (
                  <span key={i} className="badge-gold text-sm">
                    {i === 0 && <History className="w-3.5 h-3.5" />}
                    {i === 1 && <Star className="w-3.5 h-3.5" />}
                    {i === 2 && <Heart className="w-3.5 h-3.5" />}
                    {word}
                  </span>
                ))}
              </div>
              <p className="text-navy-300 leading-relaxed max-w-3xl mx-auto">
                <span className="font-semibold text-white">빠르게</span>란 운전면허 취득 기간을 최단기간으로 단축시키는 노력을 하고 있으며,{' '}
                <span className="font-semibold text-white">저렴하게</span>란 교육 수강비를 합리적으로 책정하여 부담 없는 교육을 제공하며,{' '}
                <span className="font-semibold text-white">친절하게</span>란 친절하고 상냥한 교육으로 효율적인 성과를 위해 노력합니다.
              </p>
              <p className="text-navy-400 mt-6 text-sm leading-relaxed max-w-3xl mx-auto">
                체계적 실무이론과 풍부한 교수 경험을 갖춘 엘리트 강사진이 눈높이에 맞춘 교육을 진행하여 100%에 가까운 높은 합격률을 자랑합니다.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* Faculty & Facilities */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">FACILITIES</p>
            <h2 className="section-title text-white">최첨단 교육 환경</h2>
          </Fade>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: '넓고 쾌적한 실습장', desc: '5,000여 평의 넓은 실습 공간에서 안전하게 교육', icon: Building2 },
              { title: '엘리트 강사진', desc: '체계적 실무이론과 풍부한 경험의 전문 강사', icon: GraduationCap },
              { title: '친절 교육 실시', desc: '편안하고 즐거운 분위기에서 효율적 교육 진행', icon: Heart },
            ].map((item, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div className="premium-card p-8 text-center h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-6 text-brand-400 group-hover:bg-brand-500/20 transition-colors duration-500">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed">{item.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Info */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-brand-950/15 to-navy-950" />
        <div className="relative max-w-4xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">INFO</p>
            <h2 className="section-title text-white">학원 정보</h2>
          </Fade>

          <Fade delay={0.1}>
            <div className="premium-card p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-navy-500 mb-1">학원명</p>
                  <p className="text-lg font-semibold text-white">광연 자동차운전 전문학원</p>
                </div>
                <div>
                  <p className="text-sm text-navy-500 mb-1">주소</p>
                  <p className="text-lg font-semibold text-white">서울시 강남구 헌릉로 733번(세곡동)</p>
                </div>
                <div>
                  <p className="text-sm text-navy-500 mb-1">전화</p>
                  <a href="tel:02-481-6000" className="text-lg font-semibold text-brand-400 hover:text-brand-300 transition-colors">02-481-6000</a>
                </div>
                <div>
                  <p className="text-sm text-navy-500 mb-1">운영시간</p>
                  <p className="text-lg font-semibold text-white">평일 07:30 ~ 18:20</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">CERTIFICATIONS</p>
            <h2 className="section-title text-white">공식 인증 및 지정</h2>
          </Fade>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: '도로교통공단 지정', desc: '공식 교육 기관 인증', icon: ShieldCheck },
              { title: '경기도 운전면허시험장 제휴', desc: '공식 제휴 기관', icon: Users },
              { title: 'ISO 9001 품질 인증', desc: '국제 품질 인증 획득', icon: Award },
            ].map((cert, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div className="premium-card-gold p-8 text-center h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-6 text-gold-400 group-hover:bg-gold-500/20 transition-colors duration-500">
                    <cert.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-navy-400">{cert.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
