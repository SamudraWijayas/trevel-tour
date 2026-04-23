"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const logoSrc = scrolled
    ? "/logo-green-jokindes.png"
    : "/logo-white-jokindes.png";
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-3 md:px-10 h-20">
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-13 h-13 rounded-xl flex items-center justify-center group-hover:shadow-md transition">
            <Image
              src={logoSrc}
              alt="Ndestours Logo"
              fill
              sizes="44px"
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight transition-all duration-300">
            <p
              className={`text-lg font-semibold tracking-wide transition ${
                scrolled ? "text-green-900" : "text-white"
              }`}
            >
              Ndestours
            </p>

            <p
              className={`text-xs transition ${
                scrolled ? "text-green-800/80" : "text-white/80"
              }`}
            >
              Tour & Event Organizer
            </p>
          </div>
        </div>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className={`transition hover:text-green-700 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Home
          </Link>

          {/* SERVICE */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 transition hover:text-green-700 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Service
              <ChevronDown
                size={16}
                className="transition group-hover:rotate-180"
              />
            </button>

            <div className="absolute top-full left-0 mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white shadow-lg rounded-xl p-2 border border-gray-100">
                <Link
                  href="/tour"
                  className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Tour
                </Link>
                <Link
                  href="/umrah"
                  className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Umrah
                </Link>
              </div>
            </div>
          </div>

          {/* DOCUMENT */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 transition hover:text-green-700 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Document
              <ChevronDown
                size={16}
                className="transition group-hover:rotate-180"
              />
            </button>

            <div className="absolute top-full left-0 mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white shadow-lg rounded-xl p-2 border border-gray-100">
                <Link
                  href="#"
                  className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Passport
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Visa
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={`transition hover:text-green-700 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            About
          </Link>
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
              className="fixed inset-0  z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-0 right-0 md:hidden bg-white z-50 px-6 py-6 space-y-6 shadow-xl rounded-b-2xl"
            >
              {/* Home */}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-800"
              >
                Home
              </Link>

              {/* Service */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Service
                </p>

                <div className="rounded-xl p-3 space-y-3">
                  <Link
                    href="/tour"
                    onClick={() => setOpen(false)}
                    className="block text-gray-700 hover:bg-gray-50 p-1 hover:text-green-700 transition"
                  >
                    Tour
                  </Link>

                  <Link
                    href="/umrah"
                    onClick={() => setOpen(false)}
                    className="block text-gray-700 hover:bg-gray-50 p-1 hover:text-green-700 transition"
                  >
                    Umrah
                  </Link>
                </div>
              </div>

              {/* Document */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Document
                </p>

                <div className=" rounded-xl p-3 space-y-3">
                  <Link
                    href="#"
                    className="block text-gray-700 hover:bg-gray-50 p-1 hover:text-green-700 transition"
                  >
                    Passport
                  </Link>

                  <Link
                    href="#"
                    className="block text-gray-700 hover:bg-gray-50 p-1 hover:text-green-700 transition"
                  >
                    Visa
                  </Link>
                </div>
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-800"
              >
                About
              </Link>

              {/* CTA */}
              <button className="w-full rounded-xl bg-green-800 text-white py-3 font-semibold hover:bg-green-900 transition">
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
