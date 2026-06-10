"use client";

import { motion } from "framer-motion";
import { Leaf, Baby, Heart, BookOpen } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { staggerContainer } from "@/lib/motion";

const services = [
  {
    icon: Leaf,
    title: "Nutrición y salud intestinal",
    description:
      "Abordaje integrativo del sistema digestivo para recuperar tu bienestar desde adentro. Sin restricciones innecesarias.",
    accentColor: "#5b6569",
  },
  {
    icon: Baby,
    title: "Lactancia materna",
    description:
      "Acompañamiento especializado para que la lactancia sea una experiencia positiva para vos y tu bebé.",
    accentColor: "#fcba63",
  },
  {
    icon: Heart,
    title: "Acompañamiento en la maternidad",
    description:
      "Nutrición y contención integral durante el embarazo, posparto y toda la etapa materna.",
    accentColor: "#f6d3b5",
  },
  {
    icon: BookOpen,
    title: "Educación nutricional",
    description:
      "Aprendé a alimentarte bien de forma definitiva: sin dietas, con herramientas reales y sostenibles.",
    accentColor: "#c0c481",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#f7fef8]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-14 flex justify-center">
          <SectionHeader
            eyebrow="Lo que ofrezco"
            title="Servicios"
            description="Acompañamiento individual y personalizado, con una mirada integrativa que combina ciencia, experiencia clínica y escucha activa."
            align="center"
          />
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>

        <AnimatedSection delay={0.3} className="mt-10 flex justify-center">
          <Button href="/servicios" variant="secondary" size="md">
            Ver todos los servicios
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
