import { useState } from 'react';
import { deleteSponsorRequest } from '@/api/sponsorApi';
import { useSponsor } from '@/context/SponsorContenxt';

export const useSponsorDelete = () => {
  const { reloadApproved } = useSponsor();
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
