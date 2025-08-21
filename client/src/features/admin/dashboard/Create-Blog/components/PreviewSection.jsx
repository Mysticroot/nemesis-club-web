import { Eye, Calendar, User } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PreviewSection = ({ formData }) => {
  return (
    <div className="border border-gray-200 shadow-lg bg-white rounded-xl">
      <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4">
        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
          <Eye className="h-5 w-5 text-indigo-700" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Blog Preview</h3>
      </div>

      <CardContent className="p-6">
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50">
          <article className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{formData.title}</h1>

            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-300">
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

            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-base">
              {formData.content || 'Start writing your content to see the preview...'}
            </div>
          </article>
        </div>
      </CardContent>
    </div>
  );
};

export default PreviewSection;
