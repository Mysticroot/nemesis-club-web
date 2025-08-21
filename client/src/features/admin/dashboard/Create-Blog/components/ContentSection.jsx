import { FileText, AlertCircle, CheckCircle } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const ContentSection = ({ formData, handleInputChange, errors }) => {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
            <FileText className="h-5 w-5 text-gray-700" />
          </div>
          Content
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <Textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your blog content here. Share your insights, experiences, and knowledge..."
            rows={20}
            className={`resize-none text-base leading-relaxed bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-900/20 ${
              errors.content ? 'border-red-500 focus:border-red-500' : ''
            }`}
          />
          {errors.content && (
            <p className="text-red-600 text-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {errors.content}
            </p>
          )}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {formData.content.length} characters • {Math.ceil(formData.content.length / 5)} words
            </p>
            {formData.content.length >= 50 && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                Sufficient content
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentSection;
