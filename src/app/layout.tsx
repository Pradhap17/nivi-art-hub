import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nivi Art Hub | Handmade Heritage Art | Custom Frames | Home Décor | Coimbatore",
  description:
    "Premium handcrafted miniature frames, mandala art, Lippan art, embroidery, customized gifts, silk thread accessories, home décor, and personalized artworks from Coimbatore, Tamil Nadu.",
  keywords: [
    "Handmade Art",
    "Custom Frames",
    "Miniature Frames",
    "Lippan Art",
    "Mandala Art",
    "Home Décor",
    "Silk Thread Jewellery",
    "Gift Hamper",
    "Terracotta Jewellery",
    "Coimbatore Artist",
    "Custom Portrait",
    "Handcrafted Gifts",
  ],
  authors: [{ name: "Surya", url: "https://instagram.com/nivi_art_hub" }],
  openGraph: {
    title: "Nivi Art Hub | Handmade Heritage Art Studio",
    description:
      "Where traditional South Indian craftsmanship meets contemporary design. Thoughtfully handcrafted with passion, precision, and timeless artistry in Coimbatore.",
    url: "https://niviarthub.com",
    siteName: "Nivi Art Hub",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-gray-800 antialiased selection:bg-[#E91E63] selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
