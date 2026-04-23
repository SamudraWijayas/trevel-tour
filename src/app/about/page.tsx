"use client";

import LandingPageLayout from "@/component/LandingPageLayout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <LandingPageLayout>
      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
          <Image
            src="/images/DSC_1197.JPG.jpeg"
            alt="About Ndestours"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <motion.div
            className="relative z-10 text-white max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-green-400">Ndestours</span>
            </h1>
            <p className="text-md md:text-base text-gray-200">
              Mewujudkan perjalanan dan event terbaik dengan pengalaman
              profesional dan pelayanan terpercaya.
            </p>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section className="px-6 md:px-10 py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            {/* IMAGE */}
            <motion.div
              className="relative h-[400px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/baner.png"
                alt="Ndestours Activity"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Siapa <span className="text-green-700">Kami?</span>
              </h2>

              <p className="text-gray-600 text-md leading-relaxed">
                Ndestours adalah penyedia layanan tour & event organizer yang
                berfokus pada pengalaman berkualitas tinggi. Kami membantu
                individu, perusahaan, hingga instansi dalam merencanakan
                perjalanan dan event dengan detail yang matang.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                Dengan tim profesional dan pengalaman bertahun-tahun, kami
                memastikan setiap perjalanan dan acara berjalan lancar, nyaman,
                dan berkesan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* VISION MISSION */}
        <section className="px-6 md:px-10 py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
            {/* VISION */}
            <motion.div
              className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-green-600/80" />

              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                Visi Kami
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                Menjadi perusahaan tour & event organizer terpercaya di
                Indonesia yang menghadirkan pengalaman perjalanan yang tidak
                hanya nyaman, tetapi juga berkesan dan bernilai bagi setiap
                klien.
              </p>
            </motion.div>

            {/* MISSION */}
            <motion.div
              className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-green-600/80" />

              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                Misi Kami
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Memberikan layanan profesional, aman, dan terpercaya",
                  "Menghadirkan pengalaman perjalanan yang berkesan",
                  "Mengelola event dengan standar kualitas tinggi",
                  "Membangun hubungan jangka panjang dengan klien",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="text-green-600 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 md:px-10 py-20">
          <div className="max-w-5xl mx-auto flex justify-around text-center">
            <div>
              <p className="text-4xl font-bold text-green-700">150+</p>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-green-700">10+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-green-700">200+</p>
              <p className="text-sm text-gray-500">Events Completed</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-10 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Siap Memulai Perjalanan Anda?
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Hubungi kami sekarang dan wujudkan perjalanan atau event impian
              Anda bersama Ndestours.
            </p>

            <button className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition">
              Contact Us
            </button>
          </motion.div>
        </section>
      </main>
    </LandingPageLayout>
  );
}
