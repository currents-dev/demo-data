"use client";

import { useState } from "react";

export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div id="toggle" className="flex items-center gap-4 p-4 border rounded-lg">
      <span className="text-lg">{isOn ? "ON" : "OFF"}</span>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`px-4 py-2 rounded ${
          isOn
            ? "bg-green-500 hover:bg-green-600"
            : "bg-red-500 hover:bg-red-600"
        } text-white`}
      >
        Toggle
      </button>
    </div>
  );
}
