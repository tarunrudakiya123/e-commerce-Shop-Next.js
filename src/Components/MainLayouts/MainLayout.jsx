"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../MainLayouts/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("../MainLayouts/Footer"), {
  ssr: false,
});

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <Header className="sticky top-0 z-50 bg-white shadow-md" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
