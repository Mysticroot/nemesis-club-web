import { HandHeart, Check, X } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';
import { useSponsor } from '@/context/SponsorContenxt';
import { updateSponsorStatus } from '@/api/sponsorApi';

const SponsorRequestsList = () => {
  const { sponsorRequests, setSponsorRequests, loading } = useSponsor();

  const handleSponsorAction = async (id, action) => {
    try {
      // Update UI optimistically first
      setSponsorRequests((prev) =>
        prev.map((req) =>
          req.id === id
            ? { ...req, status: action === 'approve' ? 'approved' : 'rejected', processing: true }
            : req
        )
      );

      // Update status in DB
      await updateSponsorStatus(id, action);

      // Remove from pending list after successful update
      setSponsorRequests((prev) => prev.filter((req) => req.id !== id));

      console.log(`${action.toUpperCase()} sponsor request ID:`, id);
    } catch (error) {
      console.error('Failed to update sponsor status:', error);
      // Revert UI change on error
      setSponsorRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status: 'pending', processing: false } : req))
      );
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-sm text-muted-foreground">Loading sponsor requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <HeaderSection title="Sponsor Application Review" subtitle="Review Pending Applications" />

      {sponsorRequests?.length === 0 ? (
        <Card className="border border-gray-300">
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <HandHeart className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">No Pending Applications</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                All sponsorship applications have been processed. New submissions will appear here
                for official review.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border border-gray-300 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="text-left p-4 font-bold text-gray-800 border-r border-gray-200">
                      ORGANIZATION
                    </th>
                    <th className="text-left p-4 font-bold text-gray-800 border-r border-gray-200">
                      PRIMARY CONTACT
                    </th>
                    <th className="text-left p-4 font-bold text-gray-800 border-r border-gray-200">
                      CONTACT INFO
                    </th>
                    <th className="text-left p-4 font-bold text-gray-800 border-r border-gray-200">
                      DATE SUBMITTED
                    </th>
                    <th className="text-left p-4 font-bold text-gray-800 border-r border-gray-200">
                      STATUS
                    </th>
                    <th className="text-center p-4 font-bold text-gray-800">OFFICIAL ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorRequests.map((request, index) => (
                    <tr
                      key={request.id}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 border-r border-gray-200">
                        <div className="font-semibold text-gray-900">{request.company_name}</div>
                        {request.message && (
                          <div
                            className="text-xs text-gray-600 mt-1 max-w-xs truncate"
                            title={request.message}
                          >
                            Purpose: {request.message}
                          </div>
                        )}
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        <div className="font-medium text-gray-900">{request.name}</div>
                        <div className="text-sm text-gray-600">{request.email}</div>
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
                        <span
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                            request.processing
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {request.processing ? 'PROCESSING' : 'UNDER REVIEW'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleSponsorAction(request.id, 'approve')}
                            disabled={request.processing}
                            className="inline-flex items-center justify-center gap-1 rounded text-xs font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed border border-green-700 h-8 px-3"
                          >
                            <Check className="h-3 w-3" />
                            APPROVE
                          </button>
                          <button
                            onClick={() => handleSponsorAction(request.id, 'reject')}
                            disabled={request.processing}
                            className="inline-flex items-center justify-center gap-1 rounded text-xs font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed border border-red-700 h-8 px-3"
                          >
                            <X className="h-3 w-3" />
                            REJECT
                          </button>
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
