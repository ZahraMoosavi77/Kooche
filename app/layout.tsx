import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { NewPageProvider } from "@/context/NewContext";
import { Navbar } from "@/index";
import { MapProvider } from "@/context/map/mapContext";
import React from "react";

export const metadata = {
  title: "کوچه جایی برای اشتراک بازی",
  description: "اشتراک بازی",
};

export default function RootLayout({
  children,
}: ChildrenProp) {
  return (
    <AuthContextProvider>
      <MapProvider>
        <NewPageProvider>
          <html lang="en" dir="rtl">
            <body className="flex flex-col h-screen relative">
              <Navbar />
              {children}
            </body>
          </html>
        </NewPageProvider>
      </MapProvider>
    </AuthContextProvider>
  );
}
