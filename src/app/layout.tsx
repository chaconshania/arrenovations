import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { PageWrapper } from "@/components/page-wrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased`}>
        <PageWrapper>
          <Header />
          {children}
          <Footer />
        </PageWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
