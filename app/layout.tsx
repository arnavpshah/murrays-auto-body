import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.murraysautobody.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Murray's Auto Body | Collision Repair in Westford, MA",
    template: "%s | Murray's Auto Body",
  },
  description:
    "Professional collision and auto body repair in Westford, Massachusetts. Call Murray's Auto Body today for trusted local service.",
  keywords: [
    "Westford auto body shop",
    "collision repair Westford MA",
    "auto body repair near me",
    "dent repair Westford",
    "car paint repair Westford",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Murray's Auto Body | Collision Repair in Westford, MA",
    description:
      "Professional collision and auto body repair in Westford, Massachusetts. Call Murray's Auto Body today for trusted local service.",
    type: "website",
    url: SITE_URL,
    siteName: "Murray's Auto Body",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 antialiased">
        <Navbar />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <Footer />
        <StickyCallButton />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
