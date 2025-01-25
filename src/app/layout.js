import Navbar from "@/components/Navbar";
import "./globals.css";
import {  poppins } from "./fonts";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} `}>
      <body className="relative">
        <div className="fixed z-[999] top-0 w-full">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
