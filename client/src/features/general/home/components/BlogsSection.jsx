// src/components/home/BlogSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BlogSection() {
  const sections = [
    {
      title: 'Engineering the Future',
      text: `Our team combines years of mechanical engineering expertise with cutting-edge technology
        to create innovative solutions. From conceptual design to final implementation, we
        deliver excellence in every project.`,
      subText: `Specializing in buggy design, mechanical systems, and advanced engineering solutions,
        we've established ourselves as leaders in the field through consistent innovation and
        technical excellence.`,
      stats: [
        { value: '50+', label: 'Projects Completed' },
        { value: '15+', label: 'Team Members' },
      ],
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop',
    },
    {
      title: 'Innovation at Every Step',
      text: `We believe innovation starts from day one. By combining creativity with practical
        engineering, we ensure that our designs are not just concepts but realities that make
        a difference.`,
      subText: `From prototyping to testing, every step is carefully measured to push the limits
        of what's possible in mechanical engineering and racing technology.`,
      stats: [
        { value: '20+', label: 'Awards Won' },
        { value: '10+', label: 'Years Experience' },
      ],
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
    },
    {
      title: 'Shaping Tomorrow',
      text: `Our focus isn't just today—it's about preparing for the future. We actively invest
        in research, sustainable solutions, and empowering young engineers to take the lead.`,
      subText: `Through collaboration, knowledge-sharing, and real-world problem solving, we are
        building a legacy of innovation and impact for the generations to come.`,
      stats: [
        { value: '100+', label: 'Students Trained' },
        { value: '30+', label: 'Industry Collaborations' },
      ],
      image:
        'https://images.unsplash.com/photo-1526716173434-a1d1b1b1b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0E0E0E] relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 px-4 sm:px-6 max-w-7xl mx-auto gap-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold uppercase tracking-widest 
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]"
        >
          Latest from Our Blog
        </motion.h2>

        <Link
          to="/blogs"
          className="px-6 py-3 font-bold uppercase tracking-wide
           bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]
           text-black shadow-lg shadow-[#1A73E8]/40
           hover:scale-105 transform transition-all duration-300"
        >
          View All
        </Link>
      </div>

      {/* Alternating Sections */}
      <div className="space-y-20 sm:space-y-28">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center px-4 sm:px-6 ${
              idx % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            {/* Text */}
            <div className={`${idx % 2 === 1 ? 'md:col-start-2' : ''} order-2 md:order-1`}>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide 
             mb-6 italic -skew-x-6"
              >
                {' '}
                {sec.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">{sec.text}</p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                {sec.subText}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {sec.stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-3xl sm:text-4xl font-extrabold 
                                    bg-gradient-to-r from-[#D72638] to-[#FF5C00] 
                                    text-transparent bg-clip-text drop-shadow-lg mb-2"
                    >
                      {s.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className={`flex justify-center order-1 md:order-2 ${
                idx % 2 === 1 ? 'md:col-start-1' : ''
              }`}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                src={sec.image}
                alt={sec.title}
                className="w-full max-w-lg sm:max-w-2xl h-64 sm:h-80 object-cover
                           rounded-2xl border-4 border-[#1A73E8] 
                           shadow-xl shadow-[#1A73E8]/30
                           [clip-path:polygon(8%_0,100%_0,92%_100%,0%_100%)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
