import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './admin/Sidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      <Sidebar />
      {/* Main Content Area */}
      {/* ml-64 để đẩy nội dung sang phải bằng chiều rộng sidebar */}
      <main className="flex-1 ml-64 overflow-y-auto h-screen">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;