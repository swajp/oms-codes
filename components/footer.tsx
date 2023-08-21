import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-black absolute bottom-0 left-0  ">
      <div className="p-8">
        <div className="md:mb-0">
          <Link href="https://twitter.com/DRIECZ" className="flex items-center">
            <span className="self-center text-md whitespace-nowrap text-white mr-2">
              Vytvořilo
            </span>
            <Image
              height="32"
              width="32"
              src="/logo.svg"
              className="mr-3 border border-neutral-800 rounded-full"
              alt="Drie Logo"
            />
            <span className="self-center text-lg font-black whitespace-nowrap text-white">
              DRIE
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
