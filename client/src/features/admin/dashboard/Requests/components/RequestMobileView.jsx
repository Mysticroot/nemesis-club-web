import { formatDate } from '@/lib/formatDate';
import { User, Mail, Phone, Calendar, Check, X, MessageSquare } from 'lucide-react';
import StatusBadge from './StatusBadge';

const RequestMobileView = ({ sponsorRequests, handleSponsorAction }) => {
  return (
    <div className="lg:hidden space-y-4">
      {sponsorRequests.map((item) => (
        <div
          key={item.id}
          className="border border-slate-200 shadow-lg bg-white overflow-hidden rounded-lg"
        >
          <div className="p-6">
            <div className="space-y-4">
              {/* Header with company info and actions */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 text-lg">{item.company_name}</h3>
                    <p className="text-sm text-slate-600">
                      Submitted {formatDate(item.submitted_at)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">ID: #{item.id}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {item.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleSponsorAction(item.id, 'approved')}
                        className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 
                                   bg-emerald-600 text-white hover:bg-emerald-700"
                      >
                        <Check className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleSponsorAction(item.id, 'rejected')}
                        className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-medium rounded-lg transition-all duration-200
                                   bg-rose-600 text-white hover:bg-rose-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                {<StatusBadge status={item.status} processing={item.processing} />}
              </div>

              {/* Message/Purpose */}
              {item.message && (
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 rounded-lg border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-slate-600" />
                    <span className="font-medium text-slate-900 text-sm">Purpose</span>
                  </div>
                  <p className="text-sm text-slate-700">{item.message}</p>
                </div>
              )}

              {/* Contact Person */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-slate-600" />
                  <span className="font-medium text-slate-900 text-sm">Contact Person</span>
                </div>
                <p className="text-sm text-slate-700 font-medium">{item.name}</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-2.5 rounded-lg shadow-sm">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email Address</p>
                    <p className="text-sm text-slate-700">{item.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-2.5 rounded-lg shadow-sm">
                    <Phone className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Phone Number</p>
                    <p className="text-sm text-slate-700">{item.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-2.5 rounded-lg shadow-sm">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Submission Date</p>
                    <p className="text-sm text-slate-700">{formatDate(item.submitted_at)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestMobileView;
