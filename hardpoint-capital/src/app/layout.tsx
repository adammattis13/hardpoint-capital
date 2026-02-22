import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hardpoint Capital | Working Capital for Growing Businesses",
    template: "%s | Hardpoint Capital",
  },
  description:
    "Hardpoint Capital provides fast, flexible working capital to small and mid-sized businesses. From application to funding in as little as 24 hours.",
  keywords: [
    "merchant cash advance",
    "business funding",
    "working capital",
    "small business funding",
    "business cash advance",
    "fast business funding",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hardpoint Capital",
    title: "Hardpoint Capital | Working Capital for Growing Businesses",
    description:
      "Fast, flexible working capital for small and mid-sized businesses. From application to funding in as little as 24 hours.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
