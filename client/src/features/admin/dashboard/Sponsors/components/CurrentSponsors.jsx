import { useState } from 'react';

import SponsorDesktopView from '@/features/admin/dashboard/Sponsors/components/SponsorDesktopView';
import SponsorMobileView from '@/features/admin/dashboard/Sponsors/components/SponsorMobileView';
import SummaryStats from '@/features/admin/dashboard/Sponsors/components/SummaryStats';

const CurrentSponsorList = ({ approvedSponsors, onDeleteSponsor }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  // Filter only approved sponsors
  const sponsors = approvedSponsors?.filter((sponsor) => sponsor.status === 'approved') || [];

  const handleDeleteClick = (sponsor) => {
    setSelectedSponsor(sponsor);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedSponsor && onDeleteSponsor) {
      onDeleteSponsor(selectedSponsor.id);
    }
    setDeleteDialogOpen(false);
    setSelectedSponsor(null);
  };

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
        setSelectedSponsor={setSelectedSponsor}
        onDeleteSponsor={onDeleteSponsor}
      />

      {/* Summary Stats */}
      <SummaryStats sponsors={sponsors} />
    </div>
  );
};

export default CurrentSponsorList;
