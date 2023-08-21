import React from "react";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[100vh] p-10 gap-[60px]">
      <Sidebar />
      {children}
    </div>
  );
};

export default PageLayout;
