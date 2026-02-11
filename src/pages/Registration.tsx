import { addDoc, collection } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { db } from '../firebase';
import { FileText, Send, CheckCircle2, CreditCard, User, Car, Info } from 'lucide-react';

const Fade: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >{children}</motion.div>
);

interface FormData {
  name: string; gender: string; address: string; phone: string; mobile: string; email: string;
  licenseType: string; licenseNumber: string; licenseIssueDate: string; licenseExpiryDate: string;
  licenseCondition: string; disability: string; departmentShortening: string; drivingExperience: string;
  preferredDate: string; other: string; paymentMethod: string; bankName: string; depositorName: string;
  agreePersonalInfo: boolean; agreeTerms: boolean;
}

const initialForm: FormData = {
  name: '', gender: '', address: '', phone: '', mobile: '', email: '',
  licenseType: '', licenseNumber: '', licenseIssueDate: '', licenseExpiryDate: '',
  licenseCondition: '', disability: '', departmentShortening: '', drivingExperience: '',
  preferredDate: '', other: '', paymentMethod: '', bankName: '', depositorName: '',
  agreePersonalInfo: false, agreeTerms: false,
};

const courses = [
  { value: '2종보통_일반', label: '2종 보통(일반)', price: '550,000원' },
  { value: '2종보통_주말', label: '2종 보통(주말반)', price: '600,000원' },
  { value: '1종대형', label: '1종 대형면허', price: '800,000원' },
  { value: '장롱면허_5일', label: '장롱면허(5일)', price: '350,000원' },
  { value: '장롱면허_주말', label: '장롱면허(주말)', price: '400,000원' },
  { value: 'RV_5일', label: 'RV차 교육(5일)', price: '400,000원' },
  { value: 'RV_주말', label: 'RV차 교육(주말)', price: '450,000원' },
];

