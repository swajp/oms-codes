import React from "react";
import moment from "moment";

const getCodes = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/form/", {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch codes!");
    }
    return response.json();
  } catch (error) {
    console.log("Error while loading codes", error);
  }
};

export default async function Codes() {
  const { codes } = await getCodes();

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
            <div className="text-white text-2xl md:text-4xl lg:text-4xl font-light flex justify-between">
              <div key={code.id}>{code.code}</div>
              <div key={code.id}>
                {moment(code.date).format("DD/MM v hh:mm")}
              </div>
            </div>
          ))}
        </>
      </div>
    </section>
  );
}
