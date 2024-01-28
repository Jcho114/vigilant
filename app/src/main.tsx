import ReactDOM from 'react-dom/client';
import Landing from './pages/Landing.tsx';
import Demo from './Demo.tsx';
import Dashboard from './pages/Dashboard.tsx';
import AdminTrends from './pages/AdminTrends.tsx'
import AdminReports from './components/AdminReports/AdminReports.tsx';
import AdminWarfront from './pages/AdminWarfront.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: import.meta.env.VITE_REACT_APP_AUTH0_CALLBACK_URL,
      audience: import.meta.env.VITE_REACT_APP_AUTH0_API_AUDIENCE
    }}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard-test" element={<Demo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-dashboard/trends" element = {<AdminTrends/>} />
            <Route path="/admin-dashboard/reports" element={<AdminReports/>} />
            <Route path="/admin-dashboard/warfront" element={<AdminWarfront/>} />
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </Auth0Provider>
)
