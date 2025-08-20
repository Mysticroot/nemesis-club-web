import { HandHeart, Check, X, Clock, CheckCircle, XCircle } from 'lucide-react';

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
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-300">
          <Clock className="h-3 w-3 animate-spin" />
          PROCESSING
        </span>
      );
    }

    switch (status?.toLowerCase()) {
      case 'approved':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-300">
            <CheckCircle className="h-3 w-3" />
            APPROVED
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-300">
            <XCircle className="h-3 w-3" />
            REJECTED
          </span>
        );
      case 'pending':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-300">
            <Clock className="h-3 w-3" />
            UNDER REVIEW
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <div className="space-y-1">
            <p className="text-lg font-medium text-gray-900">Loading Sponsor Requests</p>
            <p className="text-sm text-gray-600">
              Please wait while we fetch the latest applications...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <HeaderSection
        title="Sponsor Application Review"
        subtitle="Review and manage sponsorship applications"
      />

      {sponsorRequests?.length === 0 ? (
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center py-16">
              <div className="bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <HandHeart className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">No Pending Applications</h3>
              <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                All sponsorship applications have been processed. New submissions will appear here
                for your review and approval.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-gray-900 border-r border-gray-200">
                      Organization Details
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-900 border-r border-gray-200">
                      Primary Contact
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-900 border-r border-gray-200">
                      Contact Information
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-900 border-r border-gray-200">
                      Submission Date
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-900 border-r border-gray-200">
                      Application Status
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sponsorRequests.map((request) => (
                    <tr
                      key={request.id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="p-4 border-r border-gray-200">
                        <div className="space-y-1">
                          <div className="font-semibold text-gray-900">{request.company_name}</div>
                          {request.message && (
                            <div className="text-sm text-gray-600 max-w-xs">
                              <span className="font-medium">Purpose:</span>{' '}
                              <span className="truncate block" title={request.message}>
                                {request.message}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">{request.name}</div>
                          <div className="text-sm text-gray-600">{request.email}</div>
                        </div>
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        <div className="text-sm text-gray-700">{request.phone}</div>
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        <div className="text-sm text-gray-700">
                          {formatDate(request.submitted_at)}
                        </div>
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        {getStatusBadge(request.status, request.processing)}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2 justify-center">
                          {!['approved', 'rejected'].includes(request.status?.toLowerCase()) ? (
                            <>
                              <button
                                onClick={() => handleSponsorAction(request.id, 'approved')}
                                disabled={isActionDisabled(request)}
                                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 
                                         bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600"
                                title="Approve sponsorship application"
                              >
                                <Check className="h-3 w-3" />
                                Approve
                              </button>
                              <button
                                onClick={() => handleSponsorAction(request.id, 'rejected')}
                                disabled={isActionDisabled(request)}
                                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-all duration-200
                                         bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-600"
                                title="Reject sponsorship application"
                              >
                                <X className="h-3 w-3" />
                                Reject
                              </button>
                            </>
                          ) : (
                            <div className="text-xs text-gray-500 font-medium">
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
      )}
    </div>
  );
};

export default SponsorRequestsList;
