"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "DOMŮ",
    href: "/",
  },
  {
    label: "VLOŽENÍ KÓDU",
    href: "/vlozeni-kodu",
  },
  {
    label: "SEZNAM KÓDŮ",
    href: "/kody",
  },
  {
    label: "PODĚKOVÁNÍ",
    href: "/podekovani",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  return (
    <header>
      <nav className="fixed w-full items-center content-center justify-center pt-6 ">
        <button
          onClick={() => setNavbar(!navbar)}
          data-collapse-toggle="navbar-cta"
          type="button"
          className="inline-flex items-center bg-black p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none  text-gray-400  "
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          {navbar ? (
            <p className="text-white">ZAVŘÍT</p>
          ) : (
            <p className="text-white">MENU</p>
          )}
        </button>

        <div
          className={`items-center justify-center md:flex w-full md:w-auto ${
            navbar ? "flex" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-semibold p-6 md:p-4 mt-3 md:flex-row md:space-x-8 md:mt-0 ">
            {routes.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.href}
                  key={route.href}
                  className={`block py-2 pl-3 pr-4 md:p-0 ${
                    route.href === pathname ? "text-[#FFFF00]" : "text-white "
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
