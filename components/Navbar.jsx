"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/items", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Odyssey
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Guest Auth */}
          {!user ? (
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-1.5 text-sm rounded-full border hover:bg-gray-100 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-1.5 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            /* User Dropdown */
            <div className="relative hidden md:block">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1.5 border rounded-full hover:bg-gray-100 transition"
              >
                <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm max-w-[120px] truncate">
                  {user.email}
                </span>
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-56 bg-white border shadow-xl rounded-xl overflow-hidden">
                  
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-medium truncate">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    href="/items/add"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Add Product
                  </Link>

                  <Link
                    href="/items/manage"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Manage Products
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t px-4 py-3 space-y-2 bg-white">
          
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {!user ? (
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/login"
                className="border rounded-lg px-3 py-2 text-sm"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-black text-white rounded-lg px-3 py-2 text-sm"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="pt-2 border-t mt-2">
              <p className="text-sm mb-2 truncate">{user.email}</p>

              <Link
                href="/items/add"
                className="block py-2 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Add Product
              </Link>

              <Link
                href="/items/manage"
                className="block py-2 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Manage Products
              </Link>

              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="text-red-500 text-sm py-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}