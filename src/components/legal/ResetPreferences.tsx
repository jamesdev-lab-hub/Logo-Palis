"use client";

import { useState } from "react";
import { promoConfig } from "@/config/discounts";

/** Clears the site's stored preferences (discount popup state) from this browser. */
export function ResetPreferences() {
  const [done, setDone] = useState(false);
  function clear() {
    try {
      window.localStorage.removeItem(promoConfig.storageKey);
      window.sessionStorage.removeItem(`${promoConfig.storageKey}-session`);
    } catch {
      /* storage unavailable */
    }
    setDone(true);
  }
  return (
    <span className="mt-4 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={clear}
        className="rounded-full bg-ink px-5 py-3 text-[15px] font-semibold text-white transition hover:brightness-125"
      >
        Clear stored site data
      </button>
      <span role="status" className="text-[15px] font-medium text-ink">
        {done ? "Done — stored site data was cleared from this browser." : ""}
      </span>
    </span>
  );
}
