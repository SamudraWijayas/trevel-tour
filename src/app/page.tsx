"use client";

import {
  CheckCircle,
  LucideIcon,
  Users,
  Handshake,
  Plane,
  Building,
  Globe,
  FileText,
  Bus,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import LandingPageLayout from "@/component/LandingPageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const services = [
  { title: "M.I.C.E", icon: Users },
  { title: "Corporate Gathering", icon: Handshake },
  { title: "Team Building", icon: Users },
  { title: "Tour & Travel", icon: Globe },
  { title: "Hotel Booking", icon: Building },
  { title: "Flight Ticket", icon: Plane },
  { title: "Transport Service", icon: Bus },
  { title: "Visa & Passport", icon: FileText },
];

const banner = [
  {
    image: "/images/pexels-gaborbalazs97-27864528.jpg",
  },
  {
    image: "/images/pexels-ramiardilshad-26436656.jpg",
  },
  {
    image: "/images/DSC_1197.JPG.jpeg",
  },
];

export default function Home() {
  return (
    <LandingPageLayout>
      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="relative w-full">
          {/* Content */}
          <div className="relative z-10 mx-auto flex h-full w-full items-center">
            {/* BANNER CARD */}
            <div className="relative w-full overflow-hidden ">
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <Swiper
                  pagination={{ clickable: true }}
                  loop
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  className="h-full w-full"
                >
                  {banner.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image}
                          alt={`Banner ${index + 1}`}
                          fill
                          priority
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/images/baner.png"
                alt="Guide"
                width={640}
                height={840}
                className="w-full h-105 object-cover rounded-2xl"
              />
            </motion.div>

            {/* RIGHT CONTENT */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-5xl font-bold leading-tight mb-4"
              >
                Discover Your Next Adventure with {""}
                <span className="text-green-800">Ndestours</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-gray-600 mb-6 max-w-md"
              >
                Ndestours merupakan Event Organizer (EO) profesional di
                Indonesia dengan pengalaman lebih dari satu dekade dalam
                merancang dan menyelenggarakan berbagai acara. Kami telah
                dipercaya menangani event untuk perusahaan nasional,
                multinasional, instansi pemerintah, hingga BUMN — mulai dari
                corporate gathering, kegiatan team building, sampai acara gala
                dinner yang berkesan.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-8 rounded-xl bg-green-800 px-6 py-3 font-semibold text-white hover:bg-lime-500 transition"
              >
                Free Event Consultation
              </motion.button>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="px-6 md:px-10 py-16 bg-gray-50">
          {/* Title */}
          <motion.h3
            className="text-center text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Feature <span className="text-green-800">Experience</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0 * 0.1, duration: 0.45, ease: "easeOut" }}
            >
              <Packages
                title="3D2N Maldives Paradise"
                price="Rp. 20.000.000"
                image="/images/maldives.jpg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1 * 0.1, duration: 0.45, ease: "easeOut" }}
            >
              <Packages
                title="3D2N Bali"
                price="Rp. 3.000.000"
                image="/images/bali.jpg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 2 * 0.1, duration: 0.45, ease: "easeOut" }}
            >
              <Packages
                title="3D2N Yogyakarta"
                price="Rp. 3.000.000"
                image="/images/yogya.jpg"
              />
            </motion.div>
          </div>
          <div className="mt-14 flex justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-green-800 px-4 py-2 text-md font-semibold text-white shadow-md hover:bg-green-900 transition"
            >
              More Experience
            </motion.button>
          </div>
        </section>

        <section className="px-6 md:px-10 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* TITLE */}
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-green-800">Ndestours</span>
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-md">
                <span className="font-semibold text-gray-900">Ndestours</span>{" "}
                adalah penyedia jasa tour & event organizer terpercaya di
                Indonesia. Kami menghadirkan pengalaman perjalanan dan event
                yang terencana dengan baik, profesional, dan berkesan.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="relative overflow-hidden rounded-3xl mb-10 h-[300px] md:h-[420px]"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/images/DSC_1197.JPG.jpeg"
                alt="Ndestours Activity"
                fill
                // quality={100}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            {/* CONTENT */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* TEXT */}
              <motion.div
                className="text-gray-600 text-md leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p>
                  Dari tahap perencanaan hingga pelaksanaan, kami berkomitmen
                  untuk mengelola setiap detail dengan maksimal. Ndestours telah
                  dipercaya dalam menangani berbagai kebutuhan event, mulai dari
                  corporate gathering, outing perusahaan, team building, hingga
                  perjalanan wisata keluarga.
                </p>

                <p className="mt-4">
                  Dengan tim profesional dan pengalaman yang matang, kami
                  memastikan setiap acara berjalan lancar, terorganisir, dan
                  memberikan pengalaman terbaik bagi setiap klien.
                </p>
              </motion.div>

              {/* STATS */}
              <motion.div
                className="flex gap-10 md:justify-end"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <div>
                  <p className="text-4xl font-bold text-green-800">150+</p>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-green-800">10+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            {/* TITLE */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-green-700">Service</span>
            </motion.h2>

            <p className="text-gray-500 max-w-xl mx-auto mb-16 text-sm">
              Kami menyediakan berbagai layanan terbaik untuk kebutuhan
              perjalanan dan event Anda secara profesional.
            </p>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-6">
              {services.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* STEP NUMBER */}
                    <div className="hidden md:flex absolute -top-10 left-1/2 -translate-x-1/2">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-700 text-white text-sm font-semibold shadow">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* CARD */}
                    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300">
                      {/* ICON */}
                      <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-700 transition">
                          <Icon className="h-7 w-7 text-green-700 group-hover:text-white transition" />
                        </div>
                      </div>

                      {/* TITLE */}
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h4>

                      {/* DESC (biar lebih hidup) */}
                      <p className="text-xs text-gray-500 mb-4">
                        Layanan profesional & terpercaya untuk kebutuhan Anda.
                      </p>

                      {/* BUTTON */}
                      <button className="text-xs font-medium bg-green-800 text-white py-1 px-2 rounded-lg hover:underline">
                        Contact
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 md:px-10 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
              {/* LEFT */}
              <div>
                <p className="text-sm text-green-700 font-semibold mb-2 tracking-wide uppercase">
                  Gallery
                </p>

                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Explore Our <br />
                  <span className="text-green-700">Journey Moments</span>
                </h3>
              </div>

              {/* RIGHT */}
              <p className="text-gray-500 max-w-md text-sm leading-relaxed">
                Dokumentasi perjalanan terbaik bersama Ndestours. Setiap momen
                kami hadirkan dengan pengalaman yang berkesan, nyaman, dan penuh
                makna.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-4 grid-rows-3 gap-4">
              {/* Top Left */}
              <GalleryItem src="/images/g1.jpeg" />

              {/* Top Middle */}
              <GalleryItem src="/images/g2.jpeg" />

              {/* Top Right */}
              <GalleryItem src="/images/bali.jpg" />

              {/* Right Tall */}
              <GalleryItem src="/images/yogya.jpg" className="row-span-2" />

              {/* LEFT Tall */}
              <GalleryItem src="/images/g5.jpeg" className="row-span-2" />

              {/* CENTER BIG */}
              <GalleryItem
                src="/images/maldives.jpg"
                className="col-span-2 row-span-2"
              />

              {/* Bottom Left */}
              <GalleryItem src="/images/DSC_1197.JPG.jpeg" />

              {/* Bottom Right */}
              {/* <GalleryItem src="/images/g8.jpeg" /> */}
            </div>
          </div>
        </section>

        {/* Footer */}
      </main>
    </LandingPageLayout>
  );
}

function Feature({ title, icon: Icon }: { title: string; icon: LucideIcon }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-100">
        <Icon className="h-5 w-5 text-lime-500" />
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}

function GalleryItem({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl
      min-h-20 sm:min-h-20 md:min-h-50
      ${className}`}
    >
      <Image
        src={src}
        alt="Gallery"
        fill
        className="object-cover transition duration-300 hover:scale-105"
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               25vw"
      />
    </div>
  );
}

function Packages({
  title,
  price,
  image,
}: {
  title: string;
  price: string;
  image: string;
}) {
  return (
    <div className="rounded-2xl bg-white shadow-md overflow-hidden transition hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>

        {/* PRICE + INCLUDE */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div>
            <p className="text-gray-400 text-xs">Start From</p>
            <p className="text-green-800 font-bold text-lg">
              {price}
              <span className="text-gray-400 text-sm font-normal">/pax</span>
            </p>
          </div>

          <div className="text-gray-500 text-xs">
            <p className="mb-1">Include :</p>
            <div className="flex gap-2">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                Flight
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                Hotel
              </span>
            </div>
          </div>
        </div>

        {/* LINK */}
        {/* <button className="text-gray-500 text-sm font-semibold hover:underline">
          More Info &gt;
        </button> */}
      </div>
    </div>
  );
}

const logos = [
  { src: "/images/logo/garuda.png", alt: "Free Fire" },
  { src: "/images/logo/lion.png", alt: "PUBG Mobile" },
  { src: "/images/logo/saudi.png", alt: "Call of Duty" },
  // { src: "/images/logo/oman.png", alt: "Arena of Valor" },
  // { src: "/images/logo/batik.png", alt: "Mobile Legends" },
];
