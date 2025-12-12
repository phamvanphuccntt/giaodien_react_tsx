import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, Bell, FileText, Clock, CheckCircle, 
  Layers, MessageSquare, Settings, Menu, MoreVertical, ChevronRight, User, ChevronDown
} from 'lucide-react';
import { PATH } from '../../constants/path';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();
  // State để quản lý đóng mở menu Quy trình
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  // Kiểm tra xem user có đang đứng ở trang con của Quy trình không để highlight menu cha
  const isProcessActive = location.pathname.includes('/admin/process');

  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-3 py-3 rounded-md transition-colors whitespace-nowrap ${
      isActive 
        ? 'bg-green-700 text-white font-medium' 
        : 'text-gray-600 hover:bg-gray-100'
    } ${isCollapsed ? 'justify-center' : ''}`;

  // Style riêng cho link con (submenu)
  const getSubLinkClass = ({ isActive }: { isActive: boolean }) => 
    `block px-3 py-2 rounded-md transition-colors text-sm ml-9 ${
      isActive 
        ? 'bg-green-50 text-green-700 font-medium' 
        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
    }`;

  return (
    <aside 
      className={`bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 h-screen fixed left-0 top-0 z-10 overflow-y-auto transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        {/* Logo Section & Toggle Button (Giữ nguyên như code cũ) */}
        <div className={`p-4 border-b border-gray-100 flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
          {!isCollapsed && (
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                 <span className="text-xs text-red-600 font-bold">L</span>
              </div>
            </div>
          )}
          {!isCollapsed && (
            <div className="overflow-hidden transition-all duration-300">
              <h1 className="font-bold text-gray-900 text-sm leading-tight truncate">Hệ thống quản lý</h1>
              <p className="text-xs text-gray-500 truncate">Nghiên cứu Khoa học</p>
            </div>
          )}
          <button 
            onClick={toggleSidebar}
            className={`p-1 bg-gray-50 rounded hover:bg-gray-100 border border-gray-200 ${!isCollapsed ? 'ml-auto' : ''}`}
          >
            <Menu size={16} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-3 space-y-1">
          <NavLink to={PATH.DASHBOARD} className={getLinkClass}>
            <Home size={20} flex-shrink-0 />
            {!isCollapsed && <span>Trang chủ</span>}
          </NavLink>

          <NavLink to={PATH.NOTIFICATIONS} className={getLinkClass}>
            <Bell size={20} flex-shrink-0 />
            {!isCollapsed && <span>Quản lý thông báo</span>}
          </NavLink>
          
          <NavLink to={PATH.DOCUMENTS} className={getLinkClass}>
            <FileText size={20} flex-shrink-0 />
            {!isCollapsed && <span>Quản lý công văn</span>}
          </NavLink>

          <NavLink to={PATH.PROJECTS_ONGOING} className={getLinkClass}>
            <Clock size={20} flex-shrink-0 />
            {!isCollapsed && <span>Đề tài đang thực hiện</span>}
          </NavLink>

          <NavLink to={PATH.PROJECTS_COMPLETED} className={getLinkClass}>
            <CheckCircle size={20} flex-shrink-0 />
            {!isCollapsed && <span>Đề tài đã hoàn thành</span>}
          </NavLink>

          {/* --- QUY TRÌNH (Dropdown) --- */}
          <div className="space-y-1">
            <div 
              onClick={() => !isCollapsed && setIsProcessOpen(!isProcessOpen)}
              className={`flex items-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors cursor-pointer px-3 py-3 ${
                isCollapsed ? 'justify-center' : 'justify-between'
              } ${isProcessActive ? 'bg-gray-100 text-gray-900' : ''}`}
            >
              <div className="flex items-center gap-3">
                <Layers size={20} flex-shrink-0 />
                {!isCollapsed && <span>Quy trình</span>}
              </div>
              {!isCollapsed && (
                isProcessOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
              )}
            </div>

            {/* Submenu Items: Chỉ hiện khi mở rộng và Menu cha được mở */}
            {!isCollapsed && isProcessOpen && (
              <div className="mt-1 space-y-1 mb-2">
                <NavLink to={PATH.PROCESS_PENDING} className={getSubLinkClass}>
                  Chờ duyệt
                </NavLink>
                <NavLink to={PATH.PROCESS_APPROVED} className={getSubLinkClass}>
                  Được duyệt
                </NavLink>
              </div>
            )}
          </div>
          {/* ------------------------------ */}

          <NavLink to={PATH.FEEDBACK} className={getLinkClass}>
            <MessageSquare size={20} flex-shrink-0 />
            {!isCollapsed && <span>Phản hồi</span>}
          </NavLink>

          <div className={`flex items-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors group cursor-pointer px-3 py-3 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
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
            <button className="text-gray-500 hover:text-gray-700">
                <User size={20} />
            </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;