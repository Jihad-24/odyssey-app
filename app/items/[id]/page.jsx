import { itemsData } from "@/data/items";
import Link from "next/link";

export default async function Details({ params }) {
  const { id } = await params;

  const item = itemsData.find((i) => i.id === String(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Item not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          href="/items"
          className="text-sm font-medium text-gray-600 hover:text-black transition"
        >
          ← Back to Items
        </Link>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

        {/* IMAGE */}
        <div className="bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>

        {/* DETAILS */}
        <div className="p-8 flex flex-col justify-center">

          <h1 className="text-4xl font-bold text-gray-900">
            {item.title}
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {item.fullDescription || item.description}
          </p>

          {/* KEY INFO */}
          <div className="mt-6 space-y-3">

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Category</span>
              <span className="font-medium">{item.category}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Price</span>
              <span className="font-bold text-black">
                ${item.price}
              </span>
            </div>

          </div>

          {/* CTA */}
          <button className="mt-6 cursor-pointer bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* RELATED ITEMS */}
      <div className="max-w-6xl mx-auto mt-12">

        <h2 className="text-2xl font-bold mb-6">
          Related Items
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {itemsData
            .filter(
              (i) =>
                i.category === item.category && i.id !== item.id
            )
            .slice(0, 3)
            .map((rel) => (
              <Link
                href={`/items/${rel.id}`}
                key={rel.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={rel.image}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">
                    {rel.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    ${rel.price}
                  </p>
                </div>
              </Link>
            ))}

        </div>
      </div>
    </div>
  );
}