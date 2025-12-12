import type { RouteObject } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard';
import Notifications from '../pages/Notifications'; // <--- Import component mới
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
    // Thêm route cho trang thông báo
    {
      path: PATH.NOTIFICATIONS,
      element: <Notifications />,
    },
    // ... các routes khác
  ]
};

export default adminRoutes;