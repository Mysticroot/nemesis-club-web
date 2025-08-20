import BlogList from '@/features/admin/dashboard/Blog/components/BlogList';
import { useBlogs } from '@/context/BlogContext';

const ManageBlogPage = () => {
  const { blogs, setBlogs, loading } = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <BlogList blogs={blogs} setBlogs={setBlogs} />;
};

export default ManageBlogPage;
