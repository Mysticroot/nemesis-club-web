import SponsorsList from '@/features/admin/dashboard/Sponsors/components/SponsorsList';
import { useSponsor } from '@/context/SponsorContenxt';

const SponsorsListPage = () => {
  const { approvedSponsors, loading } = useSponsor();

  if (loading) {
    return <div>Loading...</div>;
  }
  return <SponsorsList approvedSponsors={approvedSponsors} />;
};

export default SponsorsListPage;
