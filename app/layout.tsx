import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://murrays-auto-body.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Murray's Auto Body | Collision Repair in Westford, MA",
    template: "%s | Murray's Auto Body",
  },
  description:
    "Professional collision and auto body repair in Westford, Massachusetts. Call Murray's Auto Body today for trusted local service — collision, dent, paint, frame, scratch, and insurance claims.",
  keywords: [
    "Westford auto body shop",
    "collision repair Westford MA",
    "auto body repair near me",
    "dent repair Westford",
    "car paint repair Westford",
    "frame repair Westford MA",
    "scratch removal Westford",
    "insurance claims body shop Westford",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dc2626",
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
        <ChatWidget />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
