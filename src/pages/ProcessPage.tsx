import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Filter, Layers } from 'lucide-react';
import { PATH } from '../constants/path';

// Danh sách các bước giả lập từ hình ảnh
const STEPS = [
  { id: 1, name: 'Quản lý cuộc họp' },
  { id: 2, name: 'Quyết định' },
  { id: 3, name: 'Quản lý hợp đồng' },
  { id: 4, name: 'Quản lý quá trình thực hiện' },
  { id: 5, name: 'Thông báo ký hợp đồng, quyết định' },
  { id: 6, name: 'Thông báo cấp ngân sách' },
  { id: 7, name: 'Dự toán sử dụng kinh phí, số quyết định HĐĐĐ' },
  { id: 8, name: 'Mua sắm nguyên vật liệu' },
  { id: 9, name: 'Tổ chức hội nghị, hội thảo, kế hoạch khảo sát' },
  { id: 10, name: 'Thông báo họp kiểm tra theo lịch của cơ quan quản lý đề tài' },
  { id: 11, name: 'Lưu file báo cáo giải trình công văn và phê duyệt điều chỉnh' },
  { id: 12, name: 'Thông báo về quyết định nghiệm thu' },
  { id: 13, name: 'Hồ sơ đánh giá sản phẩm nghiệm thu' },
  { id: 14, name: 'Theo dõi tiến độ' },
  { id: 15, name: 'Quản lý nghiệm thu' },
];

const ProcessPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedStep, setSelectedStep] = useState<number>(1);

  // Xác định đang ở tab nào dựa trên URL
  const isPending = location.pathname === PATH.PROCESS_PENDING;
  const isApproved = location.pathname === PATH.PROCESS_APPROVED;

  // Xử lý chuyển tab bằng nút góc phải
  const handleTabChange = (type: 'pending' | 'approved') => {
    if (type === 'pending') navigate(PATH.PROCESS_PENDING);
    if (type === 'approved') navigate(PATH.PROCESS_APPROVED);
  };

  const currentStepName = STEPS.find(s => s.id === selectedStep)?.name;

  return (
    <div className="space-y-6">
      {/* Header & Toggle Buttons */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Layers className="text-green-700" size={28}/> 
          Quy trình
        </h2>
        <div className="flex bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          <button 
            onClick={() => handleTabChange('pending')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              isPending ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Chờ duyệt
          </button>
          <button 
            onClick={() => handleTabChange('approved')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              isApproved ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Được duyệt
          </button>
        </div>
      </div>

      {/* Steps Grid Selection */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-gray-600">
           <Filter size={18} />
           <span className="font-medium">Chọn bước</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((step) => (
            <div 
              key={step.id}
              onClick={() => setSelectedStep(step.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-all h-full flex items-center ${
                selectedStep === step.id 
                  ? 'bg-green-50 border-green-400 text-green-900 font-medium' 
                  : 'bg-white border-gray-200 text-gray-700 hover:border-green-200 hover:shadow-sm'
              }`}
            >
              {step.name}
            </div>
          ))}
        </div>
      </div>

      {/* Detail Section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm min-h-[300px]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="text-gray-800">
            Đề tài <span className={`font-semibold ${isApproved ? 'text-green-600' : 'text-orange-500'}`}>
              {isApproved ? 'đã hoàn thành' : 'chưa hoàn thành'}
            </span> ở bước: <span className="font-bold text-gray-900">{currentStepName}</span>
          </div>
          
          <div className="relative w-full md:w-64">
             <input 
                type="text" 
                placeholder="Tìm tiêu đề..."
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
             />
             <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center h-40 text-gray-500">
            <p>Không có đề tài <span className="font-medium">{isApproved ? 'đã hoàn thành' : 'chưa hoàn thành'}</span> ở bước này.</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;