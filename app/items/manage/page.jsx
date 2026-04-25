"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Manage() {
  const [items, setItems] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("items")) || [];
    setItems(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = items.filter((i) => i.id !== id);

    setItems(updated);
    localStorage.setItem("items", JSON.stringify(updated));
  };

  return (
    <PrivateRoute>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">
          Manage Items
        </h1>

        {items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="border p-3 rounded flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    ${item.price}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link href={`/items/${item.id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PrivateRoute>
  );
}