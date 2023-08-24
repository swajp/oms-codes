"use client";

import { useEffect, useState } from "react";

export default function PopUp() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const welcomeMessageDisplayed = localStorage.getItem(
      "welcomeMessageDisplayed"
    );
    if (!welcomeMessageDisplayed || welcomeMessageDisplayed == "false") {
      setShowMessage(true);
    }
  }, []);

  const hideMessage = () => {
    setShowMessage(false);
    localStorage.setItem("welcomeMessageDisplayed", "true");
  };

  if (!showMessage) {
    return null;
  } else {
  }

  return (
    <div className="welcome-message fixed p-8 bg-black border-2 border-[#FFFF00] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-2xl">
      <div className="flex flex-col w-72 md:w-fit">
        <p className="text-white font-black text-xl lg:text-3xl mb-2">
          AKTUÁLNÍ ZMĚNY
        </p>
        <p className="text-white font-medium  text-md md:text-xl lg:text-2xl pb-4">
          Z důvodu velkého množství fiktivních kódů, které se nám začaly
          objevovat, jsme se rozhodli smazat uložená data a přidat autorizaci
          pro zabránění spamu.
        </p>

        <button
          className="font-black text-md md:text-xl lg:text-2xl text-[#FFFF00] "
          onClick={hideMessage}
        >
          ZAVŘÍT ZPRÁVU
        </button>
      </div>
    </div>
  );
}
