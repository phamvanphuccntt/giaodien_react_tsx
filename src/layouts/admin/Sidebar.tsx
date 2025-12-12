import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Bell, FileText, Clock, CheckCircle, 
  Layers, MessageSquare, Settings, Menu, MoreVertical, ChevronRight 
} from 'lucide-react';
import { PATH } from '../../constants/path';

const Sidebar: React.FC = () => {
  // Hàm helper để style cho link active/inactive
  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${
      isActive 
        ? 'bg-green-700 text-white font-medium' 
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 h-screen fixed left-0 top-0 z-10 overflow-y-auto">
      <div>
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
               <span className="text-xs text-red-600 font-bold">Logo</span>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-sm leading-tight">Hệ thống quản lý</h1>
            <p className="text-xs text-gray-500">Nghiên cứu Khoa học</p>
          </div>
          <button className="ml-auto p-1 bg-gray-50 rounded hover:bg-gray-100 border border-gray-200">
            <Menu size={16} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-3 space-y-1">
          <NavLink to={PATH.DASHBOARD} className={getLinkClass}>
            <Home size={20} />
            <span>Trang chủ</span>
          </NavLink>

          <NavLink to={PATH.NOTIFICATIONS} className={getLinkClass}>
            <Bell size={20} />
            <span>Quản lý thông báo</span>
          </NavLink>
          
          <NavLink to={PATH.DOCUMENTS} className={getLinkClass}>
            <FileText size={20} />
            <span>Quản lý công văn</span>
          </NavLink>

          <NavLink to={PATH.PROJECTS_ONGOING} className={getLinkClass}>
            <Clock size={20} />
            <span>Đề tài đang thực hiện</span>
          </NavLink>

          <NavLink to={PATH.PROJECTS_COMPLETED} className={getLinkClass}>
            <CheckCircle size={20} />
            <span>Đề tài đã hoàn thành</span>
          </NavLink>

          {/* Dropdown Items (Giả lập link thường) */}
          <div className="flex items-center justify-between px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors group cursor-pointer">
            <div className="flex items-center gap-3">
              <Layers size={20} />
              <span>Quy trình</span>
            </div>
            <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />
          </div>

          <NavLink to={PATH.FEEDBACK} className={getLinkClass}>
            <MessageSquare size={20} />
            <span>Phản hồi</span>
          </NavLink>

          <div className="flex items-center justify-between px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors group cursor-pointer">
            <div className="flex items-center gap-3">
              <Settings size={20} />
              <span>Thiết lập</span>
            </div>
            <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />
          </div>
        </nav>
      </div>

      {/* Footer Profile */}
      <div className="p-4 bg-green-50 border-t border-gray-200 flex items-center justify-between mt-auto">
        <div className="font-medium text-sm text-green-900">Quản trị viên</div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreVertical size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;