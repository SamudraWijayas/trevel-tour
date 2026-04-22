"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixed(window.scrollY > 200); // ini udah cukup
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR NORMAL (ATAS) */}
      <header className="w-full bg-white">
        <div className="flex items-center justify-between px-6 md:px-10 h-20">
          <Image
            src="/logo-green-jokindes.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-13 object-contain"
          />

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Document</a>
            <a href="#">About</a>
          </nav>

          <button className="hidden md:block rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold">
            Contact us
          </button>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* NAVBAR FIXED (MUNCUL SAAT SCROLL) */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transform transition-all duration-500  ${
          showFixed
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } bg-white/90 backdrop-blur shadow-md`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-20">
          <Image
            src="/logo-green-jokindes.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-13 object-contain"
          />

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#">Home</a>

            {/* Dropdown tetap bisa dipakai */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("service")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1">
                Service <ChevronDown size={16} />
              </button>

              {dropdown === "service" && (
                <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                  <a
                    href="#"
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Umrah
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Haji
                  </a>
                </div>
              )}
            </div>

            <a href="#">About</a>
          </nav>

          <button className="hidden md:block rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold">
            Contact us
          </button>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
