// src/components/common/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const socials = [
    { Component: FaInstagram, link: 'https://instagram.com' },
    { Component: FaFacebookF, link: 'https://facebook.com' },
    { Component: FaTwitter, link: 'https://twitter.com' },
    { Component: FaLinkedinIn, link: 'https://linkedin.com' },
    { Component: FaYoutube, link: 'https://youtube.com' },
  ];

  return (
    <footer className="relative bg-black text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-black opacity-80 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About + Follow Us */}
          <div>
            <img src="/images/logo.png" alt="Nemesis Racing" className="h-16 mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              Nemesis Racing is a competitive racing team dedicated to pushing the limits of
              performance, engineering, and teamwork. Passion drives us forward.
            </p>

            {/* Follow Us (moved here) */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
              <div className="flex space-x-4 text-xl">
                {socials.map(({ Component, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition transform hover:scale-110"
                  >
                    <Component />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-medium text-gray-200">Address:</span>
                <br />
                Nemesis Racing HQ, Pune, India
              </li>
              <li>
                <span className="font-medium text-gray-200">Phone:</span> +91 98765 43210
              </li>
              <li>
                <span className="font-medium text-gray-200">Email:</span>{' '}
                <a
                  href="mailto:contact@nemesisracing.com"
                  className="hover:text-yellow-400 transition"
                >
                  contact@nemesisracing.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/history" className="hover:text-yellow-400 transition">
                  History
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-yellow-400 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/become-sponsor" className="hover:text-yellow-400 transition">
                  Become a Sponsor
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Find Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.986790379563!2d73.85398177465241!3d18.529499068902513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0883858b873%3A0x1d68fbf2cac75519!2sCOEP%20Technological%20University!5e0!3m2!1sen!2sin!4v1717502913153!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nemesis Racing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
