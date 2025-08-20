// src/pages/History.jsx
import React from 'react';
import { motion } from 'framer-motion';

const historyData = [
  {
    year: '2024',
    title: 'Mechathon Buggy Competition 2024',
    subtitle: 'Innovation & Speed on Track',
    description:
      'The 2024 competition saw 20 teams competing with innovative buggy designs. The winners excelled in speed, efficiency, and technical design, pushing the boundaries of student engineering.',
    image: 'https://via.placeholder.com/600x400?text=2024+Competition', // replace with actual image
  },
  {
    year: '2023',
    title: 'Mechathon Buggy Competition 2023',
    subtitle: 'Engineering Meets Creativity',
    description:
      'In 2023, students showcased their creativity and technical skills in buggy design and racing. Safety, teamwork, and problem-solving were the key highlights.',
    image: 'https://via.placeholder.com/600x400?text=2023+Competition',
  },
  {
    year: '2022',
    title: 'Mechathon Buggy Competition 2022',
    subtitle: 'First Edition – Building the Future',
    description:
      'The inaugural Mechathon Buggy Competition in 2022 was a milestone event, inspiring students to apply their engineering knowledge to real-world racing challenges.',
    image: 'https://via.placeholder.com/600x400?text=2022+Competition',
  },
];

export default function History() {
  return (
    <div className="bg-[#0E0E0E] min-h-screen py-16 px-6 md:px-16 pt-28">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center uppercase 
                   bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#C3F73A] text-transparent bg-clip-text tracking-wide"
      >
        Competition History
      </motion.h1>

      {/* Timeline Cards */}
      <div className="space-y-12">
        {historyData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-gradient-to-br from-[#0A1F44] to-[#2A2D34] border border-[#1A73E8]/30 
                       rounded-2xl shadow-lg hover:shadow-[#1A73E8]/60 
                       transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 md:h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center">
              <span className="text-sm text-[#B0B7C3] font-semibold mb-2 tracking-widest">
                {item.year}
              </span>
              <h2 className="text-2xl font-bold text-[#1A73E8] mb-3 drop-shadow-lg">
                {item.title}
              </h2>
              <h3 className="text-lg font-semibold text-[#D72638] mb-4">{item.subtitle}</h3>
              <p className="text-[#B0B7C3] leading-relaxed text-justify">{item.description}</p>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-5 py-2 rounded-xl font-semibold text-white 
                           bg-gradient-to-r from-[#D72638] to-[#FF5C00] 
                           shadow-md hover:shadow-[#FF5C00]/60 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
