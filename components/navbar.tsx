"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function navbar() {
  const pathname = usePathname();
  return (
    <nav className=" fixed w-full flex items-center content-center tracking-tighter font-medium justify-center pt-6">
      <div className="flex gap-4">
        <Link href="/">
          <p
            className={` hover:text-[#FFFF00] ${
              "/" === pathname ? "text-[#FFFF00]" : "text-white"
            }`}
          >
            VLOŽENI KÓDU
          </p>
        </Link>
        <Link href="/kody">
          <p
            className={` hover:text-[#FFFF00] ${
              "/kody" === pathname ? "text-[#FFFF00]" : "text-white"
            }`}
          >
            SEZNAM POUŽITÝCH KÓDŮ
          </p>
        </Link>
      </div>
    </nav>
  );
}
