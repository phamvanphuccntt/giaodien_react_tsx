import React from 'react';
import { File, Calendar, Clock, Users, TrendingUp, FileText } from 'lucide-react';
import StatCard from '../../components/StatCard';

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Trang chủ</h2>
          <p className="text-gray-500">Tổng quan hoạt động và thông tin mới nhất</p>
        </div>
        <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
          <TrendingUp size={20} />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Tổng đề tài" 
          count={0} 
          icon={<File size={32} />} 
          iconColor="text-blue-500"
        />
        <StatCard 
          title="Cuộc họp sắp tới" 
          count={0} 
          icon={<Calendar size={32} />} 
          iconColor="text-green-600"
        />
        <StatCard 
          title="Đề tài đang thực hiện" 
          count={0} 
          icon={<Clock size={32} />} 
          iconColor="text-orange-500"
        />
        <StatCard 
          title="Tổng thành viên" 
          count={0} 
          icon={<Users size={32} />} 
          iconColor="text-purple-600"
        />
      </div>

      {/* Bottom Section: Two Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel 1 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-64">
          <div className="p-4 border-b border-gray-100 flex items-center gap-2">
            <FileText size={18} className="text-blue-600" />
            <h3 className="font-bold text-gray-800">Đề tài mới nhất</h3>
          </div>
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
            <div className="w-full h-full bg-white rounded-b-lg"></div> 
          </div>
        </div>

        {/* Panel 2 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-64">
          <div className="p-4 border-b border-gray-100 flex items-center gap-2">
            <Calendar size={18} className="text-green-600" />
            <h3 className="font-bold text-gray-800">Cuộc họp sắp tới</h3>
          </div>
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
            <div className="w-full h-full bg-white rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;