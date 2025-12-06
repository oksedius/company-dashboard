import React, { useState } from "react";
import { CompanyWidget } from "./CompanyWidget";
import { CompanySelector } from "./CompanySelector";
import { companiesData } from "../data/companiesData";

export const CompanyDashboard: React.FC = () => {
  const [selectedCompanyIds, setSelectedCompanyIds] = useState<string[]>([
    "1",
    "2",
    "3",
  ]);

  const handleCompanyChange = (index: number, companyId: string) => {
    const newSelection = [...selectedCompanyIds];
    newSelection[index] = companyId;
    setSelectedCompanyIds(newSelection);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Company Dashboard
          </h1>
          <p className="text-gray-600">
            Select companies to view detailed information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCompanyIds.map((companyId, index) => {
            const company = companiesData.find((c) => c.id === companyId);

            return (
              <div key={index} className="flex flex-col">
                <CompanySelector
                  companies={companiesData}
                  selectedCompanyId={companyId}
                  onCompanyChange={(id) => handleCompanyChange(index, id)}
                  widgetNumber={index + 1}
                />
                {company && <CompanyWidget company={company} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
