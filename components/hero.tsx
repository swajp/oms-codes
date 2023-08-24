import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="h-screen w-full flex py-16 md:py-32 lg:py-48 bg-black items-center content-center justify-center">
        <div>
          <div className="flex items-center justify-center content-center p-4">
            <Image src="fakelogo.svg" alt="Logo" width={100} height={100} />
          </div>
          <div className=" max-w-screen-2xl">
            <h1 className="font-black text-white text-2xl md:text-5xl lg:text-6xl mt-2 md:mt-4 text-center p-4">
              ZKOUŠELI JSTE ZADAT KÓD DO{" "}
              <span className="text-[#FFFF00]">KAZMOVA</span> TREZORU?{" "}
              <span className="text-[#FFFF00]">POMOZTE</span> K VÝHŘE JINÝM
              HRÁČŮM <span className="text-[#FFFF00]">ZADÁNÍM</span> VAŠEHO KÓDU
              A SNIŽTE TAK ŠANCI NA OPAKOVÁNÍ CHYBNÝCH{" "}
              <span className="text-[#FFFF00]">KÓDŮ</span>!
            </h1>
            <div className="flex justify-center gap-4">
              <button className="text-black p-2 md:p-4 bg-[#FFFF00] hover:bg-white transition-all font-bold uppercase text-md md:text-lg lg:text-xl">
                <Link href="/kody">Seznam kódů</Link>
              </button>
              <button className="text-white p-2 md:p-4 border-2 md:border-4 border-[#FFFF00] transition-all font-bold uppercase text-md md:text-lg lg:text-xl">
                <Link href="/vlozeni-kodu">Zadat kód</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
