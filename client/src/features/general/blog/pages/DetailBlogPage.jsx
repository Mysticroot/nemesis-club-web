// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlogs } from '@/context/BlogContext';
import { motion } from 'framer-motion';

export default function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useBlogs();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Blog not found 🚨
      </div>
    );
  }

  return (
    <div className="bg-[#0A1F44] min-h-screen text-white">
      {/* --- Hero Image --- */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden pt-20">
        {/* 👆 pt-20 pushes content below navbar (adjust if navbar taller/shorter) */}
        <img
          src={blog.cover_image || '/his1.jpg'}
          alt={blog.title}
          className="w-full h-full object-cover rounded-b-2xl shadow-2xl"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

        {/* Title overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-12 left-6 md:left-16 max-w-3xl"
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight 
                         bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#FF5C00] 
                         bg-clip-text text-transparent drop-shadow-xl"
          >
            {blog.title}
          </h1>
        </motion.div>
      </div>

      {/* --- Content Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 md:px-12 py-12"
      >
        {/* Meta */}
        <div className="flex items-center gap-6 mb-6">
          <span className="text-sm text-gray-400 italic">
            {new Date(blog.created_at).toLocaleDateString()}
          </span>
          {blog.author_id && (
            <span className="text-sm text-[#1A73E8] font-medium tracking-wide">By Admin</span>
          )}
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg prose-invert max-w-none leading-relaxed text-gray-200">
          <p>{blog.content}</p>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            to="/blogs"
            className="inline-block px-6 py-3 rounded-2xl font-semibold text-white 
                       bg-gradient-to-r from-[#D72638] to-[#FF5C00] 
                       hover:from-[#FF5C00] hover:to-[#D72638] 
                       shadow-lg shadow-red-900/40 transition-all"
          >
            ← Back to Blogs
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
