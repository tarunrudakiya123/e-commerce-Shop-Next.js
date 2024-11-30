

import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Components/Header"));

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-100 w-screen min-h-screen ">
        <Header />
        <hr />

        <main className="flex-1">{children}</main>
        
      </div>
    </>
  );
};

export default MainLayout;
