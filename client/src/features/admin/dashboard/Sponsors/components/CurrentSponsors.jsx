import {
  Building,
  Mail,
  Phone,
  Calendar,
  User,
  MessageSquare,
  Trash2,
  AlertTriangle,
} from 'lucide-react';
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
import { useState } from 'react';
import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';

const CurrentSponsorList = ({ approvedSponsors, onDeleteSponsor }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  // Filter only approved sponsors
  const sponsors = approvedSponsors?.filter((sponsor) => sponsor.status === 'approved') || [];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  const handleDeleteClick = (sponsor) => {
    setSelectedSponsor(sponsor);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedSponsor && onDeleteSponsor) {
      onDeleteSponsor(selectedSponsor.id);
    }
    setDeleteDialogOpen(false);
    setSelectedSponsor(null);
  };

  if (sponsors.length === 0) {
    return (
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <HeaderSection
          title="Current Sponsors"
          subtitle="View and manage your club's approved sponsors"
        />

        <Card className="border border-slate-200 shadow-sm bg-white">
          <CardContent className="pt-6">
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Building className="h-12 w-12 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">No Active Sponsors</h3>
              <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                No sponsors have been approved yet. Approved sponsorship applications will appear
                here.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Current Sponsors</h1>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Card className="border border-gray-200 shadow-lg bg-white overflow-hidden">
          <CardContent className="p-0">
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
                      <td className="py-6 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-900 truncate">
                              {sponsor.company_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-2.5 rounded-lg shadow-sm">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{sponsor.name}</p>
                          </div>
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
                              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-200 shadow-sm"
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
                                className="flex-1"
                              >
                                Cancel
                              </Button>
                              <Button
                                variant="destructive"
                                onClick={handleDeleteConfirm}
                                className="flex-1"
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
          </CardContent>
        </Card>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="lg:hidden space-y-4">
        {sponsors.map((sponsor) => (
          <Card
            key={sponsor.id}
            className="border border-slate-200 shadow-lg bg-white overflow-hidden"
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header with company info and delete button */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-lg">
                        {sponsor.company_name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Partnership since {formatDate(sponsor.submitted_at)}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">ID: #{sponsor.id.slice(0, 8)}</p>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-200 shadow-sm"
                        onClick={() => setSelectedSponsor(sponsor)}
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
                          Are you sure you want to remove <strong>{sponsor.company_name}</strong>{' '}
                          from your sponsors list? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          Cancel
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => onDeleteSponsor?.(sponsor.id)}
                          className="flex-1"
                        >
                          Remove Sponsor
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Contact Person */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 rounded-lg border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-slate-600" />
                    <span className="font-medium text-slate-900 text-sm">Contact Person</span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{sponsor.name}</p>
                </div>

                {/* Contact Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-2.5 rounded-lg shadow-sm">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Email Address</p>
                      <p className="text-sm text-slate-700">{sponsor.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-2.5 rounded-lg shadow-sm">
                      <Phone className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Phone Number</p>
                      <p className="text-sm text-slate-700">{sponsor.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-2.5 rounded-lg shadow-sm">
                      <Calendar className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Partnership Started</p>
                      <p className="text-sm text-slate-700">{formatDate(sponsor.submitted_at)}</p>
                    </div>
                  </div>
                </div>

                {/* Partnership Purpose */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card className="border border-slate-200 shadow-lg bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900 text-lg">Sponsorship Summary</h3>
              <p className="text-sm text-slate-600 mt-1">
                Your club is actively supported by {sponsors.length} sponsor
                {sponsors.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center gap-3">
                <Building className="h-7 w-7 text-indigo-600" />
                <span className="text-3xl font-bold text-slate-900">{sponsors.length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrentSponsorList;
