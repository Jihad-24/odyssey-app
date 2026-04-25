import { itemsData } from "@/data/items";

export default async  function Details({ params }) {
   const { id } = await params;
console.log(id);
  const item = itemsData.find((i) => i.id === String(id));
  if (!item) {
    return (
      <div className="p-6 text-center text-gray-500">
        Item not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {item.title}
          </h1>

          <p className="mt-3 text-gray-600 leading-relaxed">
            {item.description}
          </p>

          {/* Meta */}
          <div className="mt-5 flex gap-4 text-sm">
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Category: {item.category}
            </span>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Price: ${item.price}
            </span>
          </div>

          {/* Related Section */}
          <h2 className="mt-10 text-xl font-semibold">
            Related Items
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {itemsData
              .filter(
                (i) =>
                  i.category === item.category && i.id !== item.id
              )
              .slice(0, 2)
              .map((rel) => (
                <div
                  key={rel.id}
                  className="border rounded-lg p-3 hover:shadow-md transition"
                >
                  <h3 className="font-semibold">{rel.title}</h3>
                  <p className="text-sm text-gray-500">
                    ${rel.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}