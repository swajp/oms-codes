import React from "react";
import Codes from "@/components/codes";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <>
      <main className="bg-black h-full w-full">
        <Navbar />
        <Codes />
      </main>
    </>
  );
}
