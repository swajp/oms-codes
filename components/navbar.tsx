import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <nav className=" fixed w-full flex items-center content-center tracking-tighter font-medium justify-center pt-6">
      <div>
        <Link href="#">
          <p className="text-white hover:text-[#FFFF00]">
            SEZNAM POUŽITÝCH KÓDŮ
          </p>
        </Link>
      </div>
    </nav>
  );
}
