"use client";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const MainLayout = dynamic(
  () => import("../Components/MainLayouts/MainLayout"),
  {
    ssr: false,
  }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Toaster />
          <MainLayout>{children}</MainLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
