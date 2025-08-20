import { motion } from 'framer-motion';
const HistoryHeading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold mb-16 text-center uppercase 
                   bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#C3F73A] text-transparent bg-clip-text tracking-wide"
    >
      Competition History
    </motion.h1>
  );
};

export default HistoryHeading;
