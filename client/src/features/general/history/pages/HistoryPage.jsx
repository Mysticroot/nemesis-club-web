import { motion } from 'framer-motion';
import { historyData } from '@/api/historyData';

export default function History() {
  return (
    <div className="bg-[#0E0E0E] min-h-screen py-16 px-6 md:px-16 pt-32">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative block w-fit mx-auto 
                   text-4xl md:text-5xl font-extrabold mb-18 uppercase 
                   text-transparent bg-clip-text 
                   bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]
                   tracking-wide italic transform -skew-x-6 text-center"
      >
        history
        {/* Racing stripe underline */}
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] 
                     w-3/4 h-[4px] 
                     bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8] 
                     skew-x-12 rounded-full"
        ></span>
      </motion.h1>

      {/* Timeline Cards */}
      <div className="space-y-12">
        {historyData?.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative flex flex-col md:flex-row bg-gradient-to-br from-[#0A0A0A]/90 via-[#111827]/80 to-[#1E293B]/90 
                 backdrop-blur-xl border border-[#FFD700]/30 
                 rounded-2xl shadow-xl hover:shadow-[#0047FF]/40 
                 transition-all duration-500 overflow-hidden"
          >
            {/* Text Section */}
            <div className="w-full md:w-[65%] p-6 md:p-8 relative z-10">
              <span className="text-sm tracking-widest text-[#FFD700]/90 font-semibold">
                {item.year}
              </span>
              <h2 className="text-2xl font-bold text-white mt-2">{item.title}</h2>
              <h3 className="text-lg italic text-[#B0B7C3]">"{item.subtitle}"</h3>
              <p className="text-[#1A73E8] font-semibold mt-2">{item.achievement}</p>

              {/* Results Section */}
              <div className="mt-6 border-t border-gray-700/50 pt-4">
                <h4 className="text-[#FFD700] font-semibold mb-2">Results</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {item.results.map((res, i) => (
                    <li key={i} className="flex justify-between border-b border-gray-700/40 pb-1">
                      <span>{res.event}</span>
                      <span className="text-[#1A73E8] font-semibold">{res.position}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider (Brighter Slant effect) */}
            <div className="hidden md:block w-10 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent transform -skew-x-12 opacity-90 shadow-lg shadow-[#FFD700]/40" />

            {/* Image Section */}
            <div className="w-full md:w-[35%] relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
