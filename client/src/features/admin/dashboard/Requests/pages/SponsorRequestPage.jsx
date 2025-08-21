import DesktopView from '@/features/admin/dashboard/Requests/components/DesktopView';
import MobileView from '@/features/admin/dashboard/Requests/components/MobileView';
import EmptySponsorRequestView from '@/features/admin/dashboard/Requests/components/EmptySponsorRequestView';
import SummaryStats from '@/features/admin/dashboard/Requests/components/SummaryStats';

import { useSponsor } from '@/context/SponsorContenxt';
import { useSponsorAction } from '@/hooks/useSponsorAction';

const SponsorRequestPage = () => {
  const { sponsorRequests, loading } = useSponsor();
  const { handleSponsorAction } = useSponsorAction();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (sponsorRequests.length === 0) {
    return <EmptySponsorRequestView />;
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Sponsors Request Management</h1>
      </div>

      {/* Desktop Table View */}
      <DesktopView sponsorRequests={sponsorRequests} handleSponsorAction={handleSponsorAction} />

      {/* Mobile/Tablet Card View */}
      <MobileView sponsorRequests={sponsorRequests} handleSponsorAction={handleSponsorAction} />

      {/* Summary Stats */}
      <SummaryStats sponsorRequests={sponsorRequests} />
    </div>
  );
};

export default SponsorRequestPage;
