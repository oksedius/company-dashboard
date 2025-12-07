export interface Company {
  id: string;
  name: string;
  ticker: string;
  sector: string;
  industry: string;
  description: string;
  founded: string;
  headquarters: string;
  ceo: string;
  employees: number;
  revenue: string;
  marketCap: string;
  website: string;
}

export type ViewId = "widget1" | "widget2" | "widget3";
