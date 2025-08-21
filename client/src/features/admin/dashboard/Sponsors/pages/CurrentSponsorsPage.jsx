import CurrentSponsorList from '@/features/admin/dashboard/Sponsors/components/CurrentSponsors';
import EmptySponsorView from '@/features/admin/dashboard/Sponsors/components/EmptySponsorView';

import { useSponsor } from '@/context/SponsorContenxt';

const CurrentSponsorsPage = () => {
  const { approvedSponsors, loading } = useSponsor();
  const sponsors = approvedSponsors?.filter((sponsor) => sponsor.status === 'approved') || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (sponsors.length === 0) {
    <EmptySponsorView />;
  }

  return <CurrentSponsorList approvedSponsors={approvedSponsors} />;
};

export default CurrentSponsorsPage;
