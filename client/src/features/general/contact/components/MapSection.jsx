import { motion } from 'framer-motion';

const MapSection = () => {
  return (
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
  );
};

export default MapSection;
