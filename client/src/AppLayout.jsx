import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import History from './pages/History';
import LoginPage from './pages/AdminPages/LoginPage';
import RegisterPage from './pages/AdminPages/RegisterPage';
import DashboardPage from './pages/AdminPages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// Optional: extract layout logic into a wrapper
export default function AppLayout() {
  const location = useLocation();

  // List of paths where you want to hide the Navbar and Footer
  const hiddenNavbarRoutes = ['/admin/dashboard', '/admin/create-blog', '/admin/create-history'];

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
}
