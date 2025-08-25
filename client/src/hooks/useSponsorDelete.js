import { useState } from 'react';
import { deleteSponsorRequest } from '@/api/sponsorApi';
import { useSponsor } from '@/context/SponsorContext';

export const useSponsorDelete = () => {
  const { reloadApproved, reloadSponsorHistory } = useSponsor();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const handleDeleteClick = (sponsor) => {
    setSelectedSponsor(sponsor);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedSponsor) return;

    await deleteSponsorRequest(selectedSponsor.id);
    await reloadApproved();
    await reloadSponsorHistory();
    setDeleteDialogOpen(false);
    setSelectedSponsor(null);
  };

  return {
    deleteDialogOpen,
    setDeleteDialogOpen,
    selectedSponsor,
    setSelectedSponsor,
    handleDeleteClick,
    handleDeleteConfirm,
  };
};
