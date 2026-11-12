import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home | Lic. Sole Alvarez · Nutrición & Salud",
  description:
    "Licenciada en Nutrición y Puericultora, especializada en embarazo, lactancia y salud intestinal. Consultas virtuales o presenciales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
