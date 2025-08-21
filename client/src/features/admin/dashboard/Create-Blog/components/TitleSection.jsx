import { FileText, AlertCircle, CheckCircle } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const TitleSection = ({ formData, errors, handleInputChange }) => {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
            <FileText className="h-5 w-5 text-gray-700" />
          </div>
          Blog Title
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <Input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter an engaging title for your blog post..."
            className={`text-lg h-12 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-900/20 ${
              errors.title ? 'border-red-500 focus:border-red-500' : ''
            }`}
          />
          {errors.title && (
            <p className="text-red-600 text-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {errors.title}
            </p>
          )}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{formData.title.length}/100 characters</p>
            {formData.title.length >= 10 && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                Good length
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitleSection;
