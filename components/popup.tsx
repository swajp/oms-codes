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
          K ČEMU WEB SLOUŽÍ?
        </p>
        <p className="text-white font-medium  text-md md:text-xl lg:text-2xl">
          Sdílejete s ostatními vaše kódy, kterými jste se pokusili odemčít
          trezor.
        </p>
        <p className="text-white font-medium text-md md:text-xl lg:text-2xl mb-6">
          Neručíme za to, že kódy, které jsou zde napsané byly opravdu použity.
          Proto bychom ocenili, kdybyste se k sobě chovali férově.
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
