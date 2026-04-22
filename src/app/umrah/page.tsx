"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Compass, Building2, UserCheck } from "lucide-react";
import LandingPageLayout from "@/component/LandingPageLayout";

const packages = [
  {
    title: "Umrah Reguler 9 Hari",
    price: "Rp 27.000.000",
    image: "/images/umrah1.jpeg",
    duration: "9 Hari",
  },
  {
    title: "Umrah Bintang 5 Tanpa Transit",
    price: "Rp 29.000.000",
    image: "/images/umrah2.png",
    duration: "9 Hari",
  },
  {
    title: "Umrah Extra",
    price: "Rp 32.000.000",
    image: "/images/umrah3.jpeg",
    duration: "15 Hari",
  },
];

const features = [
  {
    title: "Berpengalaman",
    desc: "Lebih dari 10 tahun melayani jamaah Umrah dengan profesional.",
    icon: Compass,
  },
  {
    title: "Fasilitas Terbaik",
    desc: "Hotel nyaman, transportasi aman, dan layanan premium.",
    icon: Building2,
  },
  {
    title: "Pembimbing Profesional",
    desc: "Dibimbing oleh ustadz berpengalaman selama perjalanan.",
    icon: UserCheck,
  },
];

export default function UmrahPage() {
  return (
    <LandingPageLayout>
      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
          <Image
            src="/images/kakbah.jpeg"
            alt="Umrah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />

          <motion.div
            className="relative z-10 text-white max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Paket <span className="text-green-400">Umrah</span>
            </h1>
            <p className="text-sm md:text-base text-gray-200">
              Wujudkan perjalanan ibadah Anda dengan nyaman, aman, dan penuh
              keberkahan bersama Ndestours.
            </p>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="px-6 md:px-10 py-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Perjalanan Ibadah yang Nyaman & Terpercaya
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Kami menyediakan berbagai pilihan paket Umrah dengan fasilitas
            terbaik, pembimbing berpengalaman, dan pelayanan profesional untuk
            memastikan ibadah Anda berjalan dengan khusyuk dan lancar.
          </p>
        </section>

        {/* PACKAGES */}
        <section className="px-6 md:px-10 py-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {packages.map((item, index) => (
              <motion.div
                key={item.title}
                className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* IMAGE */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>{item.duration}</span>
                  </div>

                  <p className="text-green-700 font-bold text-xl mb-4">
                    {item.price}
                    <span className="text-xs text-gray-500 font-normal">
                      {" "}
                      / pax
                    </span>
                  </p>

                  <button className="w-full rounded-full bg-green-700 text-white py-2.5 text-sm font-semibold hover:bg-green-800 transition">
                    Lihat Detail
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="px-6 md:px-10 py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Kenapa Pilih <span className="text-green-700">Ndestours?</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Kami memberikan layanan terbaik untuk memastikan perjalanan ibadah
              Anda nyaman, aman, dan penuh keberkahan.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-700 transition">
                    <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition" />
                  </div>

                  {/* TITLE */}
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">
                    {item.title}
                  </h4>

                  {/* DESC */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Berangkat Umrah?
            </h3>

            <p className="text-gray-500 text-sm md:text-base mb-6">
              Hubungi kami sekarang untuk konsultasi dan pemesanan paket Umrah
              terbaik.
            </p>

            <button className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition">
              Hubungi Kami
            </button>
          </motion.div>
        </section>
      </main>
    </LandingPageLayout>
  );
}
