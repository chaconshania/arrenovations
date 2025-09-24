import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: "400" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Roofing, Siding & K-Style Gutters | A&R Renovations LLC – Free Estimates",
  description:
    "Expert roofing, siding, and K-style gutter installation. Free estimates on gutter inspections, roof repairs, and complete home exterior solutions. Call today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${manrope.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
