import React from "react";
import Image from "next/image";

export default function loading() {
  return (
    <section className=" h-screen w-full flex items-center bg-black content-center justify-center fixed z-10">
      <div>
        <Image src="/oms.jpg" alt="OMS Logo" width={100} height={100} />
      </div>
    </section>
  );
}
