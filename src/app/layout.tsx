import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Lato, Open_Sans } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-openSans" });
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Dashbaord",
  description: "Openin app's Dashboard ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${lato.variable}  bg-[#f5f5f5]`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
