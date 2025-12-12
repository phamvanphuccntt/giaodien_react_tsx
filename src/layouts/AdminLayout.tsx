import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './admin/Sidebar';

const AdminLayout: React.FC = () => {
    // Trạng thái thu gọn sidebar: false = mở rộng, true = thu gọn
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
        {/* Truyền props xuống Sidebar */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      {/* Main Content Area */}
      {/* ml-64 để đẩy nội dung sang phải bằng chiều rộng sidebar */}
      {/* Main Content Area */}
      {/* Điều chỉnh margin-left dựa trên trạng thái isCollapsed */}
      {/* Thêm transition-all duration-300 để hiệu ứng mượt mà */}
      <main 
        className={`flex-1 overflow-y-auto h-screen transition-all duration-300 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;