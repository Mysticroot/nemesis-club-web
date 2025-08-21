import CurrentSponsorList from '@/features/admin/dashboard/Sponsors/components/CurrentSponsors';
import { useSponsor } from '@/context/SponsorContenxt';

const CurrentSponsorsPage = () => {
  const { approvedSponsors, loading } = useSponsor();

  if (loading) {
    return <div>Loading...</div>;
  }
  return <CurrentSponsorList approvedSponsors={approvedSponsors} />;
};

export default CurrentSponsorsPage;
