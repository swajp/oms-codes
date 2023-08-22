import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Maintenance() {
  return (
    <div className="h-screen w-full flex items-center bg-black content-center justify-center flex-col gap-12">
      <div>
        <Image src="fakelogo.svg" height={100} width={100} alt="Logo" />
      </div>
      <div className="text-center">
        <h1 className="font-black text-white text-xl md:text-4xl lg:text-5xl mb-2">
          PROBÍHA ÚDRŽBA!
        </h1>
        <h1 className="font-black text-white text-xl md:text-4xl lg:text-5xl mb-2">
          BUDEME ZPĚT <span className="text-[#FFFF00]">23.08</span> VE{" "}
          <span className="text-[#FFFF00]">12:00</span>
        </h1>
        <h1 className="font-black text-white text-sm md:text-md lg:text-xl">
          Aktualní stav můžete sledovat na{" "}
          <Link href="https://twitter.com/DRIECZ">
            <span className="underline text-[#FFFF00]">zde!</span>
          </Link>
        </h1>
      </div>
    </div>
  );
}
