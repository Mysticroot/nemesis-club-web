import { fetchBlogs } from '@/api/blogApi';
import { createContext, useContext, useEffect, useState } from 'react';

const BlogContext = createContext();

export function BlogProvider({ children }) {

  
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, loading, reload: loadBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlogs = () => useContext(BlogContext);
