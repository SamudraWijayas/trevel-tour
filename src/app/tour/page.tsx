"use client";

import LandingPageLayout from "@/component/LandingPageLayout";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

const tours = [
  {
    title: "Maldives Paradise",
    duration: "3 Hari 2 Malam",
    price: "Rp. 20.000.000",
    image: "/images/maldives.jpg",
    description:
      "Nikmati keindahan laut biru jernih dan vila eksklusif di atas air dengan pengalaman liburan mewah.",
  },
  {
    title: "Bali Escape",
    duration: "3 Hari 2 Malam",
    price: "Rp. 3.000.000",
    image: "/images/bali.jpg",
    description:
      "Jelajahi pantai eksotis, budaya unik, dan suasana tropis khas Pulau Dewata.",
  },
  {
    title: "Yogyakarta Heritage",
    duration: "3 Hari 2 Malam",
    price: "Rp. 3.000.000",
    image: "/images/yogya.jpg",
    description:
      "Nikmati wisata budaya ke Candi Borobudur, Malioboro, dan kuliner khas Jogja.",
  },
  {
    title: "Labuan Bajo Adventure",
    duration: "3 Hari 2 Malam",
    price: "Rp. 5.500.000",
    image: "/images/labuan-bajo.jpg",
    description:
      "Eksplorasi Pulau Komodo, snorkeling di laut jernih, dan panorama pulau eksotis.",
  },
  {
    title: "Bromo Sunrise Trip",
    duration: "3 Hari 2 Malam",
    price: "Rp. 2.500.000",
    image: "/images/bromo.jpg",
    description:
      "Saksikan matahari terbit spektakuler di puncak Gunung Bromo dengan panorama luar biasa.",
  },
  {
    title: "Lombok Island Tour",
    duration: "4 Hari 3 Malam",
    price: "Rp. 4.500.000",
    image: "/images/lombok.jpg",
    description:
      "Jelajahi keindahan pantai Lombok dan Gili dengan suasana tenang dan alami.",
  },
];

function Packages({
  title,
  price,
  image,
  duration,
  description,
}: {
  title: string;
  price: string;
  image: string;
  duration: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl bg-white shadow-md overflow-hidden transition hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
          {duration}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h4 className="font-semibold text-gray-800 text-lg leading-snug">
          {title}
        </h4>

        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        <p className="text-green-800 font-bold text-xl">
          {price}
          <span className="text-gray-400 text-sm font-normal"> / pax</span>
        </p>

        <div className="flex gap-2 pt-2">
          <button className="flex-1 py-2 rounded-xl border border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
            Detail
          </button>

          <button className="flex-1 py-2 rounded-xl bg-green-700 text-white text-sm font-semibold hover:bg-green-800 transition">
            Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TourPage() {
  return (
    <LandingPageLayout>
      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
          <Image
            src="/images/tour.jpg"
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
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Packages {...tour} />
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
