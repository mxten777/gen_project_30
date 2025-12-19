import { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
    phone: '',
    mobile: '',
    email: '',
    licenseType: '',
    licenseNumber: '',
    licenseIssueDate: '',
    licenseExpiryDate: '',
    licenseCondition: '',
    disability: '',
    departmentShortening: '',
    drivingExperience: '',
    preferredDate: '',
    other: '',
    paymentMethod: '',
    bankName: '',
    depositorName: '',
    agreePersonalInfo: false,
    agreeTerms: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = '성명을 입력해 주세요.';
    }

    if (!formData.gender) {
      newErrors.gender = '성별을 선택해 주세요.';
    }

    if (!formData.phone.trim() && !formData.mobile.trim()) {
      newErrors.phone = '연락처를 하나 이상 입력해 주세요.';
    }

    if (!formData.licenseType) {
      newErrors.licenseType = '면허 종별을 선택해 주세요.';
    }

    if (!formData.agreePersonalInfo) {
      newErrors.agreePersonalInfo = '개인정보 수집 이용에 동의해 주세요.';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = '학원 규칙 준수에 동의해 주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
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
      await addDoc(collection(db, 'registrations'), {
        ...formData,
        timestamp: new Date(),
        status: 'pending'
      });
      setSubmitMessage('✅ 온라인 수강 신청이 완료되었습니다. 곧 연락드리겠습니다.');
      setFormData({
        name: '', gender: '', address: '', phone: '', mobile: '', email: '',
        licenseType: '', licenseNumber: '', licenseIssueDate: '', licenseExpiryDate: '',
        licenseCondition: '', disability: '', departmentShortening: '', drivingExperience: '',
        preferredDate: '', other: '', paymentMethod: '', bankName: '', depositorName: '',
        agreePersonalInfo: false, agreeTerms: false
      });
      setErrors({});
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitMessage('❌ 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-sky-600 to-lime-500">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-lime-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg break-keep"
          >
            온라인 수강 신청
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed break-keep"
          >
            편리한 온라인으로 수강 신청을 진행하세요
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          {/* 개인정보 수집 이용 동의 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">
              개인정보 수집 이용 동의
            </h2>
            <div className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8">
              <div className="text-gray-700 dark:text-gray-200 space-y-4">
                <p>광연자동차운전전문학원은 온라인 수강 신청 및 상담 서비스 제공을 위한 개인정보 수집 이용을 위하여 개인정보법 제15조및 제22조에 따라 귀하의 동의를 받고자 합니다.</p>

                <div className="space-y-2">
                  <p><strong>1. 개인정보의 수집 이용 목적 :</strong> 온라인 수강 신청 및 상담</p>
                  <p><strong>2. 수집하는 개인정보의 항목</strong></p>
                  <p className="ml-4">◇ 필수정보 : 성명, 주민등록번호, 연락처 (전화번호 또는 휴대폰 번호)</p>
                  <p className="ml-4">◇ 선택정보 : 주소,면허종별, 교육종별</p>
                  <p><strong>3. 개인정보의 보유 이용기간 :</strong> 회원가입일 부터 회원 탈퇴 시까지</p>
                  <p><strong>4. 귀하는 개인정보 수집 이용에 동의 하지 않으실 수 있습니다, 동의 거부시에는 온라인 수강 신청이 불가하며 전화상담 후 학원에 오셔서 결제하셔야 합니다.</strong></p>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <input
                    type="checkbox"
                    id="agreePersonalInfo"
                    name="agreePersonalInfo"
                    checked={formData.agreePersonalInfo}
                    onChange={handleChange}
                    className="w-5 h-5 text-indigo-600 bg-white border-2 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                  />
                  <label htmlFor="agreePersonalInfo" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    수집하는 개인정보 항목, 수집/이용목적, 개인정보보유기간에 동의합니다.
                  </label>
                </div>
                {errors.agreePersonalInfo && <p className="mt-2 text-sm text-red-600 font-medium">{errors.agreePersonalInfo}</p>}
              </div>
            </div>
          </motion.div>

          {/* 수강 신청 폼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">
              수강 신청 정보
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 기본 정보 */}
              <div className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-indigo-700 dark:text-sky-300">기본 정보</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      성명 (한글) *
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
                      placeholder="성명을 입력하세요"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600 font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      성별 *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="여자"
                          checked={formData.gender === '여자'}
                          onChange={handleChange}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-base">여자</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="남자"
                          checked={formData.gender === '남자'}
                          onChange={handleChange}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-base">남자</span>
                      </label>
                    </div>
                    {errors.gender && <p className="mt-2 text-sm text-red-600 font-medium">{errors.gender}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      주소
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                      placeholder="주소를 입력하세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      연락처 (자택)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                      placeholder="02-123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      연락처 (휴대폰) *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                      placeholder="010-1234-5678"
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* 교육 과정 선택 */}
              <div className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-indigo-700 dark:text-sky-300">교육 과정 선택</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      면허 종별 *
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 text-base border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md ${
                        errors.licenseType
                          ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                          : 'border-gray-200 focus:ring-sky-100 focus:border-indigo-500'
                      }`}
                    >
                      <option value="">면허 종별을 선택하세요</option>
                      <option value="1종보통">1종 보통면허</option>
                      <option value="2종자동">2종 자동면허</option>
                      <option value="1종대형">1종 대형면허</option>
                      <option value="원동기">원동기</option>
                      <option value="시내연수">시내연수</option>
                    </select>
                    {errors.licenseType && <p className="mt-2 text-sm text-red-600 font-medium">{errors.licenseType}</p>}
                  </div>
                </div>

                {/* 가격 정보 */}
                <div className="bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-white/5 dark:to-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-indigo-700 dark:text-sky-300">교육비 안내</h4>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-4 bg-white/60 rounded-lg">
                      <span className="font-medium">1종 보통면허 / 2종 자동면허 (기능교육)</span>
                      <span className="text-xl font-bold text-indigo-600">₩343,400</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/60 rounded-lg">
                      <span className="font-medium">1종 보통면허 / 2종 자동면허 (도로주행 포함)</span>
                      <span className="text-xl font-bold text-indigo-600">₩772,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/60 rounded-lg">
                      <span className="font-medium">1종 대형면허</span>
                      <span className="text-xl font-bold text-indigo-600">문의</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/60 rounded-lg">
                      <span className="font-medium">원동기 / 시내연수</span>
                      <span className="text-xl font-bold text-indigo-600">문의</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">* 모든 가격은 VAT 포함입니다.</p>
                </div>
              </div>

              {/* 면허 정보 */}
              <div className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-indigo-700 dark:text-sky-300">면허 정보</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="licenseNumber" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      면허번호
                    </label>
                    <input
                      type="text"
                      id="licenseNumber"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                      placeholder="면허번호를 입력하세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="licenseIssueDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      교부일자
                    </label>
                    <input
                      type="date"
                      id="licenseIssueDate"
                      name="licenseIssueDate"
                      value={formData.licenseIssueDate}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="licenseExpiryDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      유효기간
                    </label>
                    <input
                      type="date"
                      id="licenseExpiryDate"
                      name="licenseExpiryDate"
                      value={formData.licenseExpiryDate}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="licenseCondition" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      조건
                    </label>
                    <input
                      type="text"
                      id="licenseCondition"
                      name="licenseCondition"
                      value={formData.licenseCondition}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                      placeholder="면허 조건을 입력하세요"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="disability" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      신체장애정도
                    </label>
                    <textarea
                      id="disability"
                      name="disability"
                      value={formData.disability}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400 resize-vertical"
                      placeholder="(손가락, 팔 다리, 시력 색약, 청력, 기타 사소한 신체장애가 있는 경우에는 반드시 기재하여 주시기 바랍니다.)"
                    />
                  </div>
                </div>
              </div>

              {/* 추가 정보 */}
              <div className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-indigo-700 dark:text-sky-300">추가 정보</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      학과단축교육대상
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="departmentShortening"
                          value="대상"
                          checked={formData.departmentShortening === '대상'}
                          onChange={handleChange}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-base">대상</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="departmentShortening"
                          value="비대상"
                          checked={formData.departmentShortening === '비대상'}
                          onChange={handleChange}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-base">비대상</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      운전면허 경력자
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="drivingExperience"
                          value="대상"
                          checked={formData.drivingExperience === '대상'}
                          onChange={handleChange}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-base">대상</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="drivingExperience"
                          value="비대상"
                          checked={formData.drivingExperience === '비대상'}
                          onChange={handleChange}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-base">비대상</span>
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      교육희망일시
                    </label>
                    <input
                      type="text"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                      placeholder="온라인 입학절차를 마치신 후 학원에 전화 주시면 상담 후 시간예약이 가능합니다."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="other" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                      기타
                    </label>
                    <textarea
                      id="other"
                      name="other"
                      value={formData.other}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400 resize-vertical"
                      placeholder="기타 사항을 입력하세요"
                    />
                  </div>
                </div>
              </div>

              {/* 결제 정보 */}
              <div className="rounded-2xl bg-white/70 dark:bg-white/10 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-indigo-700 dark:text-sky-300">결제 방법</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="신용카드"
                        checked={formData.paymentMethod === '신용카드'}
                        onChange={handleChange}
                        className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-base">신용카드</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="계좌이체"
                        checked={formData.paymentMethod === '계좌이체'}
                        onChange={handleChange}
                        className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-base">계좌이체</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="무통장입금"
                        checked={formData.paymentMethod === '무통장입금'}
                        onChange={handleChange}
                        className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-base">무통장입금</span>
                    </label>
                  </div>

                  {formData.paymentMethod === '무통장입금' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-200"
                    >
                      <div>
                        <label htmlFor="bankName" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                          입금은행
                        </label>
                        <select
                          id="bankName"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleChange}
                          className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md"
                        >
                          <option value="">은행을 선택하세요</option>
                          <option value="국민은행">국민은행</option>
                          <option value="신한은행">신한은행</option>
                          <option value="우리은행">우리은행</option>
                          <option value="하나은행">하나은행</option>
                          <option value="기업은행">기업은행</option>
                          <option value="농협">농협</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="depositorName" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                          입금자명
                        </label>
                        <input
                          type="text"
                          id="depositorName"
                          name="depositorName"
                          value={formData.depositorName}
                          onChange={handleChange}
                          className="w-full px-5 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 dark:bg-white/10 backdrop-blur-md placeholder:text-gray-400"
                          placeholder="입금자명을 입력하세요"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* 약관 동의 */}
              <div className="rounded-2xl bg-gradient-to-br from-indigo-100 via-sky-100 to-lime-100 dark:from-white/10 dark:to-white/5 border-2 border-white/30 shadow-xl backdrop-blur-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-indigo-700 dark:text-sky-300">약관 동의</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="w-5 h-5 mt-1 text-indigo-600 bg-white border-2 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                    />
                    <label htmlFor="agreeTerms" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      *귀 학원의 규칙을 준수하고 직원의 지시에 따라 교육에 임할 것을 약속드리며 입학을 신청합니다.
                    </label>
                  </div>
                  {errors.agreeTerms && <p className="mt-2 text-sm text-red-600 font-medium">{errors.agreeTerms}</p>}
                </div>

                <div className="mt-6 p-4 bg-white/60 dark:bg-white/10 rounded-xl">
                  <h4 className="font-semibold mb-2 text-indigo-700 dark:text-sky-300">구비서류</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    <li>1) 신분증(주민등록증.면허증.외국인 등록증)</li>
                    <li>2) 운전경력자: 경력증명서</li>
                  </ul>
                </div>
              </div>

              {/* 제출 버튼 */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-12 py-4 text-xl font-semibold rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white shadow-xl hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] disabled:bg-gray-400 disabled:transform-none disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 will-change-transform relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full mr-3"
                      />
                      신청 처리 중...
                    </>
                  ) : (
                    <>
                      📝 온라인 수강 신청하기
                    </>
                  )}
                </button>
              </div>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-6 rounded-2xl text-center font-semibold ${
                    submitMessage.includes('완료')
                      ? 'bg-green-50 text-green-800 border-2 border-green-200'
                      : 'bg-red-50 text-red-800 border-2 border-red-200'
                  }`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registration;