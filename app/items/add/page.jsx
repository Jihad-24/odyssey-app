"use client";

import PrivateRoute from "@/components/PrivateRoute";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddItem() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      title: e.target.title.value,
      shortDesc: e.target.shortDesc.value,
      fullDesc: e.target.fullDesc.value,
      price: Number(e.target.price.value),
      category: e.target.category.value,
    };

    try {
      await axios.post("http://localhost:5000/items", newItem);

      alert("Item added successfully");
      router.push("/items");
    } catch (error) {
      console.error(error);
      alert("Failed to add item");
    }
  };

  return (
    <PrivateRoute>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="w-full max-w-2xl relative">
          {/* glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-xl opacity-30"></div>

          {/* glass card */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-white">
            <h1 className="text-3xl font-bold">Create New Item</h1>
            <p className="text-white/70 mt-1 mb-6">
              Add product details to your store
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="title"
                placeholder="Product title"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl p-3 outline-none focus:ring-2 focus:ring-pink-500 placeholder-white/50"
              />

              <input
                name="shortDesc"
                placeholder="Short description"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-500 placeholder-white/50"
              />

              <textarea
                name="fullDesc"
                placeholder="Full description"
                required
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/50"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="price"
                  type="number"
                  placeholder="Price"
                  required
                  className="bg-white/10 border border-white/20 rounded-xl p-3 outline-none focus:ring-2 focus:ring-pink-500 placeholder-white/50"
                />

                <select
                  name="category"
                  className="bg-black/10 border text-black border-white/20 rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Accessories</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition transform"
                onSubmit={handleSubmit}
              >
                Add Item
              </button>
            </form>
            <Link href={"/items"}>
              <button
                type="submit"
                className="w-full cursor-pointer mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition transform"
              >
                Back to Items
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
