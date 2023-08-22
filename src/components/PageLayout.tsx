import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { ChildrenProps } from "@/types";

const PageLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex w-100 sm:p-5 lg:p-10 p-3 lg:gap-[60px]">
      <div>
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
