"use client";
import LandingPageLayout from "@/component/LandingPageLayout";
import Image from "next/image";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const page = () => {
  return (
    <LandingPageLayout>
      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section className="relative h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden">
          {/* IMAGE BACKGROUND */}
          <Image
            src="/images/contact.jpg"
            alt="About Ndestours"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* DARK OVERLAY GRADIENT (biar lebih premium) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-2xl mx-auto text-white"
          >
            <p className="text-xs tracking-widest text-green-400 font-semibold">
              CONTACT US
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Hubungi <span className="text-green-400">Kami</span>
            </h1>

            <p className="text-gray-200 mt-4 text-sm md:text-base">
              Kami siap membantu merencanakan perjalanan, tour, dan event
              terbaik untuk Anda dengan layanan profesional.
            </p>
          </motion.div>
        </section>

        {/* CONTENT */}
        <section className="px-6 md:px-10 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {/* LEFT INFO */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  GET IN TOUCH
                </span>

                <h2 className="text-2xl md:text-3xl font-bold mt-4">
                  Siap untuk{" "}
                  <span className="text-green-700">liburan impian?</span>
                </h2>

                <p className="text-sm text-gray-500 mt-3 max-w-md">
                  Kirim pesan via WhatsApp atau kontak langsung kami untuk
                  konsultasi perjalanan terbaik.
                </p>
              </div>

              {/* INFO CARDS */}
              <div className="space-y-5">
                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Phone className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-sm text-gray-500">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <MapPin className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-sm text-gray-500">Lampung, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Mail className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-500">ndestours@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}
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
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-semibold">Kirim Pesan WhatsApp</h3>
                <p className="text-sm text-gray-500">
                  Isi form dan kami akan segera merespon Anda.
                </p>
              </div>

              <Input label="Nama Lengkap" name="name" />
              <Input label="Nomor WhatsApp" name="phone" />
              <Input label="Destinasi" name="destination" />

              <div className="space-y-1">
                <label className="text-sm font-medium">Pesan</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tulis kebutuhan Anda..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"
              >
                <Send className="w-4 h-4" />
                Kirim via WhatsApp
              </button>
            </motion.form>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center px-6">
          <h3 className="text-xl md:text-2xl font-bold">Butuh respon cepat?</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Hubungi kami langsung via WhatsApp untuk konsultasi instan
          </p>

          <a
            href="https://wa.me/6287718517731"
            target="_blank"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Chat WhatsApp
          </a>
        </section>
      </main>
    </LandingPageLayout>
  );
};

export default page;
function Input({ label, name }: { label: string; name: string }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
        placeholder={label}
      />
    </div>
  );
}
