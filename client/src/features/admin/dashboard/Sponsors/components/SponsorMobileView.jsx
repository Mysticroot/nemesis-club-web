import { Mail, Phone, Calendar, User, Trash2, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { formatDate } from '@/lib/formatDate';

const SponsorMobileView = ({ sponsors,setSelectedSponsor, onDeleteSponsor }) => {
  return (
    <div className="lg:hidden space-y-4">
      {sponsors.map((sponsor) => (
        <Card
          key={sponsor.id}
          className="border border-slate-200 shadow-lg bg-white overflow-hidden"
        >
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Header with company info and delete button */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 text-lg">{sponsor.company_name}</h3>
                    <p className="text-sm text-slate-600">
                      Partnership since {formatDate(sponsor.submitted_at)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">ID: #{sponsor.id.slice(0, 8)}</p>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-200 shadow-sm"
                      onClick={() => setSelectedSponsor(sponsor)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        Remove Sponsor
                      </DialogTitle>
                      <DialogDescription>
                        Are you sure you want to remove <strong>{sponsor.company_name}</strong> from
                        your sponsors list? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        Cancel
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => onDeleteSponsor?.(sponsor.id)}
                        className="flex-1"
                      >
                        Remove Sponsor
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Contact Person */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-slate-600" />
                  <span className="font-medium text-slate-900 text-sm">Contact Person</span>
                </div>
                <p className="text-sm text-slate-700 font-medium">{sponsor.name}</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-2.5 rounded-lg shadow-sm">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email Address</p>
                    <p className="text-sm text-slate-700">{sponsor.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-2.5 rounded-lg shadow-sm">
                    <Phone className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Phone Number</p>
                    <p className="text-sm text-slate-700">{sponsor.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-2.5 rounded-lg shadow-sm">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Partnership Started</p>
                    <p className="text-sm text-slate-700">{formatDate(sponsor.submitted_at)}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SponsorMobileView;
