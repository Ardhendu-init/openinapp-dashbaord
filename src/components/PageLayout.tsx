import React from "react";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  w-100 md:p-10  p-3 md:gap-[60px]">
      <div>
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
