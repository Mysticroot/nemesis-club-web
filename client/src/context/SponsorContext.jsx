import { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchSponsorRequests,
  fetchApprovedSponsors,
  updateSponsorStatus,
  fetchSponsorHistory,
} from '@/api/sponsorApi';
import { fetchAllAdmins } from '@/api/adminApi';
import { useAuth } from '@/context/AuthContext';

const SponsorContext = createContext();

export function SponsorProvider({ children }) {
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [sponsorRequests, setSponsorRequests] = useState([]);
  const [approvedSponsors, setApprovedSponsors] = useState([]);
  const [sponsorHistory, setSponsorHistory] = useState([]);
  const [admins, setAdmins] = useState([]);
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

  const loadAdmins = async () => {
    try {
      setLoading(true);
      const data = await fetchAllAdmins();
      setAdmins(data);
    } catch (err) {
      console.error('Failed to fetch admins');
    } finally {
      setLoading(false);
    }
  };

  const loadSponsorHistory = async () => {
    try {
      setLoading(true);
      const data = await fetchSponsorHistory();
      setSponsorHistory(data);
    } catch (err) {
      console.error('Failed to fetch sponsor history');
    } finally {
      setLoading(false);
    }
  };

  const changeSponsorStatus = async (id, status) => {
    try {
      await updateSponsorStatus(id, status);
      await loadSponsorRequests(); // Refresh state
      await loadApprovedSponsors();
      await loadSponsorHistory();
    } catch (err) {
      console.error('Failed to update sponsor status');
    }
  };

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      loadSponsorRequests();
      loadApprovedSponsors();
      loadAdmins();
      loadSponsorHistory();
    }
  }, [authLoading, isAuthenticated]);

  return (
    <SponsorContext.Provider
      value={{
        sponsorRequests,
        setSponsorRequests,
        approvedSponsors,
        admins,
        setAdmins,
        loading,
        reloadRequests: loadSponsorRequests,
        reloadApproved: loadApprovedSponsors,
        updateStatus: changeSponsorStatus,
        sponsorHistory,
        reloadSponsorHistory: loadSponsorHistory,
      }}
    >
      {children}
    </SponsorContext.Provider>
  );
}

export const useSponsor = () => useContext(SponsorContext);
