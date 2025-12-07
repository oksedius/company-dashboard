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
    <div className="h-full overflow-auto bg-white p-4">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{company.name}</h2>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-2">
            {company.ticker}
          </span>
        </div>
        <Building2 className="text-blue-600" size={28} />
      </div>

      <p className="text-gray-600 text-sm mb-4">{company.description}</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-green-600" size={18} />
          <div>
            <p className="text-xs text-gray-500">Market Cap</p>
            <p className="font-semibold text-gray-800 text-sm">
              {company.marketCap}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="text-green-600" size={18} />
          <div>
            <p className="text-xs text-gray-500">Revenue</p>
            <p className="font-semibold text-gray-800 text-sm">
              {company.revenue}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-purple-600" size={18} />
          <div>
            <p className="text-xs text-gray-500">Employees</p>
            <p className="font-semibold text-gray-800 text-sm">
              {company.employees.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-orange-600" size={18} />
          <div>
            <p className="text-xs text-gray-500">Founded</p>
            <p className="font-semibold text-gray-800 text-sm">
              {company.founded}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-3 space-y-2">
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
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Headquarters:</span>
          <span className="font-medium text-gray-800">
            {company.headquarters}
          </span>
        </div>
      </div>
    </div>
  );
};
