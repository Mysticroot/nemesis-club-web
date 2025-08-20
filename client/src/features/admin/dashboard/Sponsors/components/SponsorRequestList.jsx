import {
  HandHeart,
  Check,
  X,
  Clock,
  CheckCircle,
  XCircle,
  Building,
  User,
  Phone,
  Calendar,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';
import { useSponsor } from '@/context/SponsorContenxt';
import { updateSponsorStatus } from '@/api/sponsorApi';

const SponsorRequestsList = () => {
  const { sponsorRequests, setSponsorRequests, loading } = useSponsor();

  const handleSponsorAction = async (id, action) => {
    try {
      // Update UI optimistically with processing state
      setSponsorRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: 'processing', processing: true } : req
        )
      );

      // Update status in database
      await updateSponsorStatus(id, action);

      // Update the status after successful database update
      setSponsorRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status: action, processing: false } : req))
      );

      console.log(`Successfully ${action} sponsor request ID:`, id);
    } catch (error) {
      console.error(`Failed to ${action} sponsor request:`, error);

      // Revert UI change on error
      setSponsorRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status: 'pending', processing: false } : req))
      );

      // You might want to show a toast notification here
      // toast.error(`Failed to ${action} sponsor request. Please try again.`);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status, processing) => {
    if (processing) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <Clock className="h-3 w-3 animate-spin" />
          Processing
        </span>
      );
    }

    switch (status?.toLowerCase()) {
      case 'approved':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle className="h-3 w-3" />
            Approved
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="h-3 w-3" />
            Rejected
          </span>
        );
      case 'pending':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Clock className="h-3 w-3" />
            Under Review
          </span>
        );
    }
  };

  const isActionDisabled = (request) => {
    return request.processing || ['approved', 'rejected'].includes(request.status?.toLowerCase());
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-slate-200 border-t-indigo-600 mx-auto"></div>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-slate-900">Loading Sponsor Requests</p>
            <p className="text-sm text-slate-600">
              Please wait while we fetch the latest applications...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <HeaderSection
        title="Sponsor Application Review"
        subtitle="Review and manage sponsorship applications"
      />

      {sponsorRequests?.length === 0 ? (
        <Card className="border border-slate-200 shadow-sm bg-white">
          <CardContent className="pt-6">
            <div className="text-center py-16">
              <div className="bg-slate-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <HandHeart className="h-12 w-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">No Pending Applications</h3>
              <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                All sponsorship applications have been processed. New submissions will appear here
                for your review and approval.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <Card className="border border-slate-200 shadow-sm bg-white">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                          Organization Details
                        </th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                          Primary Contact
                        </th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                          Contact Information
                        </th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                          Submission Date
                        </th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                          Application Status
                        </th>
                        <th className="text-center p-4 text-sm font-semibold text-slate-700">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {sponsorRequests.map((request) => (
                        <tr
                          key={request.id}
                          className="hover:bg-slate-50 transition-colors duration-150"
                        >
                          <td className="p-4 border-r border-slate-200">
                            <div className="space-y-1">
                              <div className="font-semibold text-slate-900">
                                {request.company_name}
                              </div>
                              {request.message && (
                                <div className="text-sm text-slate-600 max-w-xs">
                                  <span className="font-medium">Purpose:</span>{' '}
                                  <span className="truncate block" title={request.message}>
                                    {request.message}
                                  </span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="p-4 border-r border-slate-200">
                            <div className="space-y-1">
                              <div className="font-medium text-slate-900">{request.name}</div>
                              <div className="text-sm text-slate-600">{request.email}</div>
                            </div>
                          </td>
                          <td className="p-4 border-r border-slate-200">
                            <div className="text-sm text-slate-700">{request.phone}</div>
                          </td>
                          <td className="p-4 border-r border-slate-200">
                            <div className="text-sm text-slate-700">
                              {formatDate(request.submitted_at)}
                            </div>
                          </td>
                          <td className="p-4 border-r border-slate-200">
                            {getStatusBadge(request.status, request.processing)}
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 justify-center">
                              {!['approved', 'rejected'].includes(request.status?.toLowerCase()) ? (
                                <>
                                  <button
                                    onClick={() => handleSponsorAction(request.id, 'approved')}
                                    disabled={isActionDisabled(request)}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 
                                             bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-600"
                                    title="Approve sponsorship application"
                                  >
                                    <Check className="h-3 w-3" />
                                    Approve
                                  </button>
                                  <button
                                    onClick={() => handleSponsorAction(request.id, 'rejected')}
                                    disabled={isActionDisabled(request)}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200
                                             bg-rose-600 text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2
                                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-600"
                                    title="Reject sponsorship application"
                                  >
                                    <X className="h-3 w-3" />
                                    Reject
                                  </button>
                                </>
                              ) : (
                                <div className="text-xs text-slate-500 font-medium">
                                  Action Completed
                                </div>
                              )}
                            </div>
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
            {sponsorRequests.map((request) => (
              <Card key={request.id} className="border border-slate-200 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header with status */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 p-2 rounded-lg">
                          <Building className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 text-lg">
                            {request.company_name}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1">ID: #{request.id}</p>
                        </div>
                      </div>
                      {getStatusBadge(request.status, request.processing)}
                    </div>

                    {/* Purpose */}
                    {request.message && (
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-sm text-slate-600">
                          <span className="font-medium text-slate-700">Purpose:</span>{' '}
                          {request.message}
                        </p>
                      </div>
                    )}

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <User className="h-4 w-4 text-slate-400" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{request.name}</p>
                          <p className="text-xs text-slate-600">{request.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-slate-400" />
                        <p className="text-sm text-slate-700">{request.phone}</p>
                      </div>
                    </div>

                    {/* Submission Date */}
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <div>
                        <p className="text-xs text-slate-500">Submitted on</p>
                        <p className="text-sm text-slate-700">{formatDate(request.submitted_at)}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-200">
                      {!['approved', 'rejected'].includes(request.status?.toLowerCase()) ? (
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleSponsorAction(request.id, 'approved')}
                            disabled={isActionDisabled(request)}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 
                                     bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-600"
                          >
                            <Check className="h-4 w-4" />
                            Approve Application
                          </button>
                          <button
                            onClick={() => handleSponsorAction(request.id, 'rejected')}
                            disabled={isActionDisabled(request)}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                                     bg-rose-600 text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2
                                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-600"
                          >
                            <X className="h-4 w-4" />
                            Reject Application
                          </button>
                        </div>
                      ) : (
                        <div className="text-center py-3 bg-slate-50 rounded-lg">
                          <p className="text-sm text-slate-600 font-medium">
                            Application has been processed
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SponsorRequestsList;
