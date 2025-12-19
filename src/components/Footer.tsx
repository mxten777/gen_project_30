import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-24 py-16 px-6 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-t border-white/30 dark:border-white/10 shadow-lg">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* 학원 정보 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent whitespace-nowrap">
              광연자동차운전전문학원
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 mb-4 leading-relaxed break-keep">
              안전 운전 교육의 리더,{' '}
              <span className="font-semibold text-indigo-600 dark:text-sky-400 whitespace-nowrap">20년 이상의 전통과 신뢰</span>
            </p>
            <div className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <p className="flex items-center gap-2 break-keep">
                <span className="text-lg">📍</span>
                <span className="whitespace-nowrap">서울특별시 송파구 문정동</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <a href="tel:02-481-6000" className="hover:text-indigo-600 dark:hover:text-sky-400 transition-colors font-medium whitespace-nowrap">
                  02-481-6000
                </a>
              </p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">빠른 링크</h3>
            <ul className="space-y-3 list-none">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  학원 소개
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  교육 과정
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  수강 절차
                </Link>
              </li>
            </ul>
          </div>

          {/* 교육 과정 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">교육 과정</h3>
            <ul className="space-y-3 list-none">
              <li>
                <Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  🚛 1종 대형면허
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  🚗 2종 보통면허
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  🔄 장롱면허 재취득
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  🛣️ 도로연수
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">연락처</h3>
            <ul className="space-y-3 mb-6 list-none">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <span className="text-lg">📞</span>
                <a href="tel:02-481-6000" className="hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  02-481-6000
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <span className="text-lg">💬</span>
                @kydriving
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <span className="text-lg">📧</span>
                <a href="mailto:info@kydriving.co.kr" className="hover:text-indigo-600 dark:hover:text-sky-400 transition-colors break-all">
                  info@kydriving.co.kr
                </a>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-white/5 dark:to-white/10 border border-white/30">
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                <span className="font-semibold text-indigo-600 dark:text-sky-400">운영시간:</span><br />
                월~금 09:00-18:00<br />
                토요일 09:00-15:00
              </p>
            </div>
          </div>
        </div>

        {/* 하단 */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
              © 2025 <span className="font-semibold text-indigo-600 dark:text-sky-400">광연자동차운전전문학원</span>. All rights reserved.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <span>📞</span>
              상담 예약
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;