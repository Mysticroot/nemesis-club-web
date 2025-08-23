// src/components/home/BlogSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBlogs } from '@/context/BlogContext';
import race22 from '/race22.jpg';
import whatwedo from '/whatwedo.jpg';

export default function BlogSection() {
  const { blogs } = useBlogs();

  // Take latest 3 blogs (assuming `created_at` exists in DB)
  const latestBlogs = blogs
    ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

  const sections = [
    {
      title: 'Who Are We?',
      text: `We are Nemesis Racing — a passionate team of engineering minds carrying forward a legacy of 
    innovation, determination, and teamwork. What started as a small group of enthusiasts has grown 
    into a family of engineers united by the drive to design, build, and race with purpose.`,
      subText: `Our journey is more than just machines and competitions — it’s about pushing boundaries, 
    learning through challenges, and leaving behind a mark of excellence for future innovators. 
    Every project we take on is a step towards carrying our legacy forward while inspiring those 
    who come after us.`,
      stats: [
        { value: '15+', label: 'Years of Legacy' },
        { value: '35+', label: 'Dedicated Engineers' },
      ],
      image: race22,
    },
    {
      
  title: 'What We Do?',
  text: `At Nemesis Racing, we turn passion into performance. Our work is not just about building 
    buggies — it’s about creating machines that embody innovation, teamwork, and resilience. 
    Every design is a reflection of our spirit to engineer beyond limits.`,
  subText: `From sketching the first idea to racing on the track, we handle every stage with precision 
    and dedication. Through prototyping, testing, and continuous improvement, we push boundaries 
    to carry forward a legacy of engineering excellence in motorsport.`,
  stats: [
    { value: '20+', label: 'Awards & Recognitions' },
    { value: '1000+', label: 'Hours of Engineering & Testing' },
  ],
  image: whatwedo,


    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0E0E0E] relative overflow-hidden">
      {/* First 2 Alternating Sections */}
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
                className="text-2xl sm:text-3xl font-bold uppercase tracking-wide 
                mb-6 italic -skew-x-6 text-transparent bg-clip-text
                bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]"
              >
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

        {/* 3rd Section → Dynamic Blogs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6"
        >
          {/* Heading + Button Row */}
          <div className="flex items-center justify-between mb-10">
            <h3
              className="text-2xl sm:text-3xl font-bold uppercase tracking-wide italic -skew-x-6 
              text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]"
            >
              Latest Blogs
            </h3>
            <Link
              to="/blogs"
              className="px-6 py-2 font-bold uppercase tracking-wide
              bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]
              text-black shadow-lg shadow-[#1A73E8]/40
              hover:scale-105 transform transition-all duration-300
              rounded-none"
            >
              View All
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestBlogs?.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-[#111111] rounded-2xl shadow-lg overflow-hidden border border-[#1A73E8]/30"
              >
                <img src={blog.cover_image} alt={blog.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h4
                    className="text-lg font-bold mb-3 text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]"
                  >
                    {blog.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{blog.content}</p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-[#3DF5FF] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
