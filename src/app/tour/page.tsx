"use client";

import LandingPageLayout from "@/component/LandingPageLayout";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

const tours = [
  {
    title: "3D2N Bali Experience",
    price: "Rp 3.500.000",
    image: "/images/bali.jpg",
    location: "Bali, Indonesia",
  },
  {
    title: "3D2N Yogyakarta Heritage",
    price: "Rp 3.200.000",
    image: "/images/yogya.jpg",
    location: "Yogyakarta, Indonesia",
  },
  {
    title: "4D3N Labuan Bajo Trip",
    price: "Rp 6.500.000",
    image: "/images/labuan-bajo.jpg",
    location: "NTT, Indonesia",
  },
  {
    title: "5D4N Singapore - Malaysia",
    price: "Rp 7.500.000",
    image: "/images/singapura.jpg",
    location: "Singapore & Malaysia",
  },
];

export default function TourPage() {
  return (
    <LandingPageLayout>
      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
          <Image
            src="/images/g5.jpeg"
            alt="Tour"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <motion.div
            className="relative z-10 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our <span className="text-green-400">Tours</span>
            </h1>
            <p className="text-sm text-gray-200">
              Pilih paket perjalanan terbaik untuk pengalaman tak terlupakan
            </p>
          </motion.div>
        </section>

        {/* FILTER */}
        <section className="px-6 md:px-10 py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Cari destinasi..."
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none"
            />

            <select className="px-4 py-3 rounded-full border border-gray-200 text-sm">
              <option>Semua Lokasi</option>
              <option>Indonesia</option>
              <option>International</option>
            </select>

            <button className="bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-800 transition">
              Search
            </button>
          </div>
        </section>

        {/* TOUR LIST */}
        <section className="px-6 md:px-10 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.title}
                className="group rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* IMAGE */}
                <div className="relative h-60">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-60 group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{tour.location}</span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>

                  <p className="text-green-700 font-bold mb-4">
                    {tour.price}
                    <span className="text-xs text-gray-500 font-normal">
                      {" "}
                      / pax
                    </span>
                  </p>

                  <button className="w-full rounded-full bg-green-700 text-white py-2 text-sm font-semibold hover:bg-green-800 transition">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-10 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Tidak menemukan paket yang cocok?
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Kami bisa bantu custom trip sesuai kebutuhan Anda
            </p>

            <button className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition">
              Request Custom Trip
            </button>
          </motion.div>
        </section>
      </main>
    </LandingPageLayout>
  );
}
