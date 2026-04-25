"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="font-bold text-lg">Odyssey</h3>
          <p className="text-gray-400 text-sm mt-2">
            Simple product management platform
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/items" className="hover:underline">
            Items
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-8">
        © 2026 Odyssey. All rights reserved.
      </p>
    </footer>
  );
}
