import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

import Home from '@/pages/common/Home';
import Blogs from '@/pages/common/Blogs';
import About from '@/pages/common/About';
import History from '@/pages/common/History';
import LoginPage from '@/pages/admin/LoginPage';
import RegisterPage from '@/pages/admin/RegisterPage';
import DashboardPage from '@/pages/admin/DashboardPage';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import BlogDetails from '@/components/Blogs/BlogDetails';
import Contact from '@/pages/common/Contact';

// Optional: extract layout logic into a wrapper
function AppLayout() {
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
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}
// function App() {
//   // const location = useLocation();
//   // List of paths where you want to hide the Navbar and Footer
//   // const hiddenNavbarRoutes = ['/admin/dashboard', '/admin/create-blog', '/admin/create-history'];
//   // const shouldHideNavbar = hiddenNavbarRoutes.includes(location.pathname);

//   return (
//     <AuthProvider>
//       <Router>
//         {!shouldHideNavbar && <Navbar />}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/blogs/:id" element={<BlogDetails />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/history" element={<History />} />
//           <Route path="/admin/login" element={<LoginPage />} />
//           <Route path="/admin/register" element={<RegisterPage />} />

//           <Route
//             path="/admin/dashboard"
//             element={
//               <ProtectedRoute>
//                 <DashboardPage />
//               </ProtectedRoute>
//             }
//           />

//           {/* Dummy admin routes for blog/history creation */}
//           <Route
//             path="/admin/create-blog"
//             element={
//               <ProtectedRoute>
//                 <div className="p-6">Create Blog Page (Coming soon)</div>
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin/create-history"
//             element={
//               <ProtectedRoute>
//                 <div className="p-6">Create History Page (Coming soon)</div>
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//         <Footer />
//       </Router>
//     </AuthProvider>
//   );
// }

export default App;
