import { Eye, Calendar, User, Globe, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SideBar = ({ isLoading, showPreview, setShowPreview, handlePublish }) => {
  return (
    <div className="xl:col-span-1 space-y-6">
      {/* Author Information */}
      <Card className="bg-white border border-gray-200 shadow-lg rounded-xl">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">Author Information</h3>
        </div>
        <CardContent>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Admin User</p>
              <p className="text-sm text-gray-600">Content Creator</p>
              <div className="flex items-center gap-1 mt-1">
                <Calendar className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-500">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={() => setShowPreview(!showPreview)}
          variant="outline"
          className="w-full h-12 text-base bg-white border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400"
        >
          <Eye className="h-4 w-4 mr-2" />
          {showPreview ? 'Hide Preview' : 'Preview Blog'}
        </Button>

        <Button
          onClick={handlePublish}
          disabled={isLoading}
          className="w-full h-12 text-base bg-gray-900 text-white hover:bg-gray-800"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Publishing...
            </>
          ) : (
            <>
              <Globe className="h-4 w-4 mr-2" />
              Publish Now
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
