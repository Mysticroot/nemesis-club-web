import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '@/context/AuthContext';
import AppLayout from '@/AppLayout';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
};

export default App;
