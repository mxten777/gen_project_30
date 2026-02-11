import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FixedCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        to="/contact"
        className="group relative flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold text-sm shadow-xl shadow-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full animate-glow-pulse opacity-50" />

        <Phone className="w-4 h-4 relative z-10" />
        <span className="relative z-10 whitespace-nowrap">상담 예약</span>
      </Link>
    </motion.div>
  );
};

export default FixedCTA;
