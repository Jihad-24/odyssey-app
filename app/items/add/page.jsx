"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useRouter } from "next/navigation";

export default function AddItem() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now().toString(),
      title: e.target.title.value,
      shortDesc: e.target.shortDesc.value,
      fullDesc: e.target.fullDesc.value,
      price: Number(e.target.price.value),
      category: e.target.category.value,
    };

    const existing =
      JSON.parse(localStorage.getItem("items")) || [];

    localStorage.setItem(
      "items",
      JSON.stringify([...existing, newItem])
    );

    alert("✅ Item Added Successfully");

    router.push("/items");
  };

  return (
    <PrivateRoute>
      <div className="max-w-lg mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">
          Add New Item
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input
            name="title"
            placeholder="Title"
            required
            className="border p-2 rounded"
          />

          <input
            name="shortDesc"
            placeholder="Short Description"
            required
            className="border p-2 rounded"
          />

          <textarea
            name="fullDesc"
            placeholder="Full Description"
            required
            className="border p-2 rounded"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            required
            className="border p-2 rounded"
          />

          <select
            name="category"
            className="border p-2 rounded"
          >
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Accessories</option>
          </select>

          <button className="bg-green-600 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
}