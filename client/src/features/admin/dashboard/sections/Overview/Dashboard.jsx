import { useState, useEffect } from 'react';
// import Overview from '@/features/admin/dashboard/sections/Overview/Overview';
import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';

import { fetchBlogs } from '@/api/blogApi';
import OverviewCards from './OverviewCards';
import QuickActions from './QuickActions';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const blogs = await fetchBlogs();
      setBlogs(blogs);
    };
    loadBlogs();
  }, []);

  const sponsorRequests = [
    {
      id: 1,
      company: 'TechCorp Industries',
      amount: '$5,000',
      status: 'pending',
      date: '2024-08-18',
    },
    {
      id: 2,
      company: 'MechPro Solutions',
      amount: '$3,000',
      status: 'pending',
      date: '2024-08-17',
    },
  ];

  const sponsors = [
    {
      id: 1,
      company: 'Innovative Engineering',
      amount: '$10,000',
      date: '2024-01-15',
      tier: 'Gold',
    },
    {
      id: 2,
      company: 'Future Tech',
      amount: '$7,500',
      date: '2024-02-20',
      tier: 'Silver',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeaderSection title="Dashboard" subtitle="Welcome back to your admin panel." />
      <div className="h-10" />
      <main className="flex-1 p-1 sm:p-0">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-4">
            <OverviewCards blogs={blogs} sponsorRequests={sponsorRequests} sponsors={sponsors} />
          </div>

          <div className="grid">
            <QuickActions sponsorRequests={sponsorRequests} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
