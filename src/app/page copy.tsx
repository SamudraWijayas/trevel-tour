"use client";

import {
  Clock,
  Compass,
  LucideIcon,
  Mail,
  MapPin,
  Package,
  Phone,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import LandingPageLayout from "@/component/LandingPageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const banner = [
  {
    image: "/images/g5.jpeg",
  },
  {
    image: "/images/g5.jpeg",
  },
  {
    image: "/images/g5.jpeg",
  },
  {
    image: "/images/g5.jpeg",
  },
];

export default function Home() {
  return (
    <LandingPageLayout>
      <main className="bg-white text-gray-900">

        {/* Hero */}
        <section className="relative w-full ">

          {/* Content */}
          <div className="relative z-10 mx-auto flex h-full w-full items-center">
            {/* BANNER CARD */}
            <div className="relative w-full overflow-hidden shadow-2xl">
              <div className="relative h-[60vh] md:h-148 w-full">
                <Swiper
                pagination={{
                  // dynamicBullets: true,
                  clickable: true,
                }}
                spaceBetween={30}
                loop
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="md:h-122 h-60"
              >
                {banner.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <Image
                        src={item.image}
                        alt={`Banner ${index + 1}`}
                        fill
                        priority
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center px-8 md:px-16">
                  <motion.div
                    className="max-w-2xl text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.h2
                      className="text-3xl md:text-5xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      Let Our Expertise{" "}
                      <span className="text-lime-400">Guide</span>
                      <br />
                      Your Spiritual Hajj & Umrah Journey
                    </motion.h2>

                    <motion.p
                      className="mt-4 text-sm text-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      Embark on a Spiritual Journey. Your Trusted Hajj Partner.
                      Comprehensive Hajj Packages Tailored to Your Needs.
                    </motion.p>

                    <motion.button
                      className="mt-6 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      Explore Packages
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-3 items-center gap-6 md:grid-cols-3">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.alt}
                className="flex justify-center opacity-80 transition hover:opacity-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
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
              <div className="h-105 w-[320px] overflow-hidden">
                <Image
                  src="/images/uwong.jpeg"
                  alt="Guide"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-4xl font-bold leading-tight mb-4"
              >
                Why Choose Our <br /> Hajj Services?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-gray-600 mb-6 max-w-md"
              >
                Embark on a Spiritual Journey Your Trusted Hajj Partner.
                Comprehensive Hajj Packages Tailored to Your Needs. Premium
                accommodation, individual transportation
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-8 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black hover:bg-lime-500 transition"
              >
                Explore more
              </motion.button>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Compass, title: "Experienced Guidance" },
                  { icon: Package, title: "Comprehensive Packages" },
                  { icon: Clock, title: "24/7 Support" },
                  { icon: Wallet, title: "Affordable Options" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <Feature icon={item.icon} title={item.title} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            {/* Title */}
            <motion.div
              className="mb-14 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
                Embark on a Spiritual Journey. Your Trusted Hajj Partner,
                Comprehensive Hajj Packages Tailored to Your Needs.
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Book Online */}
              <motion.div
                className="relative rounded-2xl bg-gray-50 p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0 * 0.1, duration: 0.45, ease: "easeOut" }}
              >
                <h3 className="mb-2 font-semibold text-gray-900">
                  Book Online
                </h3>
                <p className="text-sm text-gray-600">
                  Easy and secure booking process. Embark on a Spiritual
                  Journey. Your Trusted Hajj Partner
                </p>
                <span className="absolute bottom-4 right-4 h-6 w-6 rotate-45 rounded-sm bg-lime-400" />
              </motion.div>

              {/* Image */}
              <motion.div
                className="overflow-hidden h-70 rounded-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 1 * 0.1, duration: 0.45, ease: "easeOut" }}
              >
                <Image
                  src="/images/payung-kakbah.jpeg"
                  alt="Umbrella"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Embark */}
              <motion.div
                className="relative rounded-2xl bg-gray-50 p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 2 * 0.1, duration: 0.45, ease: "easeOut" }}
              >
                <h3 className="mb-2 font-semibold text-gray-900">
                  Embark on Your Journey
                </h3>
                <p className="text-sm text-gray-600">
                  Travel worry-free with our expert assistance. Begin Your
                  Sacred Journey with Confidence
                </p>
                <span className="absolute top-6 right-6 h-6 w-6 rotate-45 rounded-sm bg-yellow-400" />
              </motion.div>

              {/* Image */}
              <motion.div
                className="overflow-hidden h-70 rounded-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 3 * 0.1, duration: 0.45, ease: "easeOut" }}
              >
                <Image
                  src="/images/masjid.jpeg"
                  alt="Mosque"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Choose Package */}
              <motion.div
                className="relative rounded-2xl bg-gray-50 p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 4 * 0.1, duration: 0.45, ease: "easeOut" }}
              >
                <h3 className="mb-2 font-semibold text-gray-900">
                  Choose Your Package
                </h3>
                <p className="text-sm text-gray-600">
                  Select the package that fits your needs. Comprehensive Hajj
                  Packages
                </p>
                <span className="absolute bottom-4 right-4 h-6 w-6 rotate-45 rounded-sm bg-gray-800" />
              </motion.div>

              {/* Image */}
              <motion.div
                className="overflow-hidden h-70 rounded-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 5 * 0.1, duration: 0.45, ease: "easeOut" }}
              >
                <Image
                  src="/images/interior.jpeg"
                  alt="Interior Mosque"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="px-6 md:px-10 py-16 bg-gray-50">
          {/* Title */}
          <motion.h3
            className="text-center text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Choose Your Package
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0 * 0.1, duration: 0.45, ease: "easeOut" }}
            >
              <Packages
                title="Premium Hajj"
                price="$450"
                features={[
                  "5 Star Hotel",
                  "Visa & Administration",
                  "Private Transportation",
                  "Muthawwif Guidance",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1 * 0.1, duration: 0.45, ease: "easeOut" }}
            >
              <Packages
                title="Family Umrah"
                price="$550"
                highlight
                features={[
                  "Family Friendly Hotel",
                  "Visa & Insurance",
                  "Airport Pickup",
                  "24/7 Support",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 2 * 0.1, duration: 0.45, ease: "easeOut" }}
            >
              <Packages
                title="Ramadan Umrah"
                price="$260"
                features={[
                  "3 Star Hotel",
                  "Visa Processing",
                  "Shared Transportation",
                  "Group Guidance",
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 md:px-10 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
              <h3 className="text-3xl font-bold">Our Gallery</h3>
              <p className="text-gray-500 max-w-md text-sm mt-4 md:mt-0">
                Embark on a Spiritual Journey. Your Trusted Hajj Partner.
                Comprehensive Hajj Packages Tailored to Your Needs. Premium
                accommodation, individual transportation
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-4 grid-rows-3 gap-4">
              {/* Top Left */}
              <GalleryItem src="/images/g1.jpeg" />

              {/* Top Middle */}
              <GalleryItem src="/images/g2.jpeg" />

              {/* Top Right */}
              <GalleryItem src="/images/g3.jpeg" />

              {/* Right Tall */}
              <GalleryItem src="/images/g4.jpeg" className="row-span-2" />

              {/* LEFT Tall */}
              <GalleryItem src="/images/g5.jpeg" className="row-span-2" />

              {/* CENTER BIG */}
              <GalleryItem
                src="/images/g6.jpeg"
                className="col-span-2 row-span-2"
              />

              {/* Bottom Left */}
              <GalleryItem src="/images/g7.jpeg" />

              {/* Bottom Right */}
              <GalleryItem src="/images/g8.jpeg" />
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
  features,
  highlight,
}: {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 shadow transition hover:-translate-y-1 ${
        highlight ? "bg-lime-400 text-black" : "bg-white text-gray-900"
      }`}
    >
      <h4 className="font-bold text-lg mb-2">{title}</h4>

      <p className="text-3xl font-bold mb-6">{price}</p>

      <ul className="space-y-3 text-sm mb-8">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span>✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full rounded-full px-6 py-3 text-sm font-semibold ${
          highlight ? "bg-black text-white" : "bg-lime-400 text-black"
        }`}
      >
        Get Started
      </button>
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
