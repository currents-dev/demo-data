"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div id="counter" className="flex items-center gap-4 p-4 border rounded-lg">
      <button
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        -
      </button>
      <span className="text-xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}
