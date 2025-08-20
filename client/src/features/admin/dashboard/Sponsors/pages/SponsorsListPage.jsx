import SponsorsList from '@/features/admin/dashboard/Sponsors/components/SponsorsList';
import { useSponsor } from '@/context/SponsorContenxt';

const SponsorsListPage = () => {
  const { approvedSponsors, loading } = useSponsor();
  console.log('from', approvedSponsors);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <SponsorsList approvedSponsors={approvedSponsors} />;
};

export default SponsorsListPage;
