"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Components/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("../Components/Footer"), {
  ssr: false,
});

const MainLayout = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <Header cart={cart} className="sticky top-0 z-50 bg-white shadow-md" />
      <hr />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
