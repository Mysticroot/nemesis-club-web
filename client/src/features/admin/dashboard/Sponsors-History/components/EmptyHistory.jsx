import { Card, CardContent } from '@/components/ui/card';

import { Building, History } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const EmptyHistory = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Sponsorship History – Opted Out"
        subtitle="Review the history of opted-out sponsors"
        icon={History}
      />

      <Card className="border border-slate-200 shadow-sm bg-white">
        <CardContent className="pt-6">
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Building className="h-12 w-12 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900">No Opted Out Sponsors</h3>
            <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
              Currently, no record exists for previously opted-out sponsors.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmptyHistory;
