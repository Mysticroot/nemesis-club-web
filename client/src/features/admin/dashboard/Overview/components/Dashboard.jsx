import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';

import OverviewCards from './OverviewCards';
import QuickActions from './QuickActions';
import { useBlogs } from '@/context/BlogContext';
import { useSponsor } from '@/context/SponsorContenxt';

const AdminDashboard = () => {
  const { blogs, loading } = useBlogs();
  const { sponsorRequests, approvedSponsors, loading: sponsorLoading } = useSponsor();

  if (loading || sponsorLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <HeaderSection title="Dashboard" subtitle="Welcome back to your admin panel." />
      <div className="h-10" />
      <main className="flex-1 p-1 sm:p-0">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-4">
            <OverviewCards
              blogs={blogs}
              sponsorRequests={sponsorRequests}
              sponsors={approvedSponsors}
            />
          </div>

          <div className="grid">
            <QuickActions sponsorRequests={sponsorRequests} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
