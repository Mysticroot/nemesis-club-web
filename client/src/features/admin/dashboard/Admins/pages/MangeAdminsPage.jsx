import { useEffect, useState } from 'react';

import { fetchAllAdmins, deleteAdmin } from '@/api/adminApi';
import AdminTable from '@/features/admin/dashboard/Admins/components/AdminTable';

const ManageAdminsPage = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAdmins = async () => {
    try {
      setLoading(true);
      const data = await fetchAllAdmins();
      setAdmins(data);
    } catch (err) {
      console.error('Error loading admins:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAdmin = async (adminId) => {
    try {
      await deleteAdmin(adminId);
      setAdmins((prev) => prev.filter((admin) => admin.id !== adminId));
    } catch (err) {
      console.error('Failed to delete admin:', err);
    }
  };

  useEffect(() => {
    loadAdmins();
  }, []);

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
