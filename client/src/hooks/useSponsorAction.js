import { updateSponsorStatus } from '@/api/sponsorApi';
import { useSponsor } from '@/context/SponsorContenxt';

export const useSponsorAction = () => {
  const { setSponsorRequests, reloadApproved } = useSponsor();

  const handleSponsorAction = async (id, action) => {
    try {
      // Optimistic UI update
      setSponsorRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: 'processing', processing: true } : req
        )
      );

      // Actual backend update
      await updateSponsorStatus(id, action);
      await reloadApproved();
      // Update after successful change
      setSponsorRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status: action, processing: false } : req))
      );

      console.log(`Successfully ${action} sponsor request ID:`, id);
    } catch (error) {
      console.error(`Failed to ${action} sponsor request:`, error);

      // Rollback UI on failure
      setSponsorRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status: 'pending', processing: false } : req))
      );
    }
  };

  return { handleSponsorAction };
};
