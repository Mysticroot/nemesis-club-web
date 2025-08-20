import DashboardCards from '@/features/admin/dashboard/sections/Overview/OverviewCards';
import QuickActions from '@/features/admin/dashboard/sections/Overview/QuickActions';

const Overview = ({ blogs, sponsorRequests, sponsors, activeTab, setActiveTab }) => {
  return (
    <div className="space-y-8">
      

      <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-4">
        <DashboardCards blogs={blogs} sponsorRequests={sponsorRequests} sponsors={sponsors} />
      </div>

      <div className="grid">
        <QuickActions
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sponsorRequests={sponsorRequests}
        />
      </div>
    </div>
  );
};

export default Overview;
