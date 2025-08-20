import { Link } from 'react-router-dom';
import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import BlogsSection from '../../components/Blogs/BlogsSection';
import HistorySection from '@/components/History/HistorySection';
import SponserSection from '../../components/Sponsers/SponserSection';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section - full width */}
      <HeroSection />

      {/* Other sections also full width */}
      <BlogsSection />
      <HistorySection />
      <SponserSection />
    </div>
  );
};

export default HomePage;
