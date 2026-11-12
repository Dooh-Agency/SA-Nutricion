"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSnippet() {
  return (
    <section className="py-20 md:py-28 bg-[#fdf0e8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection variant="fadeIn" className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-4 bg-[#f6d3b5]/60 rounded-3xl transform rotate-3" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl aspect-square shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80"
                  alt="Sol Álvarez en consulta nutricional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <AnimatedSection delay={0.1}>
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#5b6569]">
                Quién soy
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">
                Lic. Soledad Álvarez
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                className="text-lg italic text-[#5b6569]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Licenciada en Nutrición · Puericultora · Health Coach
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="text-base text-[#5c5c5c] leading-relaxed">
                Me formé en Argentina y hoy, desde Mijas, acompaño a mujeres y familias
                en procesos de transformación real: sin dietas, sin imposición,
                con escucha activa y mirada integrativa.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 text-[#23433f] font-medium hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23433f] rounded"
              >
                Conocer mi historia completa
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
