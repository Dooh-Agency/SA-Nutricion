"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function QuoteSection() {
  return (
    <section className="py-24 md:py-32 bg-[#23433f]">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <span
          className="absolute top-[-1rem] left-1/2 -translate-x-1/2 text-[120px] leading-none font-serif text-[#c0c481] opacity-20 select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <AnimatedSection variant="fadeIn" delay={0}>
          <blockquote>
            <p
              className="text-2xl md:text-4xl italic leading-snug text-[#f7fef8] relative z-10 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cada pequeño cambio en tu bienestar es un gran paso hacia una vida más plena.
            </p>
            <footer className="text-[#c0c481] text-base">
              Tu nutrición, única como vos.
            </footer>
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
