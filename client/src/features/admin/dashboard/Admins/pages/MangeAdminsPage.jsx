import { deleteAdmin } from '@/api/adminApi';
import AdminTable from '@/features/admin/dashboard/Admins/components/AdminTable';
import { useSponsor } from '@/context/SponsorContenxt';

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
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Manage Admins</h1>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading admins...</p>
      ) : (
        <AdminTable admins={admins} onDelete={handleDeleteAdmin} />
      )}
    </div>
  );
};

export default ManageAdminsPage;
