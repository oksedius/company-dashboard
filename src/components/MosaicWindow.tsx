import React from "react";
import { MosaicWindow as RMosaicWindow } from "react-mosaic-component";
import { CompanyWidget } from "./CompanyWidget";
import { CompanySelector } from "./CompanySelector";
import { companiesData } from "../data/companiesData";
import type { ViewId } from "../types/Company";

interface MosaicWindowProps {
  viewId: ViewId;
  selectedCompanyId: string;
  onCompanyChange: (companyId: string) => void;
}

export const MosaicWindow: React.FC<MosaicWindowProps> = ({
  viewId,
  selectedCompanyId,
  onCompanyChange,
}) => {
  const company = companiesData.find((c) => c.id === selectedCompanyId);
  const widgetNumber = parseInt(viewId.replace("widget", ""));

  return (
    <RMosaicWindow
      path={[]}
      title={`Company Widget ${widgetNumber}`}
      toolbarControls={<div />}
    >
      <div className="h-full flex flex-col">
        <CompanySelector
          companies={companiesData}
          selectedCompanyId={selectedCompanyId}
          onCompanyChange={onCompanyChange}
        />
        {company && <CompanyWidget company={company} />}
      </div>
    </RMosaicWindow>
  );
};
