import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideNavigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPPP App",
  description: "This the the sensor tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNavigation />
        <div className="w-full p-4 min-h-screen flex flex-col justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
