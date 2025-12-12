import type { RouteObject } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard';
import Notifications from '../pages/Notifications';
import ProcessPage from '../pages/ProcessPage'; // Import trang vừa tạo
import { PATH } from '../constants/path';

const adminRoutes: RouteObject = {
  path: PATH.ADMIN,
  element: <AdminLayout />,
  children: [
    {
      index: true, 
      element: <Dashboard /> 
    },
    {
      path: PATH.DASHBOARD, 
      element: <Dashboard />,
    },
    {
      path: PATH.NOTIFICATIONS,
      element: <Notifications />,
    },
    // --- Thêm 2 Routes mới ---
    {
      path: PATH.PROCESS_PENDING,
      element: <ProcessPage />,
    },
    {
      path: PATH.PROCESS_APPROVED,
      element: <ProcessPage />,
    },
    // -------------------------
  ]
};

export default adminRoutes;