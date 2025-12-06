import React from "react";
import {
  Building2,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
} from "lucide-react";
import type { Company } from "../types/Company";

interface CompanyWidgetProps {
  company: Company;
}

export const CompanyWidget: React.FC<CompanyWidgetProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{company.name}</h2>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mt-2">
            {company.ticker}
          </span>
        </div>
        <Building2 className="text-blue-600" size={32} />
      </div>

      <p className="text-gray-600 mb-4 flex-grow">{company.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-green-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">Market Cap</p>
            <p className="font-semibold text-gray-800">{company.marketCap}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="text-green-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">Revenue</p>
            <p className="font-semibold text-gray-800">{company.revenue}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-purple-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">Employees</p>
            <p className="font-semibold text-gray-800">
              {company.employees.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-orange-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">Founded</p>
            <p className="font-semibold text-gray-800">{company.founded}</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Sector:</span>
          <span className="font-medium text-gray-800">{company.sector}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Industry:</span>
          <span className="font-medium text-gray-800">{company.industry}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">CEO:</span>
          <span className="font-medium text-gray-800">{company.ceo}</span>
        </div>
        <div className="flex items-start justify-between text-sm">
          <span className="text-gray-500">Headquarters:</span>
          <span className="font-medium text-gray-800 text-right">
            {company.headquarters}
          </span>
        </div>
      </div>
    </div>
  );
};