const Registration: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = '이름을 입력하세요.';
    if (!form.mobile.trim()) e.mobile = '휴대폰 번호를 입력하세요.';
    if (!form.licenseType) e.licenseType = '교육 과정을 선택하세요.';
    if (!form.agreePersonalInfo) e.agreePersonalInfo = '개인정보 수집에 동의해 주세요.';
    if (!form.agreeTerms) e.agreeTerms = '이용약관에 동의해 주세요.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true); setSubmitMsg('');
    try {
      await addDoc(collection(db, 'registrations'), { ...form, timestamp: new Date(), status: 'pending' });
      setSubmitMsg('success');
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      console.error(err);
      setSubmitMsg('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = (field: string) => `input-premium ${errors[field] ? 'input-premium-error' : ''}`;

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Hero */}
      <section data-has-hero className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-gold-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="badge-gold"><FileText className="w-3 h-3" /> REGISTRATION</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-display-lg font-extrabold mb-6"
          >
            온라인 수강 신청
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-navy-300 max-w-xl mx-auto"
          >
            온라인으로 간편하게 수강 신청하세요. 확인 후 연락드리겠습니다.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Notice */}
          <Fade>
            <div className="premium-card p-6 mb-8">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-navy-400 leading-relaxed">
                  <p className="font-semibold text-white mb-2">개인정보 수집·이용 동의</p>
                  <p>수집 목적: 수강 등록 및 교육 안내 / 수집 항목: 성명, 연락처, 이메일 등 / 보유 기간: 수강 종료 후 1년</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <div className="premium-card p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-brand-400" /> 기본 정보
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">이름 *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="홍길동" className={inputCls('name')} />
                    {errors.name && <p className="mt-1 text-xs text-error-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">성별</label>
                    <select name="gender" value={form.gender} onChange={handleChange} className="input-premium">
                      <option value="">선택</option>
                      <option value="male">남성</option>
                      <option value="female">여성</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy-300 mb-2">주소</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="서울시 강남구..." className="input-premium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">전화번호</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="02-000-0000" className="input-premium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">휴대폰 *</label>
                    <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="010-0000-0000" className={inputCls('mobile')} />
                    {errors.mobile && <p className="mt-1 text-xs text-error-400">{errors.mobile}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy-300 mb-2">이메일</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className="input-premium" />
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div className="premium-card p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Car className="w-5 h-5 text-brand-400" /> 교육 과정 선택
                </h3>
                <div>
                  <label className="block text-sm font-medium text-navy-300 mb-3">교육 과정 *</label>
                  <select name="licenseType" value={form.licenseType} onChange={handleChange} className={inputCls('licenseType')}>
                    <option value="">선택하세요</option>
                    {courses.map(c => (
                      <option key={c.value} value={c.value}>{c.label} — {c.price}</option>
                    ))}
                  </select>
                  {errors.licenseType && <p className="mt-1 text-xs text-error-400">{errors.licenseType}</p>}
                </div>

                {/* Price Table */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        <th className="text-left py-3 text-navy-400 font-medium">과정</th>
                        <th className="text-right py-3 text-navy-400 font-medium">교육비</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((c, i) => (
                        <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                          <td className="py-3 text-navy-300">{c.label}</td>
                          <td className="py-3 text-right font-semibold text-white">{c.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* License Info */}
              <div className="premium-card p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-400" /> 면허 정보
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">면허번호</label>
                    <input type="text" name="licenseNumber" value={form.licenseNumber} onChange={handleChange} className="input-premium" placeholder="00-00-000000-00" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">면허 발급일</label>
                    <input type="date" name="licenseIssueDate" value={form.licenseIssueDate} onChange={handleChange} className="input-premium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">운전 경력</label>
                    <input type="text" name="drivingExperience" value={form.drivingExperience} onChange={handleChange} className="input-premium" placeholder="예: 3년" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">희망 교육일</label>
                    <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} className="input-premium" />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="premium-card p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-brand-400" /> 결제 방법
                </h3>
                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">결제 방법</label>
                    <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} className="input-premium">
                      <option value="">선택</option>
                      <option value="cash">현금</option>
                      <option value="card">카드</option>
                      <option value="transfer">계좌이체</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">은행명</label>
                    <input type="text" name="bankName" value={form.bankName} onChange={handleChange} className="input-premium" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-300 mb-2">입금자명</label>
                    <input type="text" name="depositorName" value={form.depositorName} onChange={handleChange} className="input-premium" />
                  </div>
                </div>
              </div>

              {/* Additional */}
              <div className="premium-card p-8">
                <label className="block text-sm font-medium text-navy-300 mb-2">기타 사항</label>
                <textarea name="other" value={form.other} onChange={handleChange} rows={3} className="input-premium resize-none" placeholder="추가 문의사항을 적어 주세요." />
              </div>

              {/* Agreements */}
              <div className="premium-card p-8 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" name="agreePersonalInfo" checked={form.agreePersonalInfo} onChange={handleChange}
                    className="mt-0.5 w-5 h-5 rounded border-white/20 bg-white/[0.04] text-brand-500 focus:ring-brand-500/40" />
                  <span className="text-sm text-navy-300 group-hover:text-white transition-colors">
                    개인정보 수집 및 이용에 동의합니다. <span className="text-error-400">*</span>
                  </span>
                </label>
                {errors.agreePersonalInfo && <p className="text-xs text-error-400 ml-8">{errors.agreePersonalInfo}</p>}

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange}
                    className="mt-0.5 w-5 h-5 rounded border-white/20 bg-white/[0.04] text-brand-500 focus:ring-brand-500/40" />
                  <span className="text-sm text-navy-300 group-hover:text-white transition-colors">
                    이용약관에 동의합니다. <span className="text-error-400">*</span>
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-xs text-error-400 ml-8">{errors.agreeTerms}</p>}
              </div>

              {/* Documents Notice */}
              <div className="premium-card-gold p-6">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" /> 구비서류 안내
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {['신분증 (주민등록증·여권)', '증명사진 3매 (3×4cm)', '외국인: 외국인등록증', '군인: 군인신분증 사본'].map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-navy-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Submit */}
              <button type="submit" disabled={isSubmitting} className="btn-gold w-full text-base">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-navy-950/30 border-t-navy-950 rounded-full inline-block" />
                    처리 중...
                  </span>
                ) : (
                  <span className="flex items-center gap-2"><Send className="w-5 h-5" /> 수강 신청하기</span>
                )}
              </button>

              {submitMsg && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center text-sm font-medium ${
                    submitMsg === 'success'
                      ? 'bg-success-500/10 text-success-400 border border-success-500/20'
                      : 'bg-error-500/10 text-error-400 border border-error-500/20'
                  }`}
                >
                  {submitMsg === 'success' ? '✅ 수강 신청이 완료되었습니다. 확인 후 연락드리겠습니다.' : '❌ 오류가 발생했습니다. 다시 시도해 주세요.'}
                </motion.div>
              )}
            </form>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Registration;
