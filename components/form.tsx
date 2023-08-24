"use client";

import React, { useState } from "react";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState([]);
  const [errorInput, setErrorInput] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const honeypotValue = e.target.honeypot.value;

    if (honeypotValue) {
      return;
    }

    if (code.match(/^(?:[1-9]|10)$/)) {
      setErrorInput("KÓD NEMŮŽE OBSAHOVAT ZNAMÉNKO + NEBO -");
    } else {
      setErrorInput("");

      if (!isSubmitting) {
        setIsSubmitting(true);
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

        if (success) {
          setSuccess(success);
          setCode("");
        }

        setTimeout(() => {
          setIsSubmitting(false);
        }, 0);
      } else {
        setErrorInput("VYDRŽTE CHVÍLI PŘED DALŠÍM POSLÁNÍM...");
      }
    }
  };
  return (
    <section className="h-screen w-full flex items-center bg-black p-4 md:p-0 content-center justify-center">
      <form onSubmit={handleSubmit} action="" className="flex flex-col">
        <p className="font-black text-[#FFFF00] text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
          ZADEJTE 10-MÍSTNÝ KÓD
        </p>
        <input
          type="number"
          id="code"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          min={0}
          className="bg-transparent text-white border-[3px] mb-2 placeholder:text-neutral-800 border-neutral-300  focus:ring-0 p-6 md:p-8 pl-3 md:pl-6 font-medium spacing tracking-wider text-xl md:text-5xl lg:text-6xl focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <input type="text" name="honeypot" style={{ display: "none" }} />
        <p className="text-white mb-4">
          Buďme k sobě fér a zadejte kód, který jste opravdu použili :)
        </p>
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
