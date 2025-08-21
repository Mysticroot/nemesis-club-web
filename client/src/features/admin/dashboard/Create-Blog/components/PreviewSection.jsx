import { Eye, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';

const PreviewSection = ({ formData }) => {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
          <Eye className="h-5 w-5 text-gray-700" />
          Blog Preview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 bg-gray-50">
          <article className="prose prose-gray prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {formData.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">Admin User</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                Published
              </Badge>
            </div>

            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {formData.content || 'Start writing your content to see the preview...'}
            </div>
          </article>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreviewSection;
