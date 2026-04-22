"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky shadow-lg top-0 inset-x-0 z-50 bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between px-6 md:px-10 h-20">
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-11 h-11 rounded-xl flex items-center justify-center group-hover:shadow-md transition">
            <Image
              src="/logo-green-jokindes.png"
              alt="Ndestours Logo"
              fill
              sizes="44px"
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-green-900 text-lg font-semibold tracking-wide group-hover:text-green-700 transition">
              Ndestours
            </p>
            <p className="text-xs text-green-800/80">Tour & Event Organizer</p>
          </div>
        </div>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-md">
          <Link href="/">Home</Link>

          {/* Service */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("service")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1">
              Service
              <ChevronDown
                className={`transition ${
                  dropdown === "service" ? "rotate-180" : ""
                }`}
                size={16}
              />
            </button>

            {dropdown === "service" && (
              <div className="absolute top-full mt-2 w-40 border bg-white shadow-lg rounded-lg p-2">
                <Link
                  href="/tour"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Tour
                </Link>
                <Link
                  href="/umrah"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Umrah
                </Link>
              </div>
            )}
          </div>

          {/* Document */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("document")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1">
              Document
              <ChevronDown
                className={`transition ${
                  dropdown === "document" ? "rotate-180" : ""
                }`}
                size={16}
              />
            </button>

            {dropdown === "document" && (
              <div className="absolute top-full mt-2 w-40 border bg-white shadow-lg rounded-lg p-2">
                <Link
                  href="#"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Passport
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Visa
                </Link>
              </div>
            )}
          </div>

          <Link href="/about">About</Link>
        </nav>

        {/* BUTTON */}
        <button className="hidden md:block rounded-full bg-green-800 text-white px-5 py-2 text-sm font-semibold hover:bg-green-900 transition">
          Contact us
        </button>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-white z-50 px-6 py-6 space-y-5 shadow-xl rounded-b-2xl"
            >
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <div>
                <p className="font-semibold">Service</p>
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/tour" onClick={() => setOpen(false)}>
                    Tour
                  </Link>
                  <Link href="/umrah" onClick={() => setOpen(false)}>
                    Umrah
                  </Link>
                </div>
              </div>

              <div>
                <p className="font-semibold">Document</p>
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="#">Passport</Link>
                  <Link href="#">Visa</Link>
                </div>
              </div>

              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>

              <button className="w-full rounded-full bg-green-800 text-white py-2 font-semibold">
                Contact us
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
