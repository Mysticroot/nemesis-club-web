import SponsorHistoryTable from '@/features/admin/dashboard/Sponsors-History/components/SponsorHistoryTable';
import SponsorHistoryTableMobile from '@/features/admin/dashboard/Sponsors-History/components/SponsorHistoryTableMobile';

import PageHeader from '../../components/PageHeader';
import EmptyHistory from '../components/EmptyHistory';
import { useSponsor } from '@/context/SponsorContext';
import { History } from 'lucide-react';

const SponsorHistoryPage = () => {
  const { sponsorHistory, loading } = useSponsor();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!sponsorHistory || sponsorHistory.length === 0) {
    return <EmptyHistory />;
  }

  return (
    <div className="p-4">
      <PageHeader
        title="Sponsorship History – Opted Out"
        subtitle="Review the history of opted-out sponsors"
        icon={History}
      />
      <>
        {/* Desktop */}
        <div className="hidden lg:block">
          <SponsorHistoryTable sponsors={sponsorHistory} />
        </div>

        {/* Mobile */}
        <div className="block lg:hidden">
          <SponsorHistoryTableMobile sponsors={sponsorHistory} />
        </div>
      </>
    </div>
  );
};

export default SponsorHistoryPage;
