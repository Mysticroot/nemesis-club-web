import { useState } from 'react';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

import AppSidebar from '@/components/common/AppSidebar';
import Overview from '@/features/admin/dashboard/manage-overview/Overview';
import SponsorsList from '@/features/admin/dashboard/manage-sponsors/SponsorsList';
import SponsorRequestsList from '@/features/admin/dashboard/manage-sponsor-requests/SponsorRequestList';
import BlogList from '@/features/admin/dashboard/manage-blog/BlogList';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [blogs, setBlogs] = useState([
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
  ]);

  const [sponsorRequests, setSponsorRequests] = useState([
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
  ]);

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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col">
          <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <div className="flex h-14 items-center px-4 gap-4">
              <SidebarTrigger />
              <div className="flex-1" />
            </div>
          </header>

          {/* Spacer to push content below fixed navbar */}
          <div className="h-14" />

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6">
            {activeTab === 'overview' && (
              <Overview
                sponsorRequests={sponsorRequests}
                sponsors={sponsors}
                blogs={blogs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            )}
            {activeTab === 'blogs' && <BlogList />}
            {activeTab === 'requests' && <SponsorRequestsList />}
            {activeTab === 'sponsors' && <SponsorsList />}
            {activeTab === 'settings' && renderSettings()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
