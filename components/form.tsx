"use client";
import React, { useState } from "react";

export default function Form() {
  const [code, setCode] = useState("");
  const [error, setError] = useState([]);
  const [errorInput, setErrorInput] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (code.length < 10) {
      setErrorInput("KÓD MUSÍ OBSAHOVAT 10 ČÍSEL");
      return;
    }
    if (code.length >= 11) {
      setErrorInput("KÓD MUSÍ OBSAHOVAT 10 ČÍSEL");
      return;
    }
    setErrorInput("");
    const response = await fetch("api/form", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const { msg, success } = await response.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setCode("");
    }
  };
  return (
    <section className="h-screen w-full flex items-center bg-black content-center justify-center">
      <form onSubmit={handleSubmit} action="" className="flex flex-col">
        <p className="font-black text-[#FFFF00] text-xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
          ZADEJTE 10 MÍSTNÍ KÓD
        </p>
        <input
          type="number"
          id="code"
          placeholder="1234567890"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          className="bg-transparent text-white border-2 mb-4 placeholder:text-neutral-800 border-neutral-300  focus:ring-0 p-6 md:p-8 pl-3 md:pl-6 font-medium spacing tracking-wider text-xl md:text-5xl lg:text-6xl focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <div className="flex ">
          <button className="text-black bg-[#FFFF00] p-2 md:p-4 text-lg md:text-2xl font-bold max-w-lg  hover:bg-white  transition-all">
            ODESLAT
          </button>
        </div>
        <div className="mt-4">
          <h1 className="text-white uppercase text-lg">{error}</h1>
          <h1 className="text-white uppercase text-lg">{errorInput}</h1>
          {success ? <h1 className="text-white uppercase text-lg"></h1> : ""}
        </div>
      </form>
    </section>
  );
}
