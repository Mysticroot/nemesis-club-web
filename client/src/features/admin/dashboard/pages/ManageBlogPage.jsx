import { useEffect, useState } from 'react';

import BlogList from '@/features/admin/dashboard/sections/Blog/BlogList';
import { fetchBlogs } from '@/api/blogApi';

const ManageBlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const blogs = await fetchBlogs();
      setBlogs(blogs);
    };
    loadBlogs();
  }, []);

  return <BlogList blogs={blogs} />;
};

export default ManageBlogPage;
