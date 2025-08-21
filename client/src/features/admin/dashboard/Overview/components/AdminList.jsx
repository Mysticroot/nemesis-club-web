import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const AdminList = ({ admins = [], handleDeleteAdmin }) => {
  const [deleteAdminId, setDeleteAdminId] = useState(null);

  const confirmDelete = () => {
    if (deleteAdminId) {
      handleDeleteAdmin(deleteAdminId);
      setDeleteAdminId(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
          <tr>
            <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
              Admin Names
            </th>
            <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
              Email
            </th>
            <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
              Admin ID
            </th>
            <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {admins.map((admin, index) => (
            <tr
              key={admin.id}
              className={`hover:bg-blue-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}
            >
              <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
                {admin.name}
              </td>
              <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-600">{admin.email}</td>
              <td className="px-8 py-5 whitespace-nowrap text-xs text-gray-500 font-mono bg-gray-50 rounded-md px-2 py-1">
                {admin.id}
              </td>
              <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-600">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button
                      className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
                      onClick={() => setDeleteAdminId(admin.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the admin account
                        for {admin.name}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel onClick={() => setDeleteAdminId(null)}>
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={confirmDelete}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
