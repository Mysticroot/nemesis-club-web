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

const AdminTable = ({ admins, onDelete }) => {
  const [deleteAdminId, setDeleteAdminId] = useState(null);

  const confirmDelete = () => {
    if (deleteAdminId) {
      onDelete(deleteAdminId);
      setDeleteAdminId(null);
    }
  };

  return (
    <div className="lg:block">
      <div className="border border-gray-200 shadow-lg bg-white overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Admin Name
                </th>
                <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Admin ID
                </th>
                <th className="text-center py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {admins.map((admin, index) => (
                <tr
                  key={admin.id}
                  className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="py-5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {admin.name}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-700 whitespace-nowrap">
                    {admin.email}
                  </td>
                  <td className="py-5 px-6 text-xs text-gray-600 font-mono whitespace-nowrap">
                    <span className="bg-gray-100 rounded px-2 py-1 inline-block">{admin.id}</span>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button
                          className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
                          onClick={() => setDeleteAdminId(admin.id)}
                          title="Delete admin"
                        >
                          <Trash2 size={16} />
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. It will permanently delete admin{' '}
                            <strong>{admin.name}</strong>.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel
                            className="cursor-pointer"
                            onClick={() => setDeleteAdminId(null)}
                          >
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={confirmDelete}
                            className="bg-red-600 hover:bg-red-700 cursor-pointer"
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
      </div>
    </div>
  );
};

export default AdminTable;
