import { addDoc, collection } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { db } from '../firebase';
import { Phone, MapPin, Bus, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Fade: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >{children}</motion.div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = '이름을 입력해 주세요.';
    if (!formData.phone.trim()) e.phone = '연락처를 입력해 주세요.';
    else if (!/^01[016789]-?[^0][0-9]{2,3}-?[0-9]{3,4}$/.test(formData.phone.replace(/-/g, '')))
      e.phone = '올바른 휴대폰 번호를 입력해 주세요.';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) e.email = '올바른 이메일을 입력해 주세요.';
    if (!formData.course) e.course = '관심 과정을 선택해 주세요.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(p => ({ ...p, [ev.target.name]: ev.target.value }));
    if (errors[ev.target.name]) setErrors(p => ({ ...p, [ev.target.name]: '' }));
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      await addDoc(collection(db, 'consultations'), { ...formData, timestamp: new Date(), status: 'pending' });
      setSubmitMessage('success');
      setFormData({ name: '', phone: '', email: '', course: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error(err);
      setSubmitMessage('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = (field: string) =>
    `input-premium ${errors[field] ? 'input-premium-error' : ''}`;

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Hero */}
      <section data-has-hero className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-brand-500/15 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="badge"><Phone className="w-3 h-3" /> CONTACT</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-display-lg font-extrabold mb-6"
          >
            상담 예약 및 문의
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-navy-300 max-w-xl mx-auto"
          >
            전화 (02) 481-6000 · 평일 07:30~18:20 · 토요일 07:30~16:20
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <Fade>
                <div className="premium-card p-8">
                  <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                    <Send className="w-5 h-5 text-brand-400" />
                    온라인 상담 신청
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy-300 mb-2">이름 *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="이름" className={inputCls('name')} />
                        {errors.name && <p className="mt-1.5 text-xs text-error-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-300 mb-2">연락처 *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="010-1234-5678" className={inputCls('phone')} />
                        {errors.phone && <p className="mt-1.5 text-xs text-error-400">{errors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-300 mb-2">이메일</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className={inputCls('email')} />
                      {errors.email && <p className="mt-1.5 text-xs text-error-400">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-300 mb-2">관심 과정 *</label>
                      <select name="course" value={formData.course} onChange={handleChange} className={inputCls('course')}>
                        <option value="">선택하세요</option>
                        <option value="1종 대형면허">1종 대형면허</option>
                        <option value="2종 보통면허">2종 보통면허</option>
                        <option value="장롱면허 재취득">장롱면허 재취득</option>
                        <option value="도로연수">도로연수</option>
                      </select>
                      {errors.course && <p className="mt-1.5 text-xs text-error-400">{errors.course}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-300 mb-2">문의사항</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="궁금한 점을 자유롭게 적어 주세요." className="input-premium resize-none" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block" />
                          처리 중...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2"><Send className="w-4 h-4" /> 상담 신청하기</span>
                      )}
                    </button>

                    {submitMessage && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl text-center text-sm font-medium ${
                          submitMessage === 'success'
                            ? 'bg-success-500/10 text-success-400 border border-success-500/20'
                            : 'bg-error-500/10 text-error-400 border border-error-500/20'
                        }`}
                      >
                        {submitMessage === 'success' ? '✅ 상담 신청이 완료되었습니다. 곧 연락드리겠습니다.' : '❌ 오류가 발생했습니다. 다시 시도해 주세요.'}
                      </motion.div>
                    )}
                  </form>
                </div>
              </Fade>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Phone, title: '전화 상담', content: '(02) 481-6000', desc: '평일 07:30~18:20\n토요일 07:30~16:20\n일요일 휴무' },
                { icon: MapPin, title: '학원 주소', content: '서울특별시 송파구 문정동', desc: '8호선 복정역 3번 출구\n도보 10분 거리' },
                { icon: Bus, title: '셔틀버스', content: '전 지역 운행', desc: '신천역, 남한산성역\n개롱역, 방이역 등' },
              ].map((item, i) => (
                <Fade key={i} delay={i * 0.1}>
                  <div className="premium-card p-6 group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-sm font-bold text-brand-300 mb-1">{item.content}</p>
                        <p className="text-xs text-navy-500 whitespace-pre-line leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}

              {/* Benefits */}
              <Fade delay={0.3}>
                <div className="premium-card-gold p-6">
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-400" />
                    상담 예약 혜택
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: Mail, text: '합리적인 교육비 안내' },
                      { icon: Bus, text: '전 지역 셔틀버스 운행' },
                      { icon: Clock, text: '친절한 맞춤 상담 서비스' },
                    ].map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-navy-300">
                        <b.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {b.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
