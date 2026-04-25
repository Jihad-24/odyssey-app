"use client";

import { useState } from "react";
import { itemsData } from "@/data/items";
import ItemCard from "@/components/ItemCard";
import Link from "next/link";

export default function Items() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const filtered = itemsData.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category ? item.category === category : true;

    const matchesPrice = price ? item.price <= Number(price) : true;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Items Store
        </h1>

        {/* Search + Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm border grid md:grid-cols-3 gap-3">
          <input
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Search items..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>

          <select
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="100">Under 100</option>
            <option value="500">Under 500</option>
          </select>
        </div>

        {/* Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>

                 <button className="mt-4 w-full">
  <Link
    href={`/items/${item?.id}`}
    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center transition"
  >
    View Details
  </Link>
</button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10">
              No items found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}