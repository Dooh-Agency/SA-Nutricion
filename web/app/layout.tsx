import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sol Álvarez | Nutrición & Salud · Marbella y Online",
  description:
    "Licenciada en Nutrición y Puericultora. Acompañamiento personalizado en nutrición integrativa, lactancia materna y salud intestinal. Presencial en Marbella y online.",
  openGraph: {
    title: "Sol Álvarez Nutrición",
    description:
      "Licenciada en Nutrición y Puericultora. Acompañamiento personalizado en nutrición integrativa, lactancia materna y salud intestinal.",
    url: "https://www.solealvarez.com",
    siteName: "Sol Álvarez Nutrición",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#f7fef8] text-[#1a1a1a]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
