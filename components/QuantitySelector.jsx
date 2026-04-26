"use client";

import { useState } from "react";

export default function QuantitySelector({ onChange }) {
  const [qty, setQty] = useState(1);

  const updateQty = (value) => {
    if (value < 1) return;
    setQty(value);
    onChange?.(value);
  };

  return (
    <div className="mt-6 border-b pb-3 flex items-center justify-between w-full">
      <span className="text-gray-500">Quantity</span>

      <div className="flex items-center w-40 md:w-60 border rounded-xl overflow-hidden">
        <button
          onClick={() => updateQty(qty - 1)}
          className="flex-1 py-2 text-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          -
        </button>

        <span className="flex-1 py-2 text-center text-base font-medium">
          {qty}
        </span>

        <button
          onClick={() => updateQty(qty + 1)}
          className="flex-1 py-2 text-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          +
        </button>
      </div>
    </div>
  );
}
