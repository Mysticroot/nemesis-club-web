import axios from '@/lib/axiosInstance';

//fetch blogs
export async function fetchBlogs() {
  try {
    const { data: resp } = await axios.get('/blogs');
    const blogs = resp.data;
    console.log(blogs)
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}
