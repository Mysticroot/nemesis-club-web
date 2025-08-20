import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from '@/Layouts/AppLayout';

import { AuthProvider } from '@/context/AuthContext';
import { BlogProvider } from '@/context/BlogContext';
import { SponsorProvider } from '@/context/SponsorContenxt';

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
