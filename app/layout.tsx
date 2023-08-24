import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Analytics from "@/components/analytics";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

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
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <main className="">
            <Analytics />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
