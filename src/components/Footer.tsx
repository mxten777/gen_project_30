import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mt-24 py-20 px-6 bg-white/90 dark:bg-black/90 backdrop-blur-3xl border-t border-white/50 dark:border-white/20 shadow-2xl shadow-indigo-500/10"
    >
      {/* Ultra Premium Animated Background */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <motion.div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/30 via-sky-500/20 to-lime-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-r from-sky-500/30 via-lime-400/20 to-indigo-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-lime-400/20 via-indigo-500/30 to-sky-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.2
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {/* 학원 정보 - Ultra Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group"
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-sky-600 to-lime-600 bg-clip-text text-transparent whitespace-nowrap relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              광연자동차운전전문학원
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed break-keep"
              whileHover={{ scale: 1.02 }}
            >
              안전 운전 교육의 리더,{' '}
              <span className="font-bold text-indigo-600 dark:text-sky-400 whitespace-nowrap">
                20년 이상의 전통과 신뢰
              </span>
            </motion.p>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <motion.p
                className="flex items-center gap-3 break-keep group/item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl">📍</span>
                <span className="whitespace-nowrap font-medium">서울특별시 송파구 문정동</span>
              </motion.p>
              <motion.p
                className="flex items-center gap-3 group/item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl">📞</span>
                <a
                  href="tel:02-481-6000"
                  className="hover:text-indigo-600 dark:hover:text-sky-400 transition-all duration-300 font-bold text-lg hover:scale-105 inline-block"
                >
                  02-481-6000
                </a>
              </motion.p>
            </div>
          </motion.div>

          {/* 빠른 링크 - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 relative"
              whileHover={{ scale: 1.05 }}
            >
              빠른 링크
              <motion.div
                className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.h3>
            <ul className="space-y-4 list-none">
              {[
                { to: '/', label: '홈', icon: '🏠' },
                { to: '/about', label: '학원 소개', icon: '🏫' },
                { to: '/courses', label: '교육 과정', icon: '📚' },
                { to: '/process', label: '수강 절차', icon: '📋' }
              ].map((item, idx) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-all duration-300 group"
                  >
                    <motion.span
                      className="text-lg group-hover:animate-bounce"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium group-hover:scale-105 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 교육 과정 - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 relative"
              whileHover={{ scale: 1.05 }}
            >
              교육 과정
              <motion.div
                className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-sky-500 to-lime-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              />
            </motion.h3>
            <ul className="space-y-4 list-none">
              {[
                { to: '/courses', label: '1종 대형면허', icon: '🚛' },
                { to: '/courses', label: '2종 보통면허', icon: '🚗' },
                { to: '/courses', label: '장롱면허 재취득', icon: '🔄' },
                { to: '/courses', label: '도로연수', icon: '🛣️' }
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-all duration-300 group"
                  >
                    <motion.span
                      className="text-lg group-hover:animate-pulse"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium group-hover:scale-105 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 연락처 - Ultra Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 relative"
              whileHover={{ scale: 1.05 }}
            >
              연락처
              <motion.div
                className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-lime-500 to-indigo-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              />
            </motion.h3>
            <ul className="space-y-4 mb-8 list-none">
              <motion.li
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="text-xl group-hover:animate-spin"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  📞
                </motion.span>
                <a
                  href="tel:02-481-6000"
                  className="hover:text-indigo-600 dark:hover:text-sky-400 transition-all duration-300 font-bold text-lg hover:scale-105"
                >
                  02-481-6000
                </a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="text-xl group-hover:animate-bounce"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  💬
                </motion.span>
                <span className="font-medium hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                  @kydriving
                </span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="text-xl group-hover:animate-pulse"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  📧
                </motion.span>
                <a
                  href="mailto:info@kydriving.co.kr"
                  className="hover:text-indigo-600 dark:hover:text-sky-400 transition-all duration-300 font-medium break-all hover:scale-105 inline-block"
                >
                  info@kydriving.co.kr
                </a>
              </motion.li>
            </ul>
            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-sky-50 to-lime-50 dark:from-white/10 dark:to-white/20 border-2 border-white/40 dark:border-white/20 shadow-xl backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <motion.p
                className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="font-bold text-indigo-600 dark:text-sky-400 text-base"
                  whileHover={{ scale: 1.1 }}
                >
                  운영시간:
                </motion.span>
                <br />
                <motion.span whileHover={{ x: 5 }} className="block mt-1">
                  월~금 09:00-18:00
                </motion.span>
                <motion.span whileHover={{ x: 5 }} className="block">
                  토요일 09:00-15:00
                </motion.span>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 하단 - Ultra Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/50 dark:border-white/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.p
              className="text-gray-600 dark:text-gray-300 text-center md:text-left text-lg"
              whileHover={{ scale: 1.02 }}
            >
              © 2025{' '}
              <span className="font-bold text-indigo-600 dark:text-sky-400">
                광연자동차운전전문학원
              </span>
              . All rights reserved.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-lime-400 text-white font-bold shadow-2xl hover:shadow-glow hover:scale-110 transition-all duration-500 relative overflow-hidden group"
              >
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  📞
                </motion.span>
                <span className="relative z-10">상담 예약</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-sky-400 to-lime-300 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;