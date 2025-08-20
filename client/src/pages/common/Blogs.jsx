// src/pages/Blogs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    date: '12 JUL',
    category: 'WEC',
    title: 'THE 499PS IN ACTION IN SÃO PAULO',
    image: 'https://www.ferrari.com/images/2024/07/12/499p-wec-saopaulo.jpg',
  },
  {
    id: 2,
    date: '09 JUL',
    category: 'WEC',
    title: 'COMMENTS IN THE RUN-UP TO THE 6 HOURS OF SÃO PAULO',
    image: 'https://www.ferrari.com/images/2024/07/09/499p-team-photo.jpg',
  },
  {
    id: 3,
    date: '08 JUL',
    category: 'HYPERCAR',
    title: 'GIOVINAZZI RENEWS HIS CONTRACT WITH FERRARI',
    image: 'https://www.ferrari.com/images/2024/07/08/giovinazzi.jpg',
  },
  // Add more blogs here...
];

export default function Blogs() {
  return (
    <div className="bg-[#0A1F44] min-h-screen py-12 px-6 md:px-16 text-white pt-24">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center uppercase 
                   text-transparent bg-clip-text 
                   bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8] 
                   tracking-wide"
      >
        Latest Blogs
      </motion.h1>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Link
              to={`/blogs/${blog.id}`}
              className="group bg-[#0E0E0E] border border-[#2A2D34] rounded-2xl overflow-hidden 
                         shadow-lg hover:shadow-[0_0_20px_#1A73E8] transition-all duration-300 
                         flex flex-col"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-2 left-2 bg-gradient-to-r from-[#D72638] to-[#FF5C00] 
                                text-white text-xs font-bold px-3 py-1 rounded-xl shadow-md"
                >
                  {blog.date}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-[#C3F73A] uppercase tracking-wide">
                  {blog.category}
                </p>
                <h2
                  className="text-lg font-extrabold mt-2 text-white 
                             group-hover:text-[#3DF5FF] transition-colors"
                >
                  {blog.title}
                </h2>
                <div className="mt-auto pt-4">
                  <span
                    className="inline-block text-sm font-bold 
                               text-transparent bg-clip-text 
                               bg-gradient-to-r from-[#1A73E8] to-[#3DF5FF] 
                               group-hover:from-[#D72638] group-hover:to-[#FF5C00] 
                               transition-all"
                  >
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
