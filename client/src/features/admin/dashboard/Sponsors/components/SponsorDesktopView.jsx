import { Mail, Phone, Calendar, User, Trash2, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { formatDate } from '@/lib/formatDate';

const SponsorDesktopView = ({
  sponsors,
  selectedSponsor,
  handleDeleteClick,
  handleDeleteConfirm,
  setDeleteDialogOpen,
  deleteDialogOpen,
}) => {
  return (
    <div className="hidden lg:block">
      <div className="border border-gray-200 shadow-lg bg-white overflow-hidden rounded-lg">
        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Organization
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Contact Person
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Contact Details
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Partnership Date
                  </th>
                  <th className="text-center py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {sponsors.map((sponsor, index) => (
                  <tr
                    key={sponsor.id}
                    className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="py-4 px-6">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {sponsor.company_name}
                      </p>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-2.5 rounded-lg shadow-sm">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900">{sponsor.name}</p>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3.5 w-3.5 text-indigo-500" />
                          <span className="text-sm text-gray-700">{sponsor.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3.5 w-3.5 text-emerald-500" />
                          <span className="text-sm text-gray-700">{sponsor.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-900">
                          {formatDate(sponsor.submitted_at)}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <Dialog
                        open={deleteDialogOpen && selectedSponsor?.id === sponsor.id}
                        onOpenChange={setDeleteDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-200 shadow-sm cursor-pointer"
                            onClick={() => handleDeleteClick(sponsor)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5 text-red-500" />
                              Remove Sponsor
                            </DialogTitle>
                            <DialogDescription>
                              Are you sure you want to remove{' '}
                              <strong>{selectedSponsor?.company_name}</strong> from your sponsors
                              list? This action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className="flex gap-2">
                            <Button
                              variant="outline"
                              onClick={() => setDeleteDialogOpen(false)}
                              className="flex-1 cursor-pointer"
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="destructive"
                              onClick={handleDeleteConfirm}
                              className="flex-1 cursor-pointer"
                            >
                              Remove Sponsor
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorDesktopView;
