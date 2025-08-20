// src/components/home/HistorySection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function HistorySection() {
  return (
    <section className="py-20 bg-[#0A1F44] text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-6xl font-extrabold italic tracking-wider text-[#0047FF] mb-3">
            MBR34
          </h2>
          <h3 className="text-xl text-gray-300 tracking-wide mb-6">
            34th Car of Michigan Baja Racing
          </h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Our 2024 racing season brought speed, innovation, and unforgettable challenges. From the
            first spark of design to the final lap on the track, MBR34 proved to be a testament to
            our engineering skill, teamwork, and relentless drive to push the limits.
          </p>

          {/* Updated: Link instead of button */}
          <Link
            to="/history"
            className="inline-block px-6 py-3 bg-[#0047FF] text-white font-bold hover:bg-white hover:text-black transition-colors"
          >
            TEAM HISTORY
          </Link>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 flex justify-center relative group">
          <img
            src="/images/mbr34-1.jpg"
            alt="MBR34 Side View"
            className="w-80 h-56 object-cover shadow-lg transform rotate-[-3deg] relative z-10 
                       transition-all duration-500 group-hover:scale-105 group-hover:-translate-x-6 
                       group-hover:shadow-[0_0_25px_rgba(0,71,255,0.7)]"
          />
          <img
            src="/images/mbr34-2.jpg"
            alt="MBR34 Action Shot"
            className="w-80 h-56 object-cover shadow-lg absolute top-10 left-10 transform rotate-[3deg] 
                       transition-all duration-500 group-hover:scale-105 group-hover:translate-x-6 
                       group-hover:shadow-[0_0_25px_rgba(239,68,68,0.7)]"
          />
        </div>
      </div>
    </section>
  );
}
