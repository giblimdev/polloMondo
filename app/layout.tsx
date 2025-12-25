import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "react-day-picker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PolloMondo - Application Moderne",
  description:
    "Une application Next.js moderne avec authentification et notifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

        <Toaster position="bottom-right" richColors expand={false} />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
