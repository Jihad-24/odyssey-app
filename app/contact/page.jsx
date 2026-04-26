"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Message sent successfully!");
      setLoading(false);
      e.target.reset();
    }, 1000);
  };

  return (
  <div className="">
    <Navbar />
      <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 pt-20 pb-40">

      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl text-white">

        {/* LEFT INFO */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="text-white/70 mt-4 leading-relaxed">
            Have a question or need help? We’d love to hear from you.
            Send us a message and we’ll respond as soon as possible.
          </p>

          <div className="mt-8 space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              support@yourapp.com
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              +880 1234-567890
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              Narayanganj, Bangladesh
            </div>

          </div>

          <Link
            href="/"
            className="mt-10 text-sm text-white/70 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-10 text-black">

          <h2 className="text-2xl font-bold mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              placeholder="Your message"
              rows={5}
              required
              className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </div>
    <Footer />
  </div>
  );
}