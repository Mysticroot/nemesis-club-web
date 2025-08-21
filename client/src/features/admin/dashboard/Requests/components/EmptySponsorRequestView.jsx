import { HandHeart } from "lucide-react";

const EmptySponsorRequestView = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Table Management</h1>
        <p className="text-slate-600">Manage your data entries</p>
      </div>

      <div className="border border-slate-200 shadow-sm bg-white rounded-lg">
        <div className="pt-6 p-6">
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
              <HandHeart className="h-12 w-12 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">No Data Available</h3>
            <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
              No entries have been added yet. New submissions will appear here for your review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptySponsorRequestView;
