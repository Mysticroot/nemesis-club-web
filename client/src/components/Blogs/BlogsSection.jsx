// src/components/home/BlogSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

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
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop',
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
    <section className="py-12 sm:py-16 bg-[#0A0A0A]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 px-4 sm:px-6 max-w-6xl mx-auto gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Latest from Our Blog</h2>
        <Link
          to="/blogs"
          className="px-4 py-2 bg-[#0047FF] text-white hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300 font-semibold uppercase tracking-wide shadow-md inline-block text-center rounded-md"
        >
          View All
        </Link>
      </div>

      {/* Alternating Sections */}
      <div className="space-y-16 sm:space-y-20">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center px-4 sm:px-6 ${
              idx % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            {/* Text */}
            <div className={`${idx % 2 === 1 ? 'md:col-start-2' : ''} order-2 md:order-1`}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{sec.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {sec.text}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {sec.subText}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {sec.stats.map((s, i) => (
                  <div className="text-center" key={i}>
                    <div className="text-2xl sm:text-3xl font-bold text-[#0047FF] mb-2">
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
              <img
                src={sec.image}
                alt={sec.title}
                className="shadow-xl mx-auto w-full max-w-lg sm:max-w-2xl h-64 sm:h-80 object-cover 
                  [clip-path:polygon(8%_0,100%_0,92%_100%,0%_100%)] 
                  border-4 border-[#0047FF] rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
