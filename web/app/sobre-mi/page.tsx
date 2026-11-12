import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Ear, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre Mí | Sol Álvarez Nutrición",
  description:
    "Soy Soledad Álvarez, Licenciada en Nutrición y Puericultora. Conocé mi historia, mi formación y mi mirada sobre la salud integrativa.",
};

const valores = [
  {
    icon: Heart,
    title: "Cercanía",
    description: "Cada consulta es un espacio seguro donde te escucho sin juicios y trabajamos juntas desde la confianza.",
  },
  {
    icon: Ear,
    title: "Escucha activa",
    description: "Antes de cualquier plan, entiendo tu historia, tu contexto y tus objetivos reales.",
  },
  {
    icon: Users,
    title: "Empatía",
    description: "Sé que cambiar hábitos no es fácil. Te acompaño con paciencia, realismo y mucho respeto.",
  },
];

export default function SobreMiPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-[#f7fef8] pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center">
            {/* Image */}
            <AnimatedSection variant="fadeIn" className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-[#f6d3b5] rounded-[60%_40%_40%_60%/60%_60%_40%_40%] transform -rotate-3 scale-105" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[60%_40%_40%_60%/60%_60%_40%_40%] aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
                    alt="Soledad Álvarez, Licenciada en Nutrición y Puericultora"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <div className="flex flex-col gap-5">
              <AnimatedSection delay={0.1}>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#5b6569]">Quién soy</span>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a]">Soy Soledad Álvarez</h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p
                  className="text-xl italic text-[#5b6569]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Lic. en Nutrición · Puericultora · Health Coach
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.25}>
                <p className="text-base text-[#5c5c5c] leading-relaxed">
                  Me formé en Argentina con una profunda vocación por acompañar a las personas en su
                  relación con la comida y la salud. Hoy, desde Mijas, España, trabajo con mujeres
                  y familias que buscan transformar su alimentación de forma real, sin dietas extremas
                  y sin imposición.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-base text-[#5c5c5c] leading-relaxed">
                  Mi mirada es integrativa: creo que la salud no es solo lo que comemos, sino también
                  cómo nos relacionamos con la comida, con nuestro cuerpo y con nuestras emociones.
                  Por eso trabajo con escucha activa, empatía y un enfoque científico actualizado.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#fdf0e8]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#5b6569] block mb-3">Mi mirada</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">Los valores que guían mi trabajo</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor, i) => (
              <AnimatedSection key={valor.title} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#23433f]/8 flex items-center justify-center">
                    <valor.icon size={22} className="text-[#23433f]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">{valor.title}</h3>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed">{valor.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Lema */}
      <section className="py-24 bg-[#23433f]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection variant="fadeIn">
            <blockquote>
              <p
                className="text-xl md:text-2xl italic text-[#f7fef8] leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;Intentar ser una mejor persona que ayer, y aportar al menos un granito de arena
                que ayude a alguien a sentirse mejor.&rdquo;
              </p>
              <footer className="text-[#c0c481] text-base">— Sol Álvarez</footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f7fef8]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-4">¿Empezamos juntas?</h2>
            <p className="text-[#5c5c5c] mb-8">
              Estoy aquí para acompañarte en tu proceso de transformación.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent("Hola Sol, me gustaría reservar una consulta.")}`}
                variant="primary"
                size="lg"
                external
              >
                Reservar consulta
              </Button>
              <Button href="/servicios" variant="secondary" size="lg">
                Ver mis servicios
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
