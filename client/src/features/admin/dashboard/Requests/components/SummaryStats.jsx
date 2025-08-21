import { Building } from 'lucide-react';

const SummaryStats = ({sponsorRequests}) => {
  return (
    <div className="border border-slate-200 shadow-lg bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 overflow-hidden rounded-lg">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">Data Summary</h3>
            <p className="text-sm text-slate-600 mt-1">
              Managing {sponsorRequests.length} entr{sponsorRequests.length !== 1 ? 'ies' : 'y'} in
              the system
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center gap-3">
              <Building className="h-7 w-7 text-indigo-600" />
              <span className="text-3xl font-bold text-slate-900">{sponsorRequests.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
