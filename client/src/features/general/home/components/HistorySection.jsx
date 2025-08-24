import { Link } from 'react-router-dom';
import his1 from '/his1.jpg';
import his2 from '/his2.jpg';

export default function HistorySection() {
  return (
    <section className="py-20 bg-[#0A1F44] text-white border-b border-[#2A2D34]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-6xl font-extrabold italic tracking-wider text-[#0047FF] mb-3">
            MBR34
          </h2>
          <h3 className="text-xl text-[#B0B7C3] tracking-wide mb-6">
            34th Car of Michigan Baja Racing
          </h3>
          <p className="text-[#B0B7C3] mb-8 leading-relaxed">
            Our 2024 racing season brought speed, innovation, and unforgettable challenges. From the
            first spark of design to the final lap on the track, MBR34 proved to be a testament to
            our engineering skill, teamwork, and relentless drive to push the limits.
          </p>

          <Link
            to="/history"
            className="inline-block px-6 py-3 font-bold uppercase tracking-wide
                       bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8]
                       text-black shadow-lg shadow-[#1A73E8]/40
                       hover:scale-105 transform transition-all duration-300"
          >
            ACHIEVEMENTS
          </Link>
        </div>

        {/* Right Images in Polaroid Style */}
        <div className="md:w-1/2 flex justify-center items-center relative group">
          {/* First Frame */}
          <div
            className="bg-white shadow-xl p-2 rounded-md w-64 h-72 transform -rotate-3 z-20 
                       transition-all duration-500 group-hover:-translate-x-6 group-hover:-rotate-6"
          >
            <img src={his1} alt="MBR34 Side View" className="w-full h-full object-cover rounded" />
          </div>

          {/* Second Frame */}
          <div
            className="bg-white shadow-xl p-2 rounded-md w-64 h-72 transform rotate-3 -ml-10 z-10 
                       transition-all duration-500 group-hover:translate-x-6 group-hover:rotate-6"
          >
            <img
              src={his2}
              alt="MBR34 Action Shot"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
