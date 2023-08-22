import Analytics from "@/components/analytics";
import "./globals.css";
import type { Metadata } from "next";
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
    <html lang="en">
      <body className={inter.className}>
        <main className="">
          <Analytics />
          {children}
        </main>
      </body>
    </html>
  );
}
