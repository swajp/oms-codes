"use client";
import React, { useState } from "react";

export default function Form() {
  const [code, setCode] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("api/form", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    console.log(response);

    const { msg } = await response.json();
    setError(msg);
    console.log(error);
  };
  return (
    <section className="h-screen w-full flex items-center bg-black content-center justify-center">
      <form onSubmit={handleSubmit} action="" className="flex flex-col">
        <p className="font-black text-[#FFFF00] text-5xl mb-4">
          ZADEJTE 10 MÍSTNÍ KÓD
        </p>
        <input
          type="text"
          id="code"
          placeholder="1234567890"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          className="bg-transparent text-white border-2 mb-4 placeholder:text-neutral-800 border-neutral-300  focus:ring-0 p-8 pl-6 font-medium spacing tracking-wider text-6xl focus:outline-none"
        />
        <div className="flex ">
          <button className="text-black bg-[#FFFF00] p-4 text-2xl font-bold max-w-lg  hover:bg-white  transition-all">
            ODESLAT
          </button>
        </div>
        <div>
          <h1 className="text-white">Error</h1>
        </div>
      </form>
    </section>
  );
}
