import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';
import React from 'react';

const SummaryStats = ({ sponsors }) => {
  return (
    <Card className="border border-slate-200 shadow-lg bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">Sponsorship Summary</h3>
            <p className="text-sm text-slate-600 mt-1">
              Your club is actively supported by {sponsors.length} sponsor
              {sponsors.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center gap-3">
              <Building className="h-7 w-7 text-indigo-600" />
              <span className="text-3xl font-bold text-slate-900">{sponsors.length}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryStats;
