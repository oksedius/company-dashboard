import  { useState } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import type { MosaicNode } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import { CompanyWidget } from "./CompanyWidget";
import { CompanySelector } from "./CompanySelector";
import { companiesData } from "../data/companiesData";
import type { ViewId } from "../types/Company";

const INITIAL_VALUE: MosaicNode<ViewId> = {
  direction: "row",
  first: "widget1",
  second: {
    direction: "column",
    first: "widget2",
    second: "widget3",
  },
};

const TITLE_MAP: Record<ViewId, string> = {
  widget1: "Company Widget 1",
  widget2: "Company Widget 2",
  widget3: "Company Widget 3",
};

export const CompanyDashboard: React.FC = () => {
  const [selectedCompanies, setSelectedCompanies] = useState<
    Record<ViewId, string>
  >({
    widget1: "1",
    widget2: "2",
    widget3: "3",
  });

  const handleCompanyChange = (viewId: ViewId, companyId: string) => {
    setSelectedCompanies((prev) => ({
      ...prev,
      [viewId]: companyId,
    }));
  };

  const renderTile = (id: ViewId, path: any[]) => {
    const company = companiesData.find((c) => c.id === selectedCompanies[id]);

    return (
      <MosaicWindow path={path} title={TITLE_MAP[id]} toolbarControls={<div />}>
        <div className="h-full flex flex-col">
          <CompanySelector
            companies={companiesData}
            selectedCompanyId={selectedCompanies[id]}
            onCompanyChange={(companyId) => handleCompanyChange(id, companyId)}
            widgetNumber={0}
          />
          {company && <CompanyWidget company={company} />}
        </div>
      </MosaicWindow>
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg z-10">
        <h1 className="text-4xl font-bold mb-2">Company Dashboard</h1>
        <p className="text-blue-100">
          Drag windows to rearrange • Resize by dragging borders • Split windows
          with buttons
        </p>
      </div>

      <div className="flex-1">
        <Mosaic<ViewId>
          renderTile={renderTile}
          initialValue={INITIAL_VALUE}
          className="mosaic-blueprint-theme"
        />
      </div>
    </div>
  );
};
