import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Bell, FileText, Clock, CheckCircle, 
  Layers, MessageSquare, Settings, Menu, MoreVertical, ChevronRight, User // Import thêm icon User
} from 'lucide-react';
import { PATH } from '../../constants/path';

// Định nghĩa props
interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  // Hàm helper để style cho link active/inactive
  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-3 py-3 rounded-md transition-colors whitespace-nowrap ${
      isActive 
        ? 'bg-green-700 text-white font-medium' 
        : 'text-gray-600 hover:bg-gray-100'
    } ${isCollapsed ? 'justify-center' : ''}`;

  return (
    <aside 
      className={`bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 h-screen fixed left-0 top-0 z-10 overflow-y-auto transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        {/* Logo Section */}
        <div className={`p-4 border-b border-gray-100 flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
          {/* Ẩn Logo Icon khi thu gọn */}
          {!isCollapsed && (
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                 <span className="text-xs text-red-600 font-bold">L</span>
              </div>
            </div>
          )}
          
          {/* Ẩn Text Logo khi thu gọn */}
          {!isCollapsed && (
            <div className="overflow-hidden transition-all duration-300">
              <h1 className="font-bold text-gray-900 text-sm leading-tight truncate">Hệ thống quản lý</h1>
              <p className="text-xs text-gray-500 truncate">Nghiên cứu Khoa học</p>
            </div>
          )}

          {/* Nút Menu: Hiển thị ở góc phải khi mở, và ở giữa khi đóng */}
          <button 
            onClick={toggleSidebar}
            className={`p-1 bg-gray-50 rounded hover:bg-gray-100 border border-gray-200 ${!isCollapsed ? 'ml-auto' : ''}`}
          >
            <Menu size={16} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-3 space-y-1">
          <NavLink to={PATH.DASHBOARD} className={getLinkClass} title="Trang chủ">
            <Home size={20} flex-shrink-0 />
            {!isCollapsed && <span>Trang chủ</span>}
          </NavLink>

          <NavLink to={PATH.NOTIFICATIONS} className={getLinkClass} title="Quản lý thông báo">
            <Bell size={20} flex-shrink-0 />
            {!isCollapsed && <span>Quản lý thông báo</span>}
          </NavLink>
          
          <NavLink to={PATH.DOCUMENTS} className={getLinkClass} title="Quản lý công văn">
            <FileText size={20} flex-shrink-0 />
            {!isCollapsed && <span>Quản lý công văn</span>}
          </NavLink>

          <NavLink to={PATH.PROJECTS_ONGOING} className={getLinkClass} title="Đề tài đang thực hiện">
            <Clock size={20} flex-shrink-0 />
            {!isCollapsed && <span>Đề tài đang thực hiện</span>}
          </NavLink>

          <NavLink to={PATH.PROJECTS_COMPLETED} className={getLinkClass} title="Đề tài đã hoàn thành">
            <CheckCircle size={20} flex-shrink-0 />
            {!isCollapsed && <span>Đề tài đã hoàn thành</span>}
          </NavLink>

          {/* Dropdown Items */}
          <div className={`flex items-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors group cursor-pointer px-3 py-3 ${isCollapsed ? 'justify-center' : 'justify-between'}`} title="Quy trình">
            <div className="flex items-center gap-3">
              <Layers size={20} flex-shrink-0 />
              {!isCollapsed && <span>Quy trình</span>}
            </div>
            {!isCollapsed && <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />}
          </div>

          <NavLink to={PATH.FEEDBACK} className={getLinkClass} title="Phản hồi">
            <MessageSquare size={20} flex-shrink-0 />
            {!isCollapsed && <span>Phản hồi</span>}
          </NavLink>

          <div className={`flex items-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors group cursor-pointer px-3 py-3 ${isCollapsed ? 'justify-center' : 'justify-between'}`} title="Thiết lập">
            <div className="flex items-center gap-3">
              <Settings size={20} flex-shrink-0 />
              {!isCollapsed && <span>Thiết lập</span>}
            </div>
            {!isCollapsed && <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />}
          </div>
        </nav>
      </div>

      {/* Footer Profile */}
      <div className={`p-4 bg-green-50 border-t border-gray-200 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} mt-auto`}>
        {!isCollapsed ? (
            <>
                <div className="font-medium text-sm text-green-900 truncate">Quản trị viên</div>
                <button className="text-gray-500 hover:text-gray-700">
                <MoreVertical size={18} />
                </button>
            </>
        ) : (
            // Hiển thị icon User khi thu gọn
            <button className="text-gray-500 hover:text-gray-700" title="Tài khoản">
                <User size={20} />
            </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;