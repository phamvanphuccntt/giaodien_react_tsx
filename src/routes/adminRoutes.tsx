import type { RouteObject } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard'; // Import Dashboard từ file vừa tạo
import { PATH } from '../constants/path';

const adminRoutes: RouteObject = {
  path: PATH.ADMIN,
  element: <AdminLayout />,
  children: [
    {
      path: PATH.DASHBOARD, 
      element: <Dashboard />,
    },
    // Bạn có thể thêm các route con khác ở đây, ví dụ:
    // { path: PATH.NOTIFICATIONS, element: <NotificationsPage /> }
    {
        // Mặc định redirect về dashboard khi vào /admin
        index: true, 
        element: <Dashboard /> 
    }
  ]
};

export default adminRoutes;