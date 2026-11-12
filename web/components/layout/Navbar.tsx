"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f7fef8]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(35,67,63,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Sol Álvarez Nutrición — Inicio">
            <LogoSVG />
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold italic text-[#23433f]" style={{ fontFamily: "var(--font-inter)" }}>
                Soledad Alvarez
              </span>
              <span className="text-xs text-[#5b6569]">Nutrición & Salud</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-[#23433f] after:transition-all after:duration-200 ${
                  pathname === link.href
                    ? "text-[#23433f] after:w-full"
                    : "text-[#5c5c5c] hover:text-[#23433f] after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent("Hola Sol, me gustaría reservar una consulta.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#23433f] text-[#f7fef8] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#5b6569] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23433f] focus-visible:ring-offset-2"
            >
              Reservar consulta
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-[#23433f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23433f]"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#f7fef8] z-50 flex flex-col p-8 pt-20 shadow-xl md:hidden"
              aria-label="Menú mobile"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#23433f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23433f] rounded-lg"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>

              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium transition-colors ${
                      pathname === link.href
                        ? "text-[#23433f]"
                        : "text-[#5c5c5c] hover:text-[#23433f]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <a
                href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent("Hola Sol, me gustaría reservar una consulta.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full text-center bg-[#23433f] text-[#f7fef8] px-5 py-3 rounded-full text-base font-medium hover:bg-[#5b6569] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23433f] focus-visible:ring-offset-2"
              >
                Reservar consulta
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoSVG() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#23433f" />
      <path
        d="M18 8 C13 8, 10 11, 10 15 C10 18, 12 20, 15 21 L21 23 C24 24, 26 26, 26 29 C26 32, 23 28, 18 28 C13 28, 10 25, 10 25"
        stroke="#f7fef8"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 10 L24 10 M18 10 L18 27"
        stroke="#c0c481"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
