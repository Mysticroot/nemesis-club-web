import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/features/admin/dashboard/components/AppSidebar';

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <div className="flex h-14 items-center px-4 gap-4">
              <SidebarTrigger className='cursor-pointer' />
              <div className="flex-1" />
            </div>
          </header>

          <div className="h-14" />
          <main className="flex-1 p-4 sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
