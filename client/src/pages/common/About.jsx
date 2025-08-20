// src/pages/AboutUs.jsx
import React from 'react';
import { Users, Lightbulb, Leaf, Trophy } from 'lucide-react'; // icons
import { motion } from 'framer-motion';

export default function AboutUs() {
  const pillars = [
    {
      title: 'Innovation & Engineering',
      description:
        'Participants design and build buggies that are fast, efficient, safe, and technically sound. Creativity in design and practical application of engineering principles are at the core of this competition.',
      icon: <Lightbulb className="w-10 h-10 text-[#1A73E8]" />,
    },
    {
      title: 'Sustainability & Responsibility',
      description:
        'We promote energy-efficient technologies, eco-friendly materials, and responsible practices, ensuring a sustainable future for motorsports and engineering innovation.',
      icon: <Leaf className="w-10 h-10 text-[#C3F73A]" />,
    },
    {
      title: 'Learning & Development',
      description:
        'Hands-on experience in engineering, teamwork, leadership, and problem-solving prepares participants to tackle real-world challenges in their careers and beyond.',
      icon: <Trophy className="w-10 h-10 text-[#FF5C00]" />,
    },
    {
      title: 'Community & Passion',
      description:
        'Mechathon connects students, professionals, and motorsport enthusiasts. We believe in sharing knowledge, building networks, and celebrating passion for engineering and racing.',
      icon: <Users className="w-10 h-10 text-[#D72638]" />,
    },
  ];

  return (
    <div className="bg-[#0E0E0E] min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="/images/buggy-hero.jpg"
          alt="Mechathon Buggy Competition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/80 to-[#2A2D34]/70 flex items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-center 
                       bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#C3F73A] bg-clip-text text-transparent drop-shadow-lg uppercase"
          >
            About Nemesis Racing Club
          </motion.h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-[#1A73E8]"
        >
          Who We Are
        </motion.h2>
        <p className="text-[#B0B7C3] text-lg leading-relaxed">
          Nemesis Racing Club is more than just a competition—it’s a movement. We bring together
          engineering students, innovators, and motorsport enthusiasts to design, build, and race
          buggies that challenge conventional limits. By combining creativity, technical expertise,
          and teamwork, we shape the engineers of tomorrow.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gradient-to-br from-[#0A1F44]/90 to-[#2A2D34]/80 py-16 px-6 md:px-12 shadow-inner">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#3DF5FF]">Our Mission</h3>
            <p className="text-[#B0B7C3] leading-relaxed">
              To provide a real-world platform where young engineers innovate, collaborate, and
              compete while gaining invaluable hands-on experience. We strive to foster innovation,
              sustainability, and teamwork at every stage of the competition.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#C3F73A]">Our Vision</h3>
            <p className="text-[#B0B7C3] leading-relaxed">
              To build a global community of engineers and innovators who push the boundaries of
              automotive engineering while promoting sustainable, responsible, and impactful
              practices.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-gradient-to-br from-[#111111] to-[#2A2D34] rounded-2xl p-6 text-center 
                       border border-[#1A73E8]/20 hover:border-[#1A73E8]/60 
                       shadow-md hover:shadow-[#1A73E8]/50 hover:-translate-y-1 transition-all"
          >
            <div className="flex justify-center mb-4">{pillar.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#1A73E8]">{pillar.title}</h3>
            <p className="text-[#B0B7C3]">{pillar.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Commitment */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#D72638] to-[#FF5C00] bg-clip-text text-transparent"
        >
          Our Commitment
        </motion.h2>
        <p className="text-[#B0B7C3] text-lg leading-relaxed">
          At Nemesis Racing Club, we are committed to creating an unforgettable experience that
          blends education, innovation, and competition. Every edition of the competition is
          designed to push participants to learn, innovate, and excel both on and off the track.
          Together, we drive the future of engineering.
        </p>
      </div>
    </div>
  );
}
