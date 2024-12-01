import MainLayout from "@/Components/MainLayout";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "e-commerce-app (Next.js)",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <MainLayout children={children}></MainLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
