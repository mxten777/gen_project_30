import { motion } from 'framer-motion';
import { Award, BookOpen, Car, CheckCircle2, ClipboardList, FileText, Camera, CreditCard, Phone, ArrowRight } from 'lucide-react';
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

const steps = [
  { step: '01', title: '학원 등록', desc: '신분증만 있으시면 학원 등록이 가능합니다. 방문 또는 온라인으로 간편 등록하세요.', icon: ClipboardList, color: 'brand' },
  { step: '02', title: '적성검사', desc: '학과시험 접수 전 적성검사를 받으셔야 합니다. 학원에서 안내해 드립니다.', icon: FileText, color: 'brand' },
  { step: '03', title: '학과시험', desc: '컴퓨터 학과시험을 통해 교통법규와 안전운전 지식을 평가합니다.', icon: BookOpen, color: 'brand' },
  { step: '04', title: '기능시험', desc: '전문 강사의 지도 하에 기능시험을 준비하고 응시합니다.', icon: Car, color: 'gold' },
  { step: '05', title: '면허증 발급', desc: '모든 시험에 합격하시면 당일 면허증이 발급됩니다.', icon: Award, color: 'gold' },
];

const documents = [
  { title: '적성검사', desc: '신분증(주민등록증·여권)과 수수료를 준비하세요.', icon: FileText },
  { title: '사진', desc: '규격 증명사진은 시험장 내 촬영실에서 촬영 가능합니다.', icon: Camera },
  { title: '경력증명서', desc: '자격시험 또는 면허 소지자는 경력증명서가 필요합니다.', icon: ClipboardList },
  { title: '응시원서', desc: '학과시험 및 기능시험 접수 시 원서를 작성합니다.', icon: CreditCard },
];

const Process: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Hero */}
      <section data-has-hero className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-500/15 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="badge"><ClipboardList className="w-3 h-3" /> PROCESS</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-display-lg font-extrabold mb-6"
          >
            쉽고 빠른 운전면허<br />취득 과정
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed"
          >
            신분증만 있으시면 학원 등록이 가능합니다. 5단계의 간편한 절차를 안내합니다.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">5-STEP SYSTEM</p>
            <h2 className="section-title text-white">교육 단계</h2>
          </Fade>

          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-white/[0.06]" />

            <div className="space-y-6">
              {steps.map((item, i) => (
                <Fade key={i} delay={i * 0.1}>
                  <div className="relative flex items-start gap-6 ml-0">
                    {/* Dot */}
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${
                      item.color === 'gold'
                        ? 'bg-gold-500/10 border border-gold-500/20 text-gold-400'
                        : 'bg-brand-500/10 border border-brand-500/20 text-brand-400'
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="premium-card p-6 flex-grow group">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-bold tabular-nums ${item.color === 'gold' ? 'text-gold-500' : 'text-brand-500'}`}>
                          STEP {item.step}
                        </span>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm text-navy-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-brand-950/20 to-navy-950" />
        <div className="relative max-w-5xl mx-auto">
          <Fade>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 text-center mb-3">DOCUMENTS</p>
            <h2 className="section-title text-white">준비물 안내</h2>
            <p className="section-subtitle">입학 시 필요한 서류를 미리 확인하세요</p>
          </Fade>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {documents.map((doc, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div className="premium-card p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      <doc.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{doc.title}</h3>
                      <p className="text-sm text-navy-400 leading-relaxed">{doc.desc}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* Key Requirements */}
          <Fade delay={0.4}>
            <div className="premium-card p-8 mt-8">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-400" />
                입학 준비물 요약
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {['신분증 (주민등록증·여권)', '증명사진 3매 (3×4cm)', '수수료', '외국인: 외국인등록증', '군인: 군인신분증', '신체검사서 (지정병원)'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-navy-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Fade>
            <h2 className="text-display-sm sm:text-display-md font-bold text-white mb-6">
              지금 바로 <span className="text-gradient-gold">등록</span>하세요
            </h2>
            <p className="text-brand-200/70 mb-10 max-w-xl mx-auto">
              궁금한 점이 있으시면 전화 상담 또는 온라인 상담을 이용하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold text-sm">
                <Phone className="w-4 h-4" />
                상담 예약
              </Link>
              <Link to="/registration" className="btn-secondary text-sm border-white/10">
                <ArrowRight className="w-4 h-4" />
                온라인 신청
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Process;
