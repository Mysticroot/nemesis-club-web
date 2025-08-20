// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#0E0E0E] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 to-[#1A73E8]/70"></div>
        <h1 className="relative text-4xl md:text-5xl font-extrabold tracking-wider text-white drop-shadow-lg">
          Contact <span className="text-[#FF5C00]">Nemesis</span>
        </h1>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#1A73E8]">Get in Touch</h2>
          <p className="text-gray-300">
            Whether you are a racer, sponsor, or motorsport enthusiast, we’d love to hear from you.
            Reach out to us via email, phone, or drop by our racing HQ.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-[#3DF5FF]" size={24} />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-gray-400">contact@nemesisracing.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#C3F73A]" size={24} />
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-[#FF5C00]" size={24} />
              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p className="text-gray-400">
                  Nemesis Racing HQ, Engineering Campus, Pune, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#2A2D34] p-8 rounded-2xl shadow-xl space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-[#0E0E0E] border border-[#1A73E8] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DF5FF]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-[#0E0E0E] border border-[#1A73E8] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DF5FF]"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full bg-[#0E0E0E] border border-[#1A73E8] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DF5FF]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-[#0E0E0E] border border-[#1A73E8] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DF5FF]"
            required
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-gradient-to-r from-[#1A73E8] to-[#3DF5FF] text-black px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-[#3DF5FF]/50 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 pb-16"
      >
        <iframe
          title="Mechathon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456!2d73.854923!3d18.520430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08a1234567%3A0xabcdef123456!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="300"
          className="rounded-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
}
