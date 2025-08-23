// src/pages/Sponsors.jsx
import React from 'react';
import { motion } from 'framer-motion';

const sponsorSections = [
  {
    id: 'title',
    title: 'Title Sponsors',
    description:
      'Our title sponsors drive Nemesis Racing Club forward with their unmatched support and vision for the future of motorsport.',
    sponsors: [
      { name: 'Title Sponsor 1', image: 'https://via.placeholder.com/250x120' },
      { name: 'Title Sponsor 2', image: 'https://via.placeholder.com/250x120' },
    ],
  },
  {
    id: 'manufacturers',
    title: 'Manufacturers',
    description:
      'Industry-leading manufacturers provide us with cutting-edge technology and racing-grade components.',
    sponsors: [
      { name: 'Manufacturer 1', image: 'https://via.placeholder.com/220x120' },
      { name: 'Manufacturer 2', image: 'https://via.placeholder.com/220x120' },
      { name: 'Manufacturer 3', image: 'https://via.placeholder.com/220x120' },
    ],
  },
  {
    id: 'past',
    title: 'Past Sponsors',
    description:
      'We honor and thank our past sponsors who have helped shape our journey and achievements.',
    sponsors: [
      { name: 'Past Sponsor 1', image: 'https://via.placeholder.com/200x100' },
      { name: 'Past Sponsor 2', image: 'https://via.placeholder.com/200x100' },
      { name: 'Past Sponsor 3', image: 'https://via.placeholder.com/200x100' },
    ],
  },
  {
    id: 'individuals',
    title: 'Individuals Who Helped',
    description:
      'A heartfelt thanks to the individuals who contributed their time, resources, and passion to Nemesis Racing.',
    sponsors: [
      { name: 'John Doe', image: 'https://via.placeholder.com/180x100' },
      { name: 'Jane Smith', image: 'https://via.placeholder.com/180x100' },
    ],
  },
];

export default function Sponsors() {
  return (
    <div className="bg-[#0A1F44] min-h-screen py-16 px-6 md:px-12 text-white pt-32">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto text-center
          text-4xl md:text-5xl font-extrabold mb-16 uppercase
          text-transparent bg-clip-text 
          bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]
          tracking-wide italic"
      >
        Our Sponsors
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-2/3 h-[4px] bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8] skew-x-12 rounded-full"></span>
      </motion.h1>

      {/* Sections */}
      <div className="space-y-20 max-w-6xl mx-auto">
        {sponsorSections.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-[#3DF5FF]">
              {section.title}
            </h2>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-[#B0B7C3] mb-10">{section.description}</p>

            {/* Sponsor Logos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {section.sponsors.map((sponsor, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0E0E0E] border border-[#2A2D34] rounded-2xl shadow-md 
                  hover:shadow-[0_0_25px_#1A73E8] transition-all duration-300 p-4 w-full max-w-[260px]"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="mx-auto h-24 object-contain"
                  />
                  <p className="mt-4 text-sm font-semibold text-white">{sponsor.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
