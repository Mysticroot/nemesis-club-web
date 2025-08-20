import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '@/context/AuthContext';
import AppLayout from '@/Layouts/AppLayout';
import { BlogProvider } from '@/context/BlogContext';

const App = () => {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <AppLayout />
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
};

export default App;
