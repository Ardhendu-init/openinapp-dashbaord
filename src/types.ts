import { ReactNode } from "react";

export interface NavItem {
  title: string;
  iconLoc: string;
}
export interface ChildrenProps {
  children: ReactNode;
}
export interface WeeklyVisit {
  week: number;
  userVisits: number;
  guestVisits: number;
}

export interface MonthlyVisit {
  month: string;
  year: number;
  weeklyVisits: WeeklyVisit[];
}
export interface InfoItem {
  id: number;
  iconLocation: string;
  title: string;
  bgcolor: string;
  quantity: string;
}
export interface PieChartData {
  name: string;
  salesPercentage: number;
  fill: string;
}
export interface ScheduleItem {
  id: number;
  title: string;
  timing: string;
  location: string;
  color: string;
}
