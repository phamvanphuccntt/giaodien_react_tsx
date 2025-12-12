import { useRoutes, Navigate } from 'react-router-dom';
import adminRoutes from './routes/adminRoutes';

function App() {
  // Kết hợp routes admin và các routes khác nếu có (ví dụ: auth, user...)
  const routing = useRoutes([
    adminRoutes,
    // Redirect root '/' to '/admin/dashboard'
    {
        path: '/',
        element: <Navigate to="/admin/dashboard" replace />
    }
  ]);

  return (
    <>
      {routing}
    </>
  );
}

export default App;