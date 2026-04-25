import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1 Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover & Manage Products Easily
          </h1>

          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            A simple, clean, and powerful platform to add, manage, and explore products with ease.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/items"
              className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              Explore Items
            </Link>

            <Link
              href="/items/add"
              className="px-6 py-3 rounded-full border hover:bg-gray-100 transition"
            >
              Add Product
            </Link>
          </div>
        </div>
      </section>

      {/* 2 Features */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        {[
          { title: "Fast Performance", desc: "Optimized Next.js architecture" },
          { title: "Secure Auth", desc: "Firebase authentication system" },
          { title: "Easy Management", desc: "Simple product CRUD system" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-2xl hover:shadow-lg transition bg-white"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 3 Featured Items */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Featured Items</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-5 hover:shadow-lg transition group"
            >
              <div className="h-40 bg-gray-100 rounded-xl mb-4 group-hover:scale-[1.02] transition" />
              <h3 className="font-semibold">Product {item}</h3>
              <p className="text-sm text-gray-500 mt-1">
                High quality product description
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Electronics", "Fashion", "Accessories", "More"].map((cat) => (
            <div
              key={cat}
              className="p-6 text-center border rounded-2xl hover:bg-black hover:text-white transition cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* 5 Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What Users Say</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "This app is super clean and easy to use!",
              "Managing products has never been this simple.",
            ].map((text, i) => (
              <div
                key={i}
                className="p-6 bg-white border rounded-2xl hover:shadow-md transition"
              >
                <p className="text-gray-600">"{text}"</p>
                <span className="text-sm text-gray-400 mt-3 block">
                  - Happy User
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Start managing your products today
        </h2>
        <p className="text-gray-500 mt-3">
          Join and organize everything in one place
        </p>

        <Link
          href="/register"
          className="inline-block mt-6 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
      </section>

      {/* 7 Footer */}
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
          
          <div>
            <h3 className="font-bold text-lg">Odyssey</h3>
            <p className="text-gray-400 text-sm mt-2">
              Simple product management platform
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/items" className="hover:underline">Items</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-8">
          © 2026 Odyssey. All rights reserved.
        </p>
      </footer>
    </>
  );
}