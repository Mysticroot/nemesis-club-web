import { Users } from 'lucide-react';

import PageHeader from '@/features/admin/dashboard/components/PageHeader';
import AdminTable from '@/features/admin/dashboard/Admins/components/AdminTable';
import AdminMobileTable from '@/features/admin/dashboard/Admins/components/MobileAdminTable';

import { useSponsor } from '@/context/SponsorContenxt';
import { deleteAdmin } from '@/api/adminApi';

const ManageAdminsPage = () => {
  const { admins, setAdmins, loading } = useSponsor();

  const handleDeleteAdmin = async (adminId) => {
    try {
      await deleteAdmin(adminId);
      setAdmins((prev) => prev.filter((admin) => admin.id !== adminId));
    } catch (err) {
      console.error('Failed to delete admin:', err);
    }
  };

  return (
    <div>
      <PageHeader title="Manage Admins" subtitle="View and manage all admins" icon={Users} />
      {loading ? (
        <p className="text-gray-500">Loading admins...</p>
      ) : (
        <>
          <div className="hidden lg:block">
            <AdminTable admins={admins} onDelete={handleDeleteAdmin} />
          </div>
          <div className="block lg:hidden">
            <AdminMobileTable admins={admins} onDelete={handleDeleteAdmin} />
          </div>
        </>
      )}
    </div>
  );
};

export default ManageAdminsPage;
