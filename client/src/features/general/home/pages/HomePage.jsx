import HeroSection from '@/features/general/home/components/HeroSection';
import BlogsSection from '@/features/general/home/components/BlogsSection';
import HistorySection from '@/features/general/home/components/HistorySection';
import SponserSection from '@/features/general/home/components/SponsorSection';

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
