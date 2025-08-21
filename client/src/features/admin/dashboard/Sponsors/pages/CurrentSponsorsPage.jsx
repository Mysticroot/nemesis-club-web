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
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Sponsors Request Management</h1>
      </div>

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
