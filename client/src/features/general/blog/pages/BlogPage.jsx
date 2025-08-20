import BlogCard from '@/features/general/blog/components/BlogCard';
import BlogHeading from '@/features/general/blog/components/BlogHeading';

const blogs = [
  {
    id: 1,
    date: '12 JUL',
    category: 'WEC',
    title: 'THE 499PS IN ACTION IN SÃO PAULO',
    image: 'https://www.ferrari.com/images/2024/07/12/499p-wec-saopaulo.jpg',
  },
  {
    id: 2,
    date: '09 JUL',
    category: 'WEC',
    title: 'COMMENTS IN THE RUN-UP TO THE 6 HOURS OF SÃO PAULO',
    image: 'https://www.ferrari.com/images/2024/07/09/499p-team-photo.jpg',
  },
  {
    id: 3,
    date: '08 JUL',
    category: 'HYPERCAR',
    title: 'GIOVINAZZI RENEWS HIS CONTRACT WITH FERRARI',
    image: 'https://www.ferrari.com/images/2024/07/08/giovinazzi.jpg',
  },
  // Add more blogs here...
];

const BlogPage = () => {
  return (
    <div className="bg-[#0A1F44] min-h-screen py-12 px-6 md:px-16 text-white pt-24">
      {/* Heading */}
      <BlogHeading />

      {/* Blog Cards */}
      <BlogCard blogs={blogs} />
    </div>
  );
};
export default BlogPage;
