import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Ndes Tour - Travel, Umroh & Haji | Paket Wisata & Perjalanan Terpercaya",
    template: "%s | Ndes Tour",
  },
  authors: [{ name: "Ndes Tour", url: "https://www.ndestour.com" }],
  description:
    "Ndes Tour menyediakan layanan travel & tours, paket wisata, open trip, serta layanan umroh dan haji terpercaya. Nikmati perjalanan wisata dan ibadah dengan harga terjangkau, aman, dan pelayanan profesional.",
  metadataBase: new URL("https://www.ndestour.com"),
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    keywords:
      "ndes tour, travel indonesia, paket wisata, open trip, umroh, haji, travel umroh terpercaya, tour wisata, jasa travel, liburan murah, perjalanan religi, travel haji dan umroh",
    robots: "index, follow",
  },
  verification: {
    google: "THqDBXkHKgpoKYtE8ZDkdg_Zm-lj_Z05TgsCgbhn1wek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndes Tour - Travel, Umroh & Haji Terpercaya",
    description:
      "Ndes Tour melayani paket wisata, open trip, serta perjalanan umroh dan haji dengan pelayanan profesional dan terpercaya.",
    images: ["https://www.ndestour.com/opengraph-image.jpg"],
  },
  openGraph: {
    title: "Ndes Tour - Travel, Umroh & Haji Terpercaya",
    description:
      "Layanan lengkap Ndes Tour: paket wisata, open trip, serta umroh dan haji dengan pelayanan aman, nyaman, dan terpercaya di Indonesia.",
    url: "https://www.ndestour.com",
    siteName: "Ndes Tour",
    images: [
      {
        url: "https://www.ndestour.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ndes Tour Travel Umroh Haji",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
