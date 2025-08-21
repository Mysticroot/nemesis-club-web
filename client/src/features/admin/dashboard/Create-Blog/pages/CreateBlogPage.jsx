import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';

import HeaderSection from '@/features/admin/dashboard/components/HeaderSection';

import ContentSection from '@/features/admin/dashboard/Create-Blog/components/ContentSection';
import TitleSection from '@/features/admin/dashboard/Create-Blog/components/TitleSection';
import SideBar from '@/features/admin/dashboard/Create-Blog/components/SideBar';
import PreviewSection from '@/features/admin/dashboard/Create-Blog/components/PreviewSection';
import { createBlog } from '@/api/blogApi';

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    published: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState({});
  const [saveStatus, setSaveStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 5) {
      newErrors.title = 'Title must be at least 5 characters long';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    } else if (formData.content.trim().length < 30) {
      newErrors.content = 'Content must be at least 30 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePublish = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setSaveStatus('publishing');

    try {
      const response = await createBlog(formData);

      // console.log('Blog data to publish:', response);
      setSaveStatus('published');
    } catch (error) {
      console.error('Error publishing blog:', error);
      setSaveStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusAlert = () => {
    switch (saveStatus) {
      case 'published':
        return (
          <Alert className="border-green-200 bg-green-50 text-green-800">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription>Blog published successfully!</AlertDescription>
          </Alert>
        );
      case 'error':
        return (
          <Alert className="border-red-200 bg-red-50 text-red-800">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription>Failed to publish. Please try again.</AlertDescription>
          </Alert>
        );
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative">
        <HeaderSection
          title="Create New Blog Post"
          subtitle="Share your thoughts and insights with your audience through engaging content"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Status Alert */}
          {getStatusAlert() && <div className="max-w-2xl mx-auto mb-8">{getStatusAlert()}</div>}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="xl:col-span-2 space-y-6">
              {/* Title Section */}
              <TitleSection
                formData={formData}
                errors={errors}
                handleInputChange={handleInputChange}
              />

              {/* Content Section */}
              <ContentSection
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            </div>

            {/* Sidebar */}
            <SideBar
              isLoading={isLoading}
              showPreview={showPreview}
              setShowPreview={setShowPreview}
              handlePublish={handlePublish}
            />
          </div>

          {/* Preview Section */}
          {showPreview && formData.title && (
            <div className="mt-12">
              <PreviewSection formData={formData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
