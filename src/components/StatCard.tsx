import React from 'react';

interface StatCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  iconColor: string; // Tailwind text color class
}

const StatCard: React.FC<StatCardProps> = ({ title, count, icon, iconColor }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-gray-500 text-sm mb-1">{title}</span>
        <span className="text-2xl font-bold text-gray-900">{count}</span>
      </div>
      <div className={`${iconColor}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;