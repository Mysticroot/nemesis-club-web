// src/features/admin/dashboard/pages/DashboardPage.tsx (AdminDashboard)

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Overview from '@/features/admin/dashboard/sections/Overview/Overview';
import HeaderSection from './HeaderSection';

const AdminDashboard = () => {
  const blogs = [
    {
      id: 1,
      title: 'Welcome to Mechanical Engineering Club',
      author: 'Admin',
      date: '2024-08-15',
      status: 'published',
    },
    {
      id: 2,
      title: 'Upcoming Workshop on CAD Design',
      author: 'Admin',
      date: '2024-08-10',
      status: 'draft',
    },
  ];

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
      <div className="h-10" /> {/* Spacer below fixed navbar */}
      <main className="flex-1 p-1 sm:p-0">
        <Overview sponsorRequests={sponsorRequests} sponsors={sponsors} blogs={blogs} />
      </main>
    </div>
  );
};

export default AdminDashboard;
