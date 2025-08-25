// src/pages/BecomeSponsor.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BecomeSponsor() {
  return (
    <div className="min-h-screen bg-[#0A1F44] px-6 md:px-12 lg:px-24 py-16 pt-32">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#C3F73A] drop-shadow-lg">
          Become a Sponsor
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#B0B7C3] max-w-2xl mx-auto">
          Join forces with <span className="text-[#FF5C00] font-bold">Nemesis Racing Club</span> and
          fuel innovation, speed, and passion.
        </p>
      </motion.div>

      {/* Sponsor Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#0E0E0E] rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-2xl mx-auto border border-[#2A2D34]"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#FFFFFF] mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl bg-[#2A2D34] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] shadow-inner"
          />
        </div>

        {/* Company */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#FFFFFF] mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full px-4 py-3 rounded-xl bg-[#2A2D34] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DF5FF]"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#FFFFFF] mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-[#2A2D34] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D72638]"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#FFFFFF] mb-2">Sponsorship Message</label>
          <textarea
            rows="5"
            placeholder="Tell us how you'd like to collaborate..."
            className="w-full px-4 py-3 rounded-xl bg-[#2A2D34] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00]"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-4 font-bold rounded-xl text-white uppercase shadow-lg transition-all bg-gradient-to-r from-[#D72638] to-[#FF5C00] hover:shadow-[#FF5C00]/50"
        >
          Submit Sponsorship Request
        </motion.button>
      </motion.form>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 text-sm font-bold text-[#FFFFFF] rounded-xl border border-[#3DF5FF] hover:bg-[#1A73E8] hover:border-[#1A73E8] transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
