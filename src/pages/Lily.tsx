import { motion } from 'framer-motion';

const Lily: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <section data-has-hero className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-display-lg font-extrabold mb-6"
          >
            Lily's Page
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-navy-300 max-w-xl mx-auto"
          >
            이 페이지는 추가 콘텐츠를 위한 공간입니다.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Lily;
