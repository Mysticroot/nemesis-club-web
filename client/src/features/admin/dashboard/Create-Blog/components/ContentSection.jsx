import { FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const ContentSection = ({ formData, handleInputChange, errors }) => {
  const wordCount = Math.ceil(formData.content.trim().split(/\s+/).length);

  return (
    <div className="w-full">
      <div className="border border-gray-200 shadow-lg bg-white rounded-xl">
        <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <FileText className="h-5 w-5 text-indigo-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Content</h3>
        </div>

        <CardContent className="space-y-4 p-6">
          <div className="space-y-2">
            <Textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Write your blog content here. Share your insights, experiences, and knowledge..."
              rows={18}
              className={`resize-none text-base leading-relaxed bg-white border text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition ${
                errors.content
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-300'
              }`}
            />

            {errors.content && (
              <p className="text-red-600 text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {errors.content}
              </p>
            )}

            <div className="flex justify-between items-center pt-1 text-sm text-gray-500">
              <span>
                {formData.content.length} characters • {wordCount} words
              </span>
              {formData.content.length >= 50 && (
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Sufficient content
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default ContentSection;
