import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, Car } from 'lucide-react';

const footerLinks = [
  { label: '홈', to: '/' },
  { label: '학원 소개', to: '/about' },
  { label: '교육 과정', to: '/courses' },
  { label: '수강 절차', to: '/process' },
  { label: '온라인 신청', to: '/registration' },
  { label: '상담 예약', to: '/contact' },
  { label: '오시는 길', to: '/location' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-0 border-t border-white/[0.06] bg-navy-950">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/20">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">광연운전전문학원</span>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-6">
              안전 운전 교육의 리더.<br />
              20년 이상의 전통과 신뢰로<br />
              최고의 교육 서비스를 제공합니다.
            </p>
            <div className="flex gap-3">
              <a href="tel:02-481-6000" className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-navy-400 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-300">
                <Phone className="w-4 h-4" />
              </a>
              <a href="mailto:info@kydriving.co.kr" className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-navy-400 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wider uppercase">바로가기</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-navy-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wider uppercase">연락처</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:02-481-6000" className="text-sm text-white font-semibold hover:text-brand-300 transition-colors">02-481-6000</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-navy-400">서울시 강남구 헌릉로 733번(세곡동)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@kydriving.co.kr" className="text-sm text-navy-400 hover:text-white transition-colors">info@kydriving.co.kr</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wider uppercase">운영 시간</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-navy-400 space-y-1">
                  <p>평일 07:30 ~ 18:20</p>
                  <p>토요일 07:30 ~ 16:20</p>
                  <p>일요일·공휴일 휴무</p>
                </div>
              </li>
            </ul>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6"
            >
              <Link
                to="/contact"
                className="btn-primary w-full text-center text-sm py-3"
              >
                <Phone className="w-4 h-4" />
                상담 예약
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-navy-500">
              © {new Date().getFullYear()} 광연자동차운전전문학원. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-navy-500">
              <span className="hover:text-navy-300 transition-colors cursor-pointer">개인정보처리방침</span>
              <span className="hover:text-navy-300 transition-colors cursor-pointer">이용약관</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
