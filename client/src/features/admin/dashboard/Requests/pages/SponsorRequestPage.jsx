import { Handshake } from 'lucide-react';
import PageHeader from '@/features/admin/dashboard/components/PageHeader';

import RequestDesktopView from '@/features/admin/dashboard/Requests/components/RequestDesktopView';
import RequestMobileView from '@/features/admin/dashboard/Requests/components/RequestMobileView';
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
    <div>
      {/* Header Section */}

      <PageHeader
        title="Sponsors Requests"
        subtitle="Manage and review sponsor requests"
        icon={Handshake}
      />
      {/* Desktop Table View */}
      <RequestDesktopView
        sponsorRequests={sponsorRequests}
        handleSponsorAction={handleSponsorAction}
      />

      {/* Mobile/Tablet Card View */}
      <RequestMobileView
        sponsorRequests={sponsorRequests}
        handleSponsorAction={handleSponsorAction}
      />

      {/* Summary Stats */}
      <SummaryStats sponsorRequests={sponsorRequests} />
    </div>
  );
};

export default SponsorRequestPage;
