import { FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const TitleSection = ({ formData, errors, handleInputChange }) => {
  return (
    <div className="w-full">
      <div className="border border-gray-200 shadow-lg bg-white rounded-xl">
        <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <FileText className="h-5 w-5 text-indigo-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Blog Title</h3>
        </div>

        <CardContent className="space-y-4 p-6">
          <div className="space-y-2">
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter an engaging title for your blog post..."
              className={`text-base h-12 bg-white border text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition ${
                errors.title
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-300'
              }`}
              maxLength={100}
            />

            {errors.title && (
              <p className="text-red-600 text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {errors.title}
              </p>
            )}

            <div className="flex justify-between items-center pt-1 text-sm text-gray-500">
              <span>{formData.title.length}/100 characters</span>
              {formData.title.length >= 10 && (
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Good length
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default TitleSection;
