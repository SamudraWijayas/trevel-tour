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
  Wallet,
  Phone,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mail,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import LandingPageLayout from "@/component/LandingPageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

const packagesData = [
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
    image: "/images/bali2.jpg",
    title: "Jelajah Surga Tropis Indonesia",
    description:
      "Temukan keindahan alam budaya, dan petualangan tak terlupakan bersama kamu",
    location: "Bali, Indonesia",
  },
  {
    image: "/images/maldiv.jpg",
    title: "Liburan Impian di Maldives",
    description:
      "Rasakan ketenangan pantai pasir putih dan air laut sebening kristal di destinasi tropis terbaik dunia",
    location: "Maldives",
  },
  {
    image: "/images/bromo.jpg",
    title: "Petualangan Menanti Anda",
    description:
      "Rasakan pengalaman wisata terbaik dengan pemandu profesional dan harga terjangkau",
    location: "Gunung Bromo, Jawa Timur",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <LandingPageLayout>
      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="relative w-full">
          {/* Content */}
          <div className="relative z-10 mx-auto flex h-full w-full items-center">
            {/* BANNER CARD */}
            <div className="relative w-full overflow-hidden ">
              <div className="relative h-[60vh] md:h-screen w-full">
                <Swiper
                  pagination={{ clickable: true }}
                  loop
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  className="h-full w-full"
                >
                  {banner.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full">
                        {/* IMAGE */}
                        <Image
                          src={item.image}
                          alt={`Banner ${index + 1}`}
                          width={1920}
                          height={1080}
                          priority={index === 0}
                          className="w-full h-full object-cover"
                        />

                        {/* GRADIENT */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 to-black/30" />

                        {/* TEXT */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center"
                          >
                            <div className="px-6 md:px-16 max-w-2xl text-white space-y-3">
                              {/* LOCATION */}
                              <div className="inline-block">
                                <span className="text-xs md:text-sm font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white">
                                  {banner[activeIndex].location}
                                </span>
                              </div>

                              {/* TITLE */}
                              <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                                {banner[activeIndex].title}
                              </h1>

                              {/* DESCRIPTION */}
                              <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-md">
                                {banner[activeIndex].description}
                              </p>

                              {/* CTA */}
                              <div className="pt-4 flex flex-wrap gap-3">
                                <button className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl font-semibold shadow-lg transition">
                                  Lihat Paket
                                </button>

                                <button className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold backdrop-blur-md hover:bg-white/10 transition">
                                  Booking Sekarang
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="px-3 md:px-10 py-12 md:py-16">
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
                priority
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
                className="lg:text-5xl text-3xl font-bold leading-tight mb-4"
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
        <section className="px-3 md:px-10 py-16 bg-gray-50">
          {/* Title */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <motion.h3
              className="text-3xl lg:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Paket Wisata <span className="text-green-800">Rekomendasi</span>
            </motion.h3>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Pilihan paket wisata terbaik dengan harga terjangkau dan pelayanan
              profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packagesData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
              >
                <Packages
                  title={item.title}
                  duration={item.duration}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                />
              </motion.div>
            ))}
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

        <section className="px-3 md:px-10 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* BADGE */}
              <motion.div
                className="flex items-center justify-center mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/60 border border-green-200">
                  <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-green-800">
                    KEUNGGULAN KAMI
                  </span>
                </div>
              </motion.div>

              {/* TITLE */}
              <motion.h2
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Kenapa Pilih Kami?
              </motion.h2>

              {/* DESC */}
              <motion.p
                className="text-gray-500 mt-3 max-w-xl mx-auto text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Kami memberikan pelayanan terbaik untuk memastikan perjalanan
                Anda nyaman, aman, dan berkesan.
              </motion.p>
            </motion.div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Harga Transparan",
                  desc: "Tanpa biaya tersembunyi, semua harga jelas dan kompetitif.",
                  icon: Wallet,
                },
                {
                  title: "Tim Profesional",
                  desc: "Didukung oleh tim berpengalaman di bidang tour & travel.",
                  icon: Users,
                },
                {
                  title: "Layanan Lengkap",
                  desc: "Mulai dari tiket, hotel, hingga visa & transport tersedia.",
                  icon: Globe,
                },
                {
                  title: "Support 24/7",
                  desc: "Kami siap membantu Anda kapan saja selama perjalanan.",
                  icon: Phone,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* ICON */}
                    <div className="flex justify-center mb-4">
                      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-green-100">
                        <Icon className="h-6 w-6 text-green-700" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h4 className="font-semibold text-gray-800 mb-2">
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
          </div>
        </section>

        <section className="px-3 md:px-10 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* HEADER */}
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* BADGE */}
              <motion.div
                className="flex items-center justify-center mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/60 border border-green-200">
                  <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-green-800">
                    JELAJAH INDONESIA
                  </span>
                </div>
              </motion.div>

              {/* TITLE */}
              <motion.h2
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Destinasi Populer
              </motion.h2>

              {/* DESC */}
              <motion.p
                className="text-gray-500 mt-3 max-w-xl mx-auto text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Pilihan destinasi terbaik yang paling diminati oleh traveler
                kami.
              </motion.p>
            </motion.div>

            {/* GRID MODERN */}
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4">
              <DestinationItem
                title="Bali"
                src="/images/bali.jpg"
                className="col-span-2 row-span-2"
              />

              <DestinationItem title="Maldives" src="/images/maldives.jpg" />

              <DestinationItem title="Bromo" src="/images/bromo.jpg" />

              <DestinationItem
                title="Labuan Bajo"
                src="/images/labuan-bajo.jpg"
                className="row-span-2"
              />

              <DestinationItem title="Yogyakarta" src="/images/yogya.jpg" />

              <DestinationItem title="Lombok" src="/images/lombok.jpg" />
            </div>
          </div>
        </section>

        <section className="px-3 md:px-10 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* BADGE */}
              <motion.div
                className="flex items-center justify-center mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/60 border border-green-200">
                  <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-green-800">
                    TESTIMONIAL
                  </span>
                </div>
              </motion.div>

              {/* TITLE */}
              <motion.h2
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Apa Kata <span className="text-green-800">Mereka?</span>
              </motion.h2>

              {/* DESC */}
              <motion.p
                className="text-gray-500 mt-3 max-w-xl mx-auto text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Pengalaman nyata dari pelanggan yang telah menggunakan layanan
                kami.
              </motion.p>
            </motion.div>

            {/* SLIDER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* CARD TESTIMONIAL */}
              <div className="p-6 rounded-2xl shadow-sm border border-gray-200 max-w-2xl mx-auto">
                <div className="testimonial-wrapper">
                  <Swiper
                    className="testimonial-swiper"
                    slidesPerView={1}
                    loop
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      el: ".custom-pagination",
                      clickable: true,
                    }}
                    navigation={{
                      nextEl: ".custom-next",
                      prevEl: ".custom-prev",
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                  >
                    {testimonials.map((item, index) => (
                      <SwiperSlide key={index}>
                        <TestimonialCard {...item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* GARIS */}
                  <div className="w-full h-px bg-gray-200 my-6" />

                  {/* BAWAH */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="custom-pagination flex gap-1"></div>

                    <div className="flex gap-2">
                      <button className="custom-prev p-2 border border-gray-200 rounded-full">
                        <ChevronLeft size={16} />
                      </button>

                      <button className="custom-next p-2 bg-green-700 text-white rounded-full">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="mt-8 max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200">
                {[
                  { value: "4.9/5", label: "Customer Rating" },
                  { value: "500+", label: "Happy Reviews" },
                  { value: "150+", label: "Happy Clients" },
                  { value: "50+", label: "Destinations" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="py-6 flex flex-col items-center justify-center hover:bg-gray-50 transition"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="text-2xl font-bold text-green-800">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-3 md:px-10 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            {/* TITLE */}
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* BADGE */}
              <motion.div
                className="flex items-center justify-center mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/60 border border-green-200">
                  <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-green-800">
                    OUR SERVICE
                  </span>
                </div>
              </motion.div>

              {/* TITLE */}
              <motion.h2
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Layanan <span className="text-green-800">Kami</span>
              </motion.h2>

              {/* DESC */}
              <motion.p
                className="text-gray-500 mt-3 max-w-xl mx-auto text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Kami menyediakan berbagai layanan terbaik untuk kebutuhan
                perjalanan dan event Anda secara profesional.
              </motion.p>
            </motion.div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-6">
              {services.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="relative h-full"
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
                    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 h-full flex flex-col">
                      {/* ICON */}
                      <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-700 transition">
                          <Icon className="h-7 w-7 text-green-700 group-hover:text-white transition" />
                        </div>
                      </div>

                      {/* TITLE */}
                      <h4 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                        {item.title}
                      </h4>

                      {/* DESC */}
                      <p className="text-xs text-gray-500 mb-4 text-center">
                        Layanan profesional & terpercaya untuk kebutuhan Anda.
                      </p>

                      {/* BUTTON (dorong ke bawah) */}
                      <div className="mt-auto flex justify-center">
                        <button className="text-xs font-medium bg-green-800 text-white py-1 px-3 rounded-lg hover:underline">
                          Contact
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-3 md:px-10 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* BADGE */}
              <motion.div
                className="flex items-center justify-center mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/60 border border-green-200">
                  <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-green-800">
                    GALLERY
                  </span>
                </div>
              </motion.div>

              {/* TITLE */}
              <motion.h3
                className="text-3xl md:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Jelajahi{" "}
                <span className="text-green-700">
                  Momen-Momen Perjalanan Kami
                </span>
              </motion.h3>

              {/* DESC */}
              <motion.p
                className="text-gray-500 mt-3 max-w-xl mx-auto text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Dokumentasi perjalanan terbaik bersama Ndestours. Setiap momen
                kami hadirkan dengan pengalaman yang berkesan, nyaman, dan penuh
                makna.
              </motion.p>
            </motion.div>

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

        <section className="px-3 md:px-10 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* CONTENT */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* LEFT - INFO */}
              <motion.div
                className="space-y-8 "
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* HEADER */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/60 border border-green-200">
                      <span className="w-2.5 h-2.5 bg-green-700 rounded-full animate-pulse"></span>
                      <span className="text-xs font-medium text-green-800">
                        HUBUNGI KAMI
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold">
                    Siap Untuk <span className="text-green-800">Liburan?</span>
                  </h2>

                  <p className="text-gray-500 mt-3 max-w-lg  text-sm">
                    Kirim pesan kepada kami melalu WhatsApp dan tim kami akan
                    membantu merencanakan liburan impian anda
                  </p>
                </div>

                {/* INFO */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <Phone className="text-green-700" />
                    </div>
                    <div>
                      <p className="font-semibold">Telepon</p>
                      <p className="text-sm text-gray-500">+62 812-3456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <MapPin className="text-green-700" />
                    </div>
                    <div>
                      <p className="font-semibold">Alamat</p>
                      <p className="text-sm text-gray-500">
                        Lampung, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <Mail className="text-green-700" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-500">
                        ndestours@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT - FORM */}
              <motion.form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();

                  const formData = new FormData(e.currentTarget);

                  const name = formData.get("name") as string;
                  const phone = formData.get("phone") as string;
                  const destination = formData.get("destination") as string;
                  const message = formData.get("message") as string;

                  const text = `Halo Ndestours 👋

Nama: ${name}
No WA: ${phone}
Destinasi: ${destination}

Pesan:
${message}`;

                  const url = `https://wa.me/6287718517731?text=${encodeURIComponent(text)}`;

                  window.open(url, "_blank");
                }}
                className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl space-y-5 shadow-sm"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* HEADER */}
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-gray-800">
                    Kirim Pesan via WhatsApp
                  </h3>
                  <p className="text-sm text-gray-500">
                    Isi form berikut dan kami akan segera menghubungi Anda.
                  </p>
                </div>

                {/* NAMA */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Masukkan nama lengkap"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
                  />
                </div>

                {/* NOMOR WA */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Contoh: 08123456789"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
                  />
                </div>

                {/* DESTINASI */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Destinasi Tujuan
                  </label>
                  <input
                    type="text"
                    name="destination"
                    required
                    placeholder="Contoh: Bali, Labuan Bajo"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
                  />
                </div>

                {/* PESAN */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tulis kebutuhan atau pertanyaan Anda..."
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"
                >
                  <Send className="w-4 h-4" />
                  Kirim via WhatsApp
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
    </LandingPageLayout>
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
          sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
          {duration}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        {/* TITLE */}
        <h4 className="font-semibold text-gray-800 text-lg leading-snug">
          {title}
        </h4>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        {/* PRICE */}
        <div>
          <p className="text-green-800 font-bold text-xl">
            {price}
            <span className="text-gray-400 text-sm font-normal"> / orang</span>
          </p>
        </div>

        {/* CTA */}
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

function DestinationItem({
  src,
  title,
  className = "",
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl 
      min-h-[160px] md:min-h-[220px] ${className}`}
    >
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw,
               (max-width: 1024px) 50vw,
               25vw"
        className="object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

      {/* TEXT */}
      <div className="absolute bottom-4 left-4 text-white z-10">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-xs text-gray-200">Explore destination</p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Andi Pratama",
    job: "Entrepreneur",
    comment:
      "Pelayanan dari awal sampai akhir benar-benar profesional. Mulai dari konsultasi, pemilihan paket, sampai eksekusi di lapangan semuanya terasa sangat terorganisir. Trip ke Bali kemarin jadi salah satu pengalaman terbaik saya, hotelnya nyaman, itinerary-nya pas, dan guide-nya sangat membantu. Pasti akan pakai Ndestours lagi untuk trip berikutnya.",
    image: "/images/icon-512-maskable.png",
  },
  {
    name: "Siti Rahma",
    job: "HR Manager",
    comment:
      "Kami menggunakan jasa Ndestours untuk acara team building kantor, dan hasilnya luar biasa. Semua aktivitas disusun dengan baik, fun tapi tetap punya value untuk teamwork. Tim EO sangat responsif dan fleksibel terhadap kebutuhan kami. Banyak karyawan yang bilang ini event terbaik yang pernah mereka ikuti.",
    image: "/images/icon-512-maskable.png",
  },
  {
    name: "Budi Santoso",
    job: "Traveler",
    comment:
      "Saya sudah beberapa kali ikut open trip, tapi pengalaman dengan Ndestours ke Labuan Bajo ini beda. Harga yang ditawarkan transparan tanpa biaya tersembunyi, fasilitas sesuai ekspektasi bahkan lebih. Kapalnya nyaman, makanannya enak, dan spot wisatanya benar-benar dipilih yang terbaik.",
    image: "/images/icon-512-maskable.png",
  },
  {
    name: "Dewi Lestari",
    job: "Content Creator",
    comment:
      "Sebagai content creator, saya cukup picky soal destinasi dan pengalaman travel. Tapi Ndestours berhasil kasih pengalaman yang bukan cuma seru, tapi juga instagramable banget. Semua spot yang dikunjungi punya visual yang bagus, timing-nya juga pas buat ambil konten. Sangat recommended buat yang cari travel experience sekaligus bikin konten.",
    image: "/images/icon-512-maskable.png",
  },
];
function TestimonialCard({
  name,
  job,
  comment,
  image,
}: {
  name: string;
  job: string;
  comment: string;
  image: string;
}) {
  return (
    <div className="text-left">
      <div className="flex  mb-3 text-yellow-400">⭐⭐⭐⭐⭐</div>
      {/* COMMENT */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">“{comment}”</p>

      {/* USER */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            sizes="48px"
            className="object-cover rounded-full"
          />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
          <p className="text-xs text-gray-400">{job}</p>
        </div>
      </div>
    </div>
  );
}
