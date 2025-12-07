import React from "react";
import type { Company } from "../types/Company";

interface CompanySelectorProps {
  companies: Company[];
  selectedCompanyId: string;
  onCompanyChange: (companyId: string) => void;
  widgetNumber: number;
}

export const CompanySelector: React.FC<CompanySelectorProps> = ({
  companies,
  selectedCompanyId,
  onCompanyChange,
  widgetNumber,
}) => {
  return (
    <div className="p-3 border-b bg-gray-50">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Widget {widgetNumber} - Select Company
      </label>
      <select
        value={selectedCompanyId}
        onChange={(e) => onCompanyChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
      >
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name} ({company.ticker})
          </option>
        ))}
      </select>
    </div>
  );
};
