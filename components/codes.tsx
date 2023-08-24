"use client";

import React, { useEffect, useState } from "react";

import moment from "moment";

export default async function page() {
  const [codes, setCodes] = useState([]);
  const [limit, setLimit] = useState(100);

  async function fetchMoreData() {
    const response = await fetch(`/api/form?limit=${limit}`, {
      cache: "no-cache",
    });
    const { codes } = await response.json();
    setCodes(codes);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/form?limit=${limit}`, {
          cache: "no-cache",
        });
        const { codes } = await response.json();
        setCodes(codes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="max-w-screen-xl  mx-auto p-4">
      <div className="py-28 md:py-48 lg:py-64">
        <h1 className="font-black text-[#FFFF00] text-2xl md:text-4xl lg:text-6xl mb-2 md:mb-6">
          POUŽITÉ KÓDY:
        </h1>

        <div className="flex justify-between mb-2">
          <p className="text-white text-md md:text-xl lg:text-2xl font-black">
            ZADANÝ KÓD
          </p>
          <p className="text-white text-md md:text-xl lg:text-2xl font-black">
            ČAS ZADÁNÍ
          </p>
        </div>
        <>
          {codes.map((code: any) => (
            <div
              key={code.code}
              className="text-white text-2xl md:text-4xl lg:text-4xl font-light flex justify-between"
            >
              <div key={code.code}>{code.code}</div>
              <div key={code.date}>
                {moment(code.date).format("DD/MM v HH:mm")}
              </div>
            </div>
          ))}
        </>

        <button
          className="bg-[#FFFF00] hover:bg-[#fffc47] text-black uppercase font-bold py-2 px-4 rounded mt-4"
          onClick={() => {
            setLimit(limit + 100);
            fetchMoreData();
          }}
        >
          ZOBRAZIT DALŠÍ
        </button>
      </div>
    </section>
  );
}
