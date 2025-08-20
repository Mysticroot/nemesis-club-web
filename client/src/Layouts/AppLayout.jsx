import { Routes, Route, useLocation } from 'react-router-dom';
// Components
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ProtectedRoute from '@/components/common/ProtectedRoute';

// Layouts
import AdminLayout from '@/Layouts/AdminLayout';

// General Pages
import Home from '@/features/general/home/pages/HomePage';
import Blogs from '@/features/general/blog/pages/BlogPage';
import About from '@/features/general/about/pages/AboutPage';
import History from '@/features/general/history/pages/HistoryPage';
import Contact from '@/features/general/contact/pages/ContactPage';
import BlogDetails from '@/features/general/blog/pages/DetailBlogPage';

// Admin Pages
import LoginPage from '@/features/admin/auth/pages/LoginPage';
import RegisterPage from '@/features/admin/auth/pages/RegisterPage';
import DashboardPage from '@/features/admin/dashboard/Overview/pages/DashboardPage';
import ManageBlogPage from '@/features/admin/dashboard/Blog/pages/ManageBlogPage';

import SponsorRequestsListPage from '@/features/admin/dashboard/Sponsors/pages/SponsorRequestsListPage';
import SponsorsListPage from '@/features/admin/dashboard/Sponsors/pages/SponsorsListPage';

const AppLayout = () => {
  const location = useLocation();

  const hiddenNavbarRoutes = [
    '/admin/dashboard',
    '/admin/dashboard/manage-blogs',
    '/admin/dashboard/sponsor-requests',
    '/admin/dashboard/sponsors',
  ];

  const shouldHideNavbar = hiddenNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/register" element={<RegisterPage />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="manage-blogs" element={<ManageBlogPage />} />
          <Route path="sponsor-requests" element={<SponsorRequestsListPage />} />
          <Route path="sponsors" element={<SponsorsListPage />} />
        </Route>

        <Route
          path="/admin/create-history"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <div className="p-6">Create History Page (Coming soon)</div>
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
};

export default AppLayout;
