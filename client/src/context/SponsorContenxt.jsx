import { createContext, useContext, useEffect, useState } from 'react';
import { fetchSponsorRequests, fetchApprovedSponsors, updateSponsorStatus } from '@/api/sponsorApi';

const SponsorContext = createContext();

export function SponsorProvider({ children }) {
  const [sponsorRequests, setSponsorRequests] = useState([]);
  const [approvedSponsors, setApprovedSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadSponsorRequests = async () => {
    try {
      setLoading(true);
      const data = await fetchSponsorRequests();
      setSponsorRequests(data);
    } catch (err) {
      console.error('Failed to fetch sponsor requests');
    } finally {
      setLoading(false);
    }
  };

  const loadApprovedSponsors = async () => {
    try {
      const data = await fetchApprovedSponsors();
      setApprovedSponsors(data);
    } catch (err) {
      console.error('Failed to fetch approved sponsors');
    }
  };

  const changeSponsorStatus = async (id, status) => {
    try {
      await updateSponsorStatus(id, status);
      await loadSponsorRequests(); // Refresh state
      await loadApprovedSponsors();
    } catch (err) {
      console.error('Failed to update sponsor status');
    }
  };

  useEffect(() => {
    loadSponsorRequests();
    loadApprovedSponsors();
  }, []);

  return (
    <SponsorContext.Provider
      value={{
        sponsorRequests,
        setSponsorRequests,
        approvedSponsors,
        loading,
        reloadRequests: loadSponsorRequests,
        reloadApproved: loadApprovedSponsors,
        updateStatus: changeSponsorStatus,
      }}
    >
      {children}
    </SponsorContext.Provider>
  );
}

export const useSponsor = () => useContext(SponsorContext);
