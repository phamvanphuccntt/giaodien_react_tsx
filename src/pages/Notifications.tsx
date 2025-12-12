import React from 'react';
import { Search, Plus, RotateCw, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Notifications: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quản lý thông báo</h2>
          <p className="text-gray-500 mt-1">Quản lý các thông báo đã tạo và gửi</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
          <Plus size={20} />
          <span>Tạo thông báo</span>
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
        {/* Status Tabs */}
        <div className="mb-4">
          <button className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium border border-green-100">
            Tất cả
          </button>
        </div>

        {/* Filter Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Search Title - Chiếm 4 cột */}
          <div className="lg:col-span-4 space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Tìm theo tiêu đề</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Nhập tiêu đề..." 
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            </div>
          </div>

          {/* Date From - Chiếm 2 cột */}
          <div className="lg:col-span-2 space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Từ ngày (ngày gửi)</label>
            <div className="relative">
              <input 
                type="date" 
                className="w-full pl-3 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-500"
              />
            </div>
          </div>

          {/* Date To - Chiếm 2 cột */}
          <div className="lg:col-span-2 space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Đến ngày (ngày gửi)</label>
            <div className="relative">
              <input 
                type="date" 
                className="w-full pl-3 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-500"
              />
            </div>
          </div>

          {/* Sort - Chiếm 3 cột */}
          <div className="lg:col-span-3 space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Sắp xếp</label>
            <div className="relative">
              <select className="w-full appearance-none bg-white pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-700 cursor-pointer">
                <option>Ngày gửi: mới nhất</option>
                <option>Ngày gửi: cũ nhất</option>
                <option>Tiêu đề: A-Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Clear Filter Button - Chiếm 1 cột */}
          <div className="lg:col-span-1 flex items-end">
             <button className="w-full flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-600 transition-colors text-sm">
               <RotateCw size={16} />
               <span className="lg:hidden">Xóa lọc</span>
             </button>
          </div>
        </div>
      </div>

      {/* Data Table / Empty State */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Table Header (ẩn hoặc hiện tùy design, ở đây làm placeholder cho vùng content) */}
        
        {/* Empty State */}
        <div className="p-12 flex flex-col items-center justify-center text-center">
            {/* Bạn có thể thêm icon trống ở đây nếu muốn */}
            <p className="text-gray-500">Không có dữ liệu phù hợp bộ lọc.</p>
        </div>

        {/* Footer / Pagination */}
        <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50 rounded-b-lg">
          <div className="text-sm text-gray-600">
            Tổng <span className="font-semibold">0</span> bản ghi • Trang <span className="font-semibold">1</span>/1
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-gray-200 text-gray-400 disabled:opacity-50" disabled>
              <ChevronLeft size={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-green-600 text-white text-sm font-medium">
              1
            </button>
            <button className="p-1 rounded hover:bg-gray-200 text-gray-400 disabled:opacity-50" disabled>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;