import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const socials = [
    { Component: FaInstagram, link: 'https://www.instagram.com/nemesis.racing/?hl=en' },
    { Component: FaFacebookF, link: 'https://facebook.com' },
    { Component: FaTwitter, link: 'https://twitter.com' },
    { Component: FaLinkedinIn, link: 'https://linkedin.com' },
    { Component: FaYoutube, link: 'https://www.youtube.com/@teamnemesisracing' },
  ];

  return (
    <footer className="relative bg-[#0E0E0E] text-[#B0B7C3] pt-16 pb-8 overflow-hidden border-t border-[#2A2D34]">
      {/* Background accent (deep blue → transparent) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(26,115,232,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About + Follow Us */}
          <div className="space-y-6">
            <img src="/logo.png" alt="Nemesis Racing" className="h-16" />
            <p className="text-sm leading-relaxed">
              Nemesis Racing is a competitive racing team dedicated to pushing the limits of
              performance, engineering, and teamwork. Passion drives us forward.
            </p>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-extrabold text-white tracking-wide">Follow Us</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map(({ Component, link }, i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-2 rounded-full border border-[#2A2D34] bg-[#0E0E0E]/60 
                               hover:bg-[#0A1F44]/70 hover:border-[#1A73E8] 
                               transition-colors"
                    aria-label={`Follow us on ${Component.displayName || 'social'}`}
                  >
                    <Component className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold text-white">Address:</span>
                <br />
                Nemesis Racing HQ, Pune, India
              </li>
              <li>
                <span className="font-semibold text-white">Phone:</span> +91 98765 XXXXX
              </li>
              <li>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a
                  href="mailto:contact@nemesisracing.com"
                  className="hover:text-white hover:underline underline-offset-4 transition"
                >
                  contact@nemesisracing.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links (use <Link /> for internal navigation) */}
          <div>
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Achievements" className="hover:text-white transition">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/SponsorForm" className="hover:text-white transition">
                  Become a Sponsor
                </Link>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-4">Find Us</h3>
            <div className="rounded-2xl overflow-hidden border border-[#2A2D34] bg-[#0A1F44]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.986790379563!2d73.85398177465241!3d18.529499068902513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0883858b873%3A0x1d68fbf2cac75519!2sCOEP%20Technological%20University!5e0!3m2!1sen!2sin!4v1717502913153!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="map"
                className=""
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[#2A2D34] pt-6 text-center text-sm">
          <div className="flex items-center justify-center gap-2 text-[#B0B7C3]">
            <span>© {new Date().getFullYear()} Nemesis Racing.</span>
            <span className="text-[#B0B7C3]">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
