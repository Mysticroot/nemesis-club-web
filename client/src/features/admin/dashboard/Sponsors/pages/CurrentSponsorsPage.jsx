import { HandHeart } from 'lucide-react';

import PageHeader from '@/features/admin/dashboard/components/PageHeader';
import SponsorDesktopView from '@/features/admin/dashboard/Sponsors/components/SponsorDesktopView';
import SponsorMobileView from '@/features/admin/dashboard/Sponsors/components/SponsorMobileView';
import SummaryStats from '@/features/admin/dashboard/Sponsors/components/SummaryStats';
import EmptySponsorView from '@/features/admin/dashboard/Sponsors/components/EmptySponsorView';

import { useSponsor } from '@/context/SponsorContenxt';
import { useSponsorDelete } from '@/hooks/useSponsorDelete';

const CurrentSponsorsPage = () => {
  const { approvedSponsors, loading } = useSponsor();

  const sponsors = approvedSponsors?.filter((sponsor) => sponsor.status === 'approved') || [];
  const {
    deleteDialogOpen,
    setDeleteDialogOpen,
    selectedSponsor,
    setSelectedSponsor,
    handleDeleteClick,
    handleDeleteConfirm,
  } = useSponsorDelete();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (sponsors.length === 0) {
    return <EmptySponsorView />;
  }

  return (
    <div className="">
      {/* Header Section */}
      <PageHeader
        title="Current Sponsors"
        subtitle="Manage and review current sponsors"
        icon={HandHeart}
      />

      {/* Desktop Table View */}
      <SponsorDesktopView
        sponsors={sponsors}
        handleDeleteClick={handleDeleteClick}
        handleDeleteConfirm={handleDeleteConfirm}
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialogOpen={setDeleteDialogOpen}
        setSelectedSponsor={setSelectedSponsor}
        selectedSponsor={selectedSponsor}
      />

      {/* Mobile/Tablet Card View */}
      <SponsorMobileView
        sponsors={sponsors}
        handleDeleteClick={handleDeleteClick}
        handleDeleteConfirm={handleDeleteConfirm}
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialogOpen={setDeleteDialogOpen}
        setSelectedSponsor={setSelectedSponsor}
        selectedSponsor={selectedSponsor}
      />

      {/* Summary Stats */}
      <SummaryStats sponsors={sponsors} />
    </div>
  );
};

export default CurrentSponsorsPage;
