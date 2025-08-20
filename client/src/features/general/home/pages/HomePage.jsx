import HeroSection from '@/features/general/home/components/HeroSection';
import BlogsSection from '@/features/general/home/components/BlogsSection';
import HistorySection from '@/features/general/home/components/HistorySection';
import SponserSection from '@/features/general/home/components/SponsorSection';

const HomePage = () => {
  return (
    <div className="bg-[#0E0E0E] text-white font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Blog */}
      <BlogsSection />

      {/* History */}
      <HistorySection />

      {/* Sponsors */}
      <SponserSection />
    </div>
  );
};

export default HomePage;
