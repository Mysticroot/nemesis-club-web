import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from '@/layouts/AppLayout';

import { AuthProvider } from '@/context/AuthContext';
import { BlogProvider } from '@/context/BlogContext';
import { SponsorProvider } from '@/context/SponsorContext';

const App = () => {
  return (
    <AuthProvider>
      <BlogProvider>
        <SponsorProvider>
          <Router>
            <AppLayout />
          </Router>
        </SponsorProvider>
      </BlogProvider>
    </AuthProvider>
  );
};

export default App;
