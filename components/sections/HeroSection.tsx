"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Video } from "lucide-react";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#f7fef8] pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-medium uppercase tracking-[0.12em] text-[#5b6569]"
            >
              Nutrición integrativa · Marbella &amp; Online
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-medium text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nutrición enfocada en el{" "}
              <em className="text-[#23433f] not-italic">bienestar integral</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-lg text-[#5c5c5c] leading-relaxed max-w-lg"
            >
              Te acompaño a transformar tu alimentación desde un lugar consciente,
              humano y sostenible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              <Button
                href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent("Hola Sol, me gustaría reservar una consulta.")}`}
                variant="primary"
                size="lg"
                external
              >
                Reservar consulta
              </Button>
              <Button href="/servicios" variant="secondary" size="lg">
                Conocer servicios
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Background blob */}
              <div className="absolute inset-0 bg-[#f6d3b5] rounded-[40%_60%_60%_40%/40%_40%_60%_60%] transform -rotate-6 scale-105" />

              <div className="relative overflow-hidden rounded-[40%_60%_60%_40%/40%_40%_60%_60%] aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt="Sol Álvarez, Licenciada en Nutrición y Puericultora, sonriendo en su consulta"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Badges */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
                <MapPin size={14} className="text-[#23433f]" />
                <span className="text-xs font-medium text-[#1a1a1a]">Presencial · Marbella</span>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
                <Video size={14} className="text-[#5b6569]" />
                <span className="text-xs font-medium text-[#1a1a1a]">Online · Global</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #c0c481 0%, #f6d3b5 50%, #fcba63 100%)", opacity: 0.4 }}
        aria-hidden="true"
      />
    </section>
  );
}
