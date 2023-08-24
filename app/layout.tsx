import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { csCZ } from "@clerk/localizations";

import type { Metadata } from "next";

import Analytics from "@/components/analytics";
import Navbar from "@/components/navbar";

import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMS - SEZNAM KÓDŮ",
  description: "Zjistěte, jaké kódy již byly použity do Kazmovy soutěže",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={csCZ} appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <main className="">
            <Analytics />
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
