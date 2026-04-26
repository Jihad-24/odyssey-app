"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Items() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // 🔥 Fetch from backend
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = items
    .filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category ? item.category === category : true;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (price === "low") return a.price - b.price;
      if (price === "high") return b.price - a.price;
      return 0;
    });
const renderStars = (rating = 0) => {
  const stars = 5;

  return Array.from({ length: stars }).map((_, index) => {
    const value = rating - index;

    // full star
    if (value >= 1) {
      return (
        <svg
          key={index}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.956z" />
        </svg>
      );
    }

    // half star
    if (value >= 0.5) {
      return (
        <div key={index} className="relative w-4 h-4">
          {/* empty star */}
          <svg
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.956z" />
          </svg>

          {/* half fill */}
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.956z" />
            </svg>
          </div>
        </div>
      );
    }

    // empty star
    return (
      <svg
        key={index}
        className="w-4 h-4 text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.956z" />
      </svg>
    );
  });
};
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto pb-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Items Store
          </h1>

          {/* Filters */}
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
              <option value="">Sort by Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>

          {/* Grid */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white rounded-xl border overflow-hidden hover:shadow-lg transition duration-300"
                >
                  {/* Image + Badge */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                    />

                    {/* 🔥 Discount Badge */}
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -20%
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    {/* Title */}
                    <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
                      {item.title}
                    </h2>

                    {/* ⭐ Rating */}
                    <div className="flex items-center gap-1">
  {renderStars(item.rating)}

  <span className="text-gray-500 text-xs ml-1">
    ({item.ratingCount})
  </span>
</div>

                    {/* 💰 Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-orange-600">
                        ৳ {item.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ৳ {item.price + 200}
                      </span>
                    </div>

                    {/* 🚚 Extra info */}
                    <p className="text-xs text-gray-500">Free Delivery</p>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-2">
                      <Link
                        href={`/items/${item?._id}`}
                        className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition"
                      >
                        View
                      </Link>
{/* 
                      <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg text-sm transition">
                        Cart
                      </button> */}
                    </div>
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
      <Footer />
    </div>
  );
}
