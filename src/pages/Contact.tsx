import { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해 주세요.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해 주세요.';
    } else if (!/^01[016789]-?[^0][0-9]{2,3}-?[0-9]{3,4}$/.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = '올바른 휴대폰 번호를 입력해 주세요.';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 주소를 입력해 주세요.';
    }

    if (!formData.course) {
      newErrors.course = '관심 과정을 선택해 주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // 에러 메시지 제거
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await addDoc(collection(db, 'consultations'), {
        ...formData,
        timestamp: new Date(),
        status: 'pending'
      });
      setSubmitMessage('✅ 상담 신청이 완료되었습니다. 곧 연락드리겠습니다.');
      setFormData({ name: '', phone: '', email: '', course: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitMessage('❌ 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 glassmorphism">
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
            상담 예약 및<br />
            문의하기
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed break-keep"
          >
            전화: (02) 481-6000<br />
            주소: 서울특별시 송파구 문정동<br />
            평일 07:30~18:20 / 토요일 07:30~16:20 / 일요일 휴무
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          {/* 상담 신청 폼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">온라인 상담 신청</h2>
            <div className="max-w-2xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow transition-all duration-500 p-8 mobile-card-spacing"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-3 text-base border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400 ${
                        errors.name
                          ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                          : 'border-gray-200 focus:ring-sky-100 focus:border-indigo-500'
                      }`}
                      placeholder="이름을 입력하세요"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600 font-medium">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-3 text-base border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400 ${
                        errors.phone
                          ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                          : 'border-gray-200 focus:ring-sky-100 focus:border-indigo-500'
                      }`}
                      placeholder="010-1234-5678"
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 text-base border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400 ${
                      errors.email
                        ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                        : 'border-gray-200 focus:ring-sky-100 focus:border-indigo-500'
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600 font-medium">{errors.email}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                    관심 과정 *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 text-base border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md ${
                      errors.course
                        ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                        : 'border-gray-200 focus:ring-sky-100 focus:border-indigo-500'
                    }`}
                  >
                    <option value="">관심 과정을 선택하세요</option>
                    <option value="1종 대형면허">1종 대형면허</option>
                    <option value="2종 보통면허">2종 보통면허</option>
                    <option value="장롱면허 재취득">장롱면허 재취득</option>
                    <option value="도로연수">도로연수</option>
                  </select>
                  {errors.course && <p className="mt-2 text-sm text-red-600 font-medium">{errors.course}</p>}
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                    문의사항
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 resize-vertical bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                    placeholder="교육 일정, 비용, 준비사항 등 궁금한 점을 자유롭게 문의해 주세요."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] disabled:bg-gray-400 disabled:transform-none disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                      상담 신청 처리 중...
                    </>
                  ) : (
                    <>
                      📞 상담 신청하기
                    </>
                  )}
                </button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-4 rounded-xl text-center font-semibold ${
                      submitMessage.includes('완료')
                        ? 'bg-green-50 text-green-800 border-2 border-green-200'
                        : 'bg-red-50 text-red-800 border-2 border-red-200'
                    }`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent px-4">다른 방법으로 문의하기</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📞',
                  title: '전화 상담',
                  content: '(02) 481-6000',
                  desc: '평일 07:30~18:20\n토요일 07:30~16:20\n일요일 휴무',
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  icon: '🏢',
                  title: '학원 주소',
                  content: '서울특별시 송파구 문정동',
                  desc: '8호선 복정역 3번 출구\n도보 10분 거리',
                  color: 'from-secondary-500 to-secondary-600'
                },
                {
                  icon: '🚌',
                  title: '셔틀버스',
                  content: '전 지역 운행',
                  desc: '신천역, 남한산성역\n개롱역, 방이역 등\n셔틀버스 문의: (02) 481-6000',
                  color: 'from-success-500 to-success-600'
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl hover:shadow-glow hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 will-change-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-500`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-sky-300">{contact.title}</h3>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{contact.content}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">{contact.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 추가 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="rounded-2xl bg-gradient-to-br from-indigo-100 via-sky-100 to-lime-100 dark:from-white/10 dark:to-white/5 border-2 border-white/30 shadow-xl p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-indigo-700 dark:text-sky-300">상담 예약 혜택</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl mb-3 animate-float">💰</div>
                  <div className="font-semibold text-indigo-700 dark:text-sky-300 text-lg mb-1">저렴한 교육비</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200">합리적인 가격으로<br />최고의 교육 제공</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl mb-3 animate-float" style={{ animationDelay: '0.5s' }}>🚌</div>
                  <div className="font-semibold text-indigo-700 dark:text-sky-300 text-lg mb-1">셔틀버스 운영</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200">전 지역 셔틀버스<br />편리한 통학</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl mb-3 animate-float" style={{ animationDelay: '1s' }}>😊</div>
                  <div className="font-semibold text-indigo-700 dark:text-sky-300 text-lg mb-1">친절한 서비스</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200">친절하고 상냥한<br />교육 진행</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;