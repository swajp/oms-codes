import Image from "next/image";
import React from "react";

export default function ThanksPage() {
  return (
    <section className="h-screen w-full flex py-16 md:py-32 lg:py-48 bg-black justify-center">
      <div>
        <div className="flex items-center justify-center content-center p-4">
          <Image src="fakelogo.svg" alt="Logo" width={100} height={100} />
        </div>

        <h1 className="font-black text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-4 text-left md:text-center p-8 md:p-12 ">
          CHCETE SE <span className="text-[#FFFF00]">OBJEVIT</span> NA TÉTO
          STRÁNCE? <span className="text-[#FFFF00]">SDÍLEJTE</span> NÁS NA SOC.
          SÍTÍCH POD HASHTAGEM
          <span className="text-[#FFFF00]">#KAZMADRIE</span>
        </h1>
      </div>
    </section>
  );
}
