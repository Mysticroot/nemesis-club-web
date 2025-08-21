import { formatDate } from '@/lib/formatDate';
import { Mail, Phone, Calendar, Check, X } from 'lucide-react';
import StatusBadge from './StatusBadge';

const DesktopView = ({ sponsorRequests, handleSponsorAction }) => {
  return (
    <div className="hidden lg:block">
      <div className="border border-gray-200 shadow-lg bg-white overflow-hidden rounded-lg">
        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Org's
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Contact Person
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Contact Details
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left py-2 px-6 text-sm font-semibold uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-center py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {sponsorRequests.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {item.company_name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3.5 w-3.5 text-indigo-500" />
                          <span className="text-sm text-gray-700">{item.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3.5 w-3.5 text-emerald-500" />
                          <span className="text-sm text-gray-700">{item.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-900">
                          {formatDate(item.submitted_at)}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      {<StatusBadge status={item.status} processing={item.processing} />}
                    </td>
                    <td className="py-6 px-4 text-center">
                      <div className="flex gap-2 justify-center">
                        {item.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleSponsorAction(item.id, 'approved')}
                              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 
                                         bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                              title="Approve"
                            >
                              <Check className="h-3 w-3" />
                            </button>
                            <button
                              onClick={() => handleSponsorAction(item.id, 'rejected')}
                              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200
                                         bg-rose-600 text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                              title="Reject"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </>
                        )}
                      </div>
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

export default DesktopView;
