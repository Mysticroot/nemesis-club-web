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
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">Manage Admins</h1>
      {loading ? (
        <p className="text-gray-500">Loading admins...</p>
      ) : (
        <AdminTable admins={admins} onDelete={handleDeleteAdmin} />
      )}
    </div>
  );
};

export default ManageAdminsPage;
