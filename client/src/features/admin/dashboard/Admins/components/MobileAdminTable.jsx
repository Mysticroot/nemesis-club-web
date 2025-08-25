import { Trash2 } from 'lucide-react';
import { useState } from 'react';
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

const AdminTableMobile = ({ admins, onDelete }) => {
  const [deleteAdminId, setDeleteAdminId] = useState(null);

  const confirmDelete = () => {
    if (deleteAdminId) {
      onDelete(deleteAdminId);
      setDeleteAdminId(null);
    }
  };

  return (
    <div className="space-y-4">
      {admins.map((admin) => (
        <div
          key={admin.id}
          className="bg-white border border-gray-200 rounded-xl shadow p-4 flex flex-col space-y-2"
        >
          <div>
            <span className="text-sm font-semibold text-gray-600">Admin Name:</span>
            <p className="text-gray-900 font-medium">{admin.name}</p>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-600">Email:</span>
            <p className="text-gray-800">{admin.email}</p>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-600">Admin ID:</span>
            <p className="text-xs bg-gray-100 px-2 py-1 rounded inline-block font-mono text-gray-700">
              {admin.id}
            </p>
          </div>
          <div className="flex justify-end">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
                  onClick={() => setDeleteAdminId(admin.id)}
                  title="Delete admin"
                >
                  <Trash2 size={18} />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete admin <strong>{admin.name}</strong>.
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminTableMobile;
