import { motion } from 'framer-motion';
const BlogHeading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold mb-12 text-center uppercase 
                   text-transparent bg-clip-text 
                   bg-gradient-to-r from-[#1A73E8] via-[#3DF5FF] to-[#1A73E8] 
                   tracking-wide"
    >
      Latest Blogs
    </motion.h1>
  );
};

export default BlogHeading;
