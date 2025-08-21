import { useState, useEffect } from 'react';

import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';
import OverviewCards from '@/features/admin/dashboard/Overview/components/OverviewCards';
import QuickActions from '@/features/admin/dashboard/Overview/components/QuickActions';

import { useBlogs } from '@/context/BlogContext';
import { useSponsor } from '@/context/SponsorContenxt';
import AdminList from '@/features/admin/dashboard/Overview/components/AdminList';

import { deleteAdmin, fetchAllAdmins } from '@/api/adminApi';

const DashboardPage = () => {
  const { blogs, loading } = useBlogs();
  const { sponsorRequests, approvedSponsors, loading: sponsorLoading } = useSponsor();
  const [admins, setAdmins] = useState([]);
  const [adminsLoading, setAdminsLoading] = useState(true);

  useEffect(() => {
    const loadAdmins = async () => {
      try {
        setAdminsLoading(true);
        const data = await fetchAllAdmins();
        setAdmins(data);
      } catch (error) {
        console.error('Failed to fetch admins:', error);
      } finally {
        setAdminsLoading(false);
      }
    };

    loadAdmins();
  }, []);

  const handleDeleteAdmin = async (adminId) => {
    try {
      await deleteAdmin(adminId);
      setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin.id !== adminId));
    } catch (error) {
      console.error('Failed to delete admin:', error);
    }
  };

  if (loading || sponsorLoading || adminsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <HeaderSection title="Dashboard" subtitle="Welcome back to your admin panel." />
      <div className="h-10" />
      <main className="flex-1 p-1 sm:p-0">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-4">
            <OverviewCards
              blogs={blogs}
              sponsorRequests={sponsorRequests}
              sponsors={approvedSponsors}
            />
          </div>

          <div className="grid">
            <QuickActions sponsorRequests={sponsorRequests} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Admin List</h2>
            <AdminList admins={admins} handleDeleteAdmin={handleDeleteAdmin} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
