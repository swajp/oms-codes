import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-black absolute top-0 left-0  ">
      <div className="p-8">
        <div className="md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              height="48"
              width="48"
              src="/logo.svg"
              className="mr-3"
              alt="Drie Logo"
            />
            <span className="self-center text-2xl font-black whitespace-nowrap text-white">
              DRIE
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
