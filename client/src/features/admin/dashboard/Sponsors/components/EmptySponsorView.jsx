import { Card, CardContent } from '@/components/ui/card';
import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';
import { Building } from 'lucide-react';

const EmptySponsorView = () => {
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
};

export default EmptySponsorView;
