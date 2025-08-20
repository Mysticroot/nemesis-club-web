// src/components/home/SponsorsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const sponsors = [
  { name: 'Pirelli', logo: '/images/sponsors/pirelli.png' },
  { name: 'Aramco', logo: '/images/sponsors/aramco.png' },
  { name: 'Salesforce', logo: '/images/sponsors/salesforce.png' },
  { name: 'Shell', logo: '/images/sponsors/shell.png' },
  { name: 'Rolex', logo: '/images/sponsors/rolex.png' },
  { name: 'AWS', logo: '/images/sponsors/aws.png' },
];

export default function SponsorsSection() {
  return (
    <section className="relative py-20 bg-[#111111] text-white overflow-hidden border-t border-gray-800">
      {/* Inline keyframes for infinite scroll */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slide-track {
          display: flex;
          width: max-content;
          animation: slide 20s linear infinite;
        }
      `}</style>

      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Title + Become Sponsor Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-center md:text-left">
            Our Proud Sponsors
          </h2>
          <Link
            to="/become-sponsor"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 shadow-lg shadow-red-500/30 transition-transform transform hover:scale-105"
          >
            Become a Sponsor <ArrowRight size={20} />
          </Link>
        </div>

        {/* Sponsors infinite carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#111111] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#111111] to-transparent z-10" />

          <div className="slide-track gap-12">
            {sponsors.concat(sponsors).map((sponsor, idx) => (
              <Link
                key={idx}
                to="/sponsors"
                aria-label={`View details about ${sponsor.name}`}
                className="flex items-center justify-center flex-shrink-0 w-40 h-24 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-10 text-center text-gray-400 text-lg italic">
          Driving innovation and passion, together.
        </p>
      </div>
    </section>
  );
}
