import { itemsData } from "@/data/items";
import Link from "next/link";
import QuantitySelector from "@/components/QuantitySelector";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Details({ params }) {
  const { id } = await params;
  const [itemRes, allRes] = await Promise.all([
    fetch(`http://localhost:5001/items/${id}`, { cache: "no-store" }),
    fetch(`http://localhost:5001/products`, { cache: "no-store" }),
  ]);

  const item = await itemRes.json();
  const allItems = await allRes.json();

  if (!itemRes.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Item not found
      </div>
    );
  }
  console.log(allItems);

  // const item = await res.json();

  const renderStars = (rating = 0) => {
    const stars = 5;

    return Array.from({ length: stars }).map((_, index) => {
      const value = rating - index;

      if (value >= 1) {
        return (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.956z" />
          </svg>
        );
      }

      if (value >= 0.5) {
        return (
          <div key={index} className="relative w-5 h-5">
            <svg
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.956z" />
            </svg>

            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.956z" />
              </svg>
            </div>
          </div>
        );
      }

      return (
        <svg
          key={index}
          className="w-5 h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.956z" />
        </svg>
      );
    });
  };

  const relatedItems = allItems
    .filter((i) => i.category === item.category && i._id !== item._id)
    .slice(0, 3);

  return (
    <div className="">
      <Navbar />

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
            <h1 className="text-4xl font-bold text-gray-900">{item.title}</h1>

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
                <div className=" flex items-center gap-4">
                  <span className=" font-bold text-black">৳ {item.price}</span>

                  <span className="text-gray-400 line-through">
                    ৳ {item.oldPrice}
                  </span>
                </div>{" "}
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Rating</span>
                {/* RATING */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    {renderStars(item.rating)}
                  </div>

                  <span className="text-sm text-gray-600">
                    {item.rating} ({item.ratingCount})
                  </span>
                </div>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">DISCOUNT </span>
                <div className=" inline-block bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
                  {item.discount}% OFF
                </div>
              </div>
            </div>

            {/* QUANTITY */}
            <QuantitySelector />

            {/* CTA */}
            <button className="mt-6 cursor-pointer bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* RELATED ITEMS */}
        <div className="max-w-6xl mx-auto mt-12 pb-10">
          <h2 className="text-2xl font-bold mb-6">Related Items</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedItems.length > 0 ? (
              relatedItems.map((rel) => (
                <Link
                  href={`/items/${rel._id}`}
                  key={rel._id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img src={rel.image} className="h-40 w-full object-cover" />

                  <div className="p-4">
                    <h3 className="font-semibold">{rel.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">${rel.price}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-700 col-span-full text-2xl text-center">
                No related items for this product
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
