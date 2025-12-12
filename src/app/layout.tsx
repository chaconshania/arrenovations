import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
    "Roofing & Gutter Contractors Fairfield County CT | A&R Renovations",
  description:
    "Expert roofing, gutter installation & siding services in Fairfield County, CT. Licensed & insured with 10+ years experience. Serving Stamford, Norwalk, Greenwich & all of CT. Free estimates. 24/7 services",
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
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
