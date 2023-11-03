import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthContextProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
      <html lang="en" dir="rtl">
        <body className="flex flex-col h-screen">
        <Navbar />
        {children}
        </body>
      </html>
    </AuthContextProvider>
  );
}
