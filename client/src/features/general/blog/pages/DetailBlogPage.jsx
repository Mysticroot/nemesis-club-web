// src/pages/BlogDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    date: '12 JUL 2024',
    category: 'WEC',
    title: 'THE 499PS IN ACTION IN SÃO PAULO',
    mainImage: 'https://www.ferrari.com/images/2024/07/12/499p-wec-saopaulo.jpg',
    secondaryImage: 'https://www.ferrari.com/images/2024/07/12/499p-wec-saopaulo-2.jpg',
    content: [
      'The 499PS showcased incredible performance during the São Paulo event, thrilling fans with its speed and agility on the track.',
      "Team engineers highlighted the car's improvements in aerodynamics and handling, which allowed for more competitive lap times.",
      'Drivers commented on how the car’s setup optimized tire usage and overall performance in varying weather conditions.',
    ],
  },
  {
    id: 2,
    date: '09 JUL 2024',
    category: 'WEC',
    title: 'COMMENTS IN THE RUN-UP TO THE 6 HOURS OF SÃO PAULO',
    mainImage: 'https://www.ferrari.com/images/2024/07/09/499p-team-photo.jpg',
    content: [
      'Team principals and drivers shared insights ahead of the 6 Hours of São Paulo, emphasizing strategy and preparation.',
      'Focus was on maintaining consistency and extracting maximum performance while managing endurance and pit stops.',
      'Fans were eager to see how the team’s recent improvements would affect race performance and standings.',
    ],
  },
  {
    id: 3,
    date: '08 JUL 2024',
    category: 'HYPERCAR',
    title: 'GIOVINAZZI RENEWS HIS CONTRACT WITH FERRARI',
    mainImage: 'https://www.ferrari.com/images/2024/07/08/giovinazzi.jpg',
    content: [
      'Antonio Giovinazzi has renewed his contract with Ferrari, continuing to contribute to the team’s hypercar program.',
      'The contract reflects Ferrari’s confidence in Giovinazzi’s technical feedback and consistent performance.',
      'Fans look forward to seeing him in upcoming races and how his expertise will influence car development.',
    ],
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A1F44]">
        <p className="text-xl text-[#D72638] font-bold">Blog not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0A1F44] min-h-screen text-white">
      {/* Hero Section */}
      {blog.mainImage && (
        <div className="relative w-full h-[400px] md:h-[600px]">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={blog.mainImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0E0E0E]/50 to-transparent flex items-end">
            <div className="p-6 md:p-12 max-w-5xl">
              <p className="text-sm font-bold uppercase text-[#C3F73A] tracking-wide mb-2">
                {blog.category} | {blog.date}
              </p>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-5xl font-extrabold leading-tight uppercase 
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]
                           italic tracking-wide"
              >
                {blog.title}
              </motion.h1>
            </div>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-12">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg leading-relaxed text-[#B0B7C3]"
        >
          {blog.content.map((para, idx) => (
            <p key={idx} className="hover:text-white transition-colors">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Optional Secondary Image */}
        {blog.secondaryImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10"
          >
            <img
              src={blog.secondaryImage}
              alt={`${blog.title} secondary`}
              className="w-full h-80 md:h-[500px] object-cover rounded-2xl 
                         shadow-lg shadow-[#1A73E8]/30"
            />
          </motion.div>
        )}

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link
            to="/blogs"
            className="inline-block px-10 py-3 font-bold uppercase tracking-wide 
                       rounded-2xl shadow-md transition-all duration-300
                       text-white bg-gradient-to-r from-[#1A73E8] to-[#3DF5FF] 
                       hover:from-[#D72638] hover:to-[#FF5C00]
                       hover:shadow-[0_0_20px_#3DF5FF]"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
