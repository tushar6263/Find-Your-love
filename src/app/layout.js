import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "Find Your Love",
  description: "Find the best for your Life",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-gray-900">
   
        <main>{children}</main>
        
      </body>
    </html>
  );
}
