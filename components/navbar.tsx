import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <nav className=" fixed w-full flex items-center content-center tracking-tighter font-medium justify-center pt-6">
      <div className="flex gap-4">
        <Link href="/">
          <p className="text-white hover:text-[#FFFF00]">VLOŽENI KÓDU</p>
        </Link>
        <Link href="/kody">
          <p className="text-white hover:text-[#FFFF00]">
            SEZNAM POUŽITÝCH KÓDŮ
          </p>
        </Link>
      </div>
    </nav>
  );
}
