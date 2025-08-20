import HeroSection from '@/features/general/home/HeroSection';
import BlogsSection from '@/features/general/blog/BlogsSection';
import HistorySection from '@/features/general/history/HistorySection';
import SponserSection from '@/features/general/sponsor/SponsorSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BlogsSection />
      <HistorySection />
      <SponserSection />
    </div>
  );
};

export default HomePage;
