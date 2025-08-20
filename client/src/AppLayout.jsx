import { Routes, Route, useLocation } from 'react-router-dom';
// Components
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ProtectedRoute from '@/components/common/ProtectedRoute';

// General Pages
import Home from '@/pages/GeneralPages/HomePage';
import Blogs from '@/pages/GeneralPages/BlogPage';
import About from '@/pages/GeneralPages/AboutPage';
import History from '@/pages/GeneralPages/HistoryPage';
import Contact from '@/pages/GeneralPages/ContactPage';
import BlogDetails from '@/pages/GeneralPages/DetailBlogPage';

// Admin Pages
import LoginPage from '@/pages/AdminPages/LoginPage';
import RegisterPage from '@/pages/AdminPages/RegisterPage';
import DashboardPage from '@/pages/AdminPages/DashboardPage';

const AppLayout = () => {
  const location = useLocation();

  const hiddenNavbarRoutes = ['/admin/dashboard'];

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

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/create-blog"
          element={
            <ProtectedRoute>
              <div className="p-6">Create Blog Page (Coming soon)</div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/create-history"
          element={
            <ProtectedRoute>
              <div className="p-6">Create History Page (Coming soon)</div>
            </ProtectedRoute>
          }
        />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
};

export default AppLayout;
