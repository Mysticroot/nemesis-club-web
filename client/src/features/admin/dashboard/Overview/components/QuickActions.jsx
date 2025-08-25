import { Plus, Users, Eye, Lock, File, Home } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const QuickActions = ({ sponsorRequests }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <Button asChild variant="outline" className="justify-start">
              <Link to="/admin/dashboard/create-blog">
                <Plus className="h-4 w-4 mr-2" />
                Create New Blog
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link to="/admin/dashboard/manage-blogs">
                <File className="h-4 w-4 mr-2" />
                Manage Blog
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link to="/admin/dashboard/sponsor-requests">
                <Eye className="h-4 w-4 mr-2" />
                Review Sponsor Requests
                {sponsorRequests.length > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {sponsorRequests.length}
                  </span>
                )}
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link to="/admin/dashboard/sponsors">
                <Users className="h-6 w-6 mr-2" />
                Manage Sponsors
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link to="/admin/dashboard/manage-admins">
                <Lock className="h-6 w-6 mr-2" />
                Manage Admins
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link to="/">
                <Home className="h-6 w-6 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default QuickActions;
