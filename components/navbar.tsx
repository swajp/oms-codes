"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function navbar() {
  const pathname = usePathname();
  return (
    <nav className=" fixed w-full flex items-center content-center tracking-tighter font-medium justify-center pt-6">
      <div className="flex gap-2 md:gap-4">
        <Link href="/">
          <p
            className={` hover:text-[#FFFF00] text-sm md:text-lg ${
              "/" === pathname ? "text-[#FFFF00]" : "text-white"
            }`}
          >
            VLOŽENÍ KÓDU
          </p>
        </Link>
        <Link href="/kody">
          <p
            className={` hover:text-[#FFFF00] text-sm md:text-lg ${
              "/kody" === pathname ? "text-[#FFFF00]" : "text-white"
            }`}
          >
            SEZNAM POUŽITÝCH KÓDŮ
          </p>
        </Link>
        <Link href="/podekovani">
          <p
            className={` hover:text-[#FFFF00] text-sm md:text-lg ${
              "/podekovani" === pathname ? "text-[#FFFF00]" : "text-white"
            }`}
          >
            PODĚKOVÁNÍ
          </p>
        </Link>
      </div>
    </nav>
  );
}
