import { Building, Mail, Phone, Calendar, User, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';

const SponsorsList = ({ approvedSponsors }) => {
  // Filter only approved sponsors
  const sponsors = approvedSponsors?.filter((sponsor) => sponsor.status === 'approved') || [];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  const getInitials = (companyName) => {
    return companyName
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
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
              <div className="bg-slate-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Building className="h-12 w-12 text-slate-400" />
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
      <HeaderSection
        title="Current Sponsors"
        subtitle={`Managing ${sponsors.length} active sponsor${sponsors.length !== 1 ? 's' : ''} for your club`}
      />

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Card className="border border-slate-200 shadow-sm bg-white">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                      Organization
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                      Contact Person
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                      Contact Details
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700 border-r border-slate-200">
                      Partnership Purpose
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">
                      Partnership Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {sponsors.map((sponsor) => (
                    <tr
                      key={sponsor.id}
                      className="hover:bg-slate-50 transition-colors duration-150"
                    >
                      <td className="p-4 border-r border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm">
                            {getInitials(sponsor.company_name)}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">
                              {sponsor.company_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-r border-slate-200">
                        <div className="font-medium text-slate-900">{sponsor.name}</div>
                      </td>
                      <td className="p-4 border-r border-slate-200">
                        <div className="space-y-1">
                          <div className="text-sm text-slate-700 flex items-center gap-2">
                            <Mail className="h-3 w-3 text-slate-400" />
                            {sponsor.email}
                          </div>
                          <div className="text-sm text-slate-700 flex items-center gap-2">
                            <Phone className="h-3 w-3 text-slate-400" />
                            {sponsor.phone}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-r border-slate-200">
                        <div className="max-w-xs">
                          {sponsor.message ? (
                            <p
                              className="text-sm text-slate-700 line-clamp-3"
                              title={sponsor.message}
                            >
                              {sponsor.message}
                            </p>
                          ) : (
                            <span className="text-sm text-slate-400 italic">
                              No message provided
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-slate-700">
                          {formatDate(sponsor.submitted_at)}
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
        {sponsors.map((sponsor) => (
          <Card key={sponsor.id} className="border border-slate-200 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header with company info */}
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm">
                    {getInitials(sponsor.company_name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 text-lg">{sponsor.company_name}</h3>
                    <p className="text-sm text-slate-600">
                      Partnership since {formatDate(sponsor.submitted_at)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">ID: #{sponsor.id.slice(0, 8)}</p>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-slate-600" />
                    <span className="font-medium text-slate-900 text-sm">Contact Person</span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{sponsor.name}</p>
                </div>

                {/* Contact Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-2 rounded-md">
                      <Mail className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email Address</p>
                      <p className="text-sm text-slate-700">{sponsor.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-2 rounded-md">
                      <Phone className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Phone Number</p>
                      <p className="text-sm text-slate-700">{sponsor.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-2 rounded-md">
                      <Calendar className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Partnership Started</p>
                      <p className="text-sm text-slate-700">{formatDate(sponsor.submitted_at)}</p>
                    </div>
                  </div>
                </div>

                {/* Partnership Purpose */}
                {sponsor.message && (
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-start gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-slate-600 mt-0.5" />
                      <span className="font-medium text-slate-900 text-sm">
                        Partnership Purpose
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{sponsor.message}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card className="border border-slate-200 shadow-sm bg-gradient-to-r from-slate-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">Sponsorship Summary</h3>
              <p className="text-sm text-slate-600 mt-1">
                Your club is actively supported by {sponsors.length} sponsor
                {sponsors.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                <Building className="h-6 w-6 text-indigo-600" />
                <span className="text-2xl font-bold text-slate-900">{sponsors.length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SponsorsList;
