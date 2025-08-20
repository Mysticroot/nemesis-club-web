import { Card, CardContent } from '@/components/ui/card';

import HeaderSection from '@/features/admin/dashboard/components/HeaderSection.jsx';
import { Calendar, Delete, DeleteIcon, Edit, File, PersonStanding, Trash } from 'lucide-react';

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn how to set up your first React project step-by-step.',
    author: 'Shaikh Unais',
    date: '2025-08-18',
  },
  {
    id: 2,
    title: 'Understanding State in React',
    excerpt: 'State is the heart of any interactive component in React.',
    author: 'Jane Doe',
    date: '2025-08-16',
  },
  {
    id: 3,
    title: 'Deploying with Vercel',
    excerpt: 'A quick guide to deploying React apps using Vercel.',
    author: 'John Smith',
    date: '2025-08-14',
  },
];

const BlogList = ({ blogs = blogPosts }) => {
  const handleDelete = (id) => {
    // API call would go here
    console.log(`Deleting blog with ID: ${id}`);
    // After successful deletion, you would typically refresh the list
  };

  const handleEditPost = (id) => {
    // Navigate to edit blog post page
    console.log(`Editing blog with ID: ${id}`);
  };

  return (
    <div className="space-y-8">
      <HeaderSection title="Blog Management" subtitle="Create, edit and manage your blog posts" />

      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <File />
          </div>
          <h3 className="text-lg font-semibold mb-2">No blog posts yet</h3>
          <p className="text-muted-foreground mb-4">Get started by creating your first blog post</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 ring-1 ring-black/5 hover:ring-primary/20"
            >
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                  <h3 className="text-lg font-bold tracking-tight mb-1 text-white drop-shadow-md line-clamp-2 relative z-10">
                    {post.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt || post.content}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar width={15} />

                        <span>{new Date(post.date || post.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditPost(post.id)}
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:cursor-pointer rounded-lg transition-all duration-200"
                        aria-label={`Edit ${post.title}`}
                      >
                        <Edit color="blue" width={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 hover:cursor-pointer rounded-lg transition-all duration-200"
                        aria-label={`Delete ${post.title}`}
                      >
                        <Trash color="red" width={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
