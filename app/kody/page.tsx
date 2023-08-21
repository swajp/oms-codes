import React from "react";
import Navbar from "@/components/navbar";
import Codes from "@/components/codes";

export default function Page() {
  return (
    <main className="bg-black h-full w-full">
      <Navbar />
      <Codes />
    </main>
  );
}
