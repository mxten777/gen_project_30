import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FixedCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        to="/contact"
        className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 sm:space-x-3 font-semibold text-base sm:text-lg border-2 border-white/20"
      >
        <motion.span
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          className="text-xl sm:text-2xl"
        >
          📞
        </motion.span>
        <span className="whitespace-nowrap">상담 예약</span>
      </Link>
    </motion.div>
  );
};

export default FixedCTA;