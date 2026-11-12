import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { SERVICES, TEAM, CONTACT } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Servicios | Sol Álvarez Nutrición",
  description:
    "Nutrición y salud intestinal, lactancia materna, acompañamiento en la maternidad y educación nutricional. Consultas presenciales en Marbella y online.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[50vh] flex flex-col justify-center bg-[#f6d3b5]/40 pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-xs text-[#5b6569] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#23433f] transition-colors">Inicio</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-[#23433f] font-medium">Servicios</span>
          </nav>

          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#5b6569] block mb-4">
              Lo que ofrezco
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-6">Servicios</h1>
            <p className="text-lg text-[#5c5c5c] leading-relaxed max-w-2xl">
              Cada persona es única, y mi acompañamiento también lo es. Trabajo desde una mirada
              integrativa que combina ciencia, experiencia clínica y escucha activa para diseñar
              un plan que se adapte a tu vida real.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services blocks */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-24">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={service.id} delay={0.1}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Number + text */}
                  <div className="relative flex flex-col gap-5">
                    <span
                      className="absolute -top-6 -left-2 text-8xl font-bold text-[#c0c481] select-none pointer-events-none leading-none"
                      style={{ opacity: 0.15 }}
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>
                    <span
                      className="text-xs font-medium uppercase tracking-[0.12em]"
                      style={{ color: service.accentColor }}
                    >
                      Servicio {service.number}
                    </span>
                    <h2 className="text-3xl font-semibold text-[#1a1a1a]">{service.title}</h2>
                    <p className="text-base text-[#5c5c5c] leading-relaxed">{service.description}</p>

                    <a
                      href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 bg-[#23433f] text-[#f7fef8] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#5b6569] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23433f] focus-visible:ring-offset-2 self-start"
                    >
                      Consultar sobre este servicio
                    </a>
                  </div>

                  {/* Bullets */}
                  <div className="bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(35,67,63,0.07)]">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[#5b6569] mb-5">
                      Qué abordamos
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0"
                            style={{ color: service.accentColor }}
                            aria-hidden="true"
                          />
                          <span className="text-sm text-[#5c5c5c] leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-[#f7fef8]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-12 flex justify-center">
            <SectionHeader
              eyebrow="Red interdisciplinaria"
              title="Un equipo integrativo para acompañarte de forma completa"
              description="Cuando lo necesitás, cuento con una red de profesionales especializados para un abordaje integral de tu salud."
              align="center"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.role} delay={i * 0.1}>
                <div className="bg-[#f7fef8] border border-[#c0c481]/50 rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-[#23433f] mb-2">{member.role}</h3>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
