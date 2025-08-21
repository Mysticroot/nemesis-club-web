import axios from '@/lib/axiosInstance';

//fetch blogs
export async function fetchBlogs() {
  try {
    const { data: resp } = await axios.get('/blogs');
    const blogs = resp.data;
    // console.log(blogs);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

export async function deleteBlog(id) {
  try {
    await axios.delete(`/blogs/${id}`);
    // console.log(`Blog with ID ${id} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting blog with ID ${id}:`, error);
    throw error;
  }
}

export async function createBlog(blogData) {
  try {
    const { data: resp } = await axios.post('/blogs', blogData);
    // console.log('Blog created successfully:', resp.data);
    return resp.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
}