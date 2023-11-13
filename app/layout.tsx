import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import { MapProvider } from "@/context/map/mapContext";
import { AuthContextProvider } from "@/context/AuthContext";
import { NewPageProvider } from "@/context/NewContext";

export const metadata = {
  title: "کوچه جایی برای اشتراک بازی",
  description: "اشتراک بازی",
};

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
       {/* <NewPageProvider> */}
       <MapProvider>
       
      <html lang="en" dir="rtl">
        <body className="flex flex-col h-screen relative">
         
            <Navbar />

            {children}
        
        </body>
      </html>
      
      </MapProvider>
      {/* </NewPageProvider> */}
    </AuthContextProvider>
  );
}
