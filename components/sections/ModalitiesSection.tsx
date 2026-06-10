"use client";

import { MapPin, Video } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ModalitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f7fef8]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-14 flex justify-center">
          <SectionHeader
            eyebrow="Modalidades de atención"
            title="Te atiendo donde estés"
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col items-center text-center p-10 border-b md:border-b-0 md:border-r border-[#23433f]/10">
              <div className="w-14 h-14 rounded-2xl bg-[#23433f]/8 flex items-center justify-center mb-5">
                <MapPin size={24} className="text-[#23433f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">Presencial</h3>
              <p className="text-[#5c5c5c] leading-relaxed mb-2">
                Centro Kos · Centro Platino, local 7 · Rancho Park, Elviria, Marbella
              </p>
              <p className="text-sm text-[#5b6569] font-medium">Un espacio cuidado y acogedor</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center text-center p-10">
              <div className="w-14 h-14 rounded-2xl bg-[#5b6569]/8 flex items-center justify-center mb-5">
                <Video size={24} className="text-[#5b6569]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">Online</h3>
              <p className="text-[#5c5c5c] leading-relaxed mb-2">
                Desde la comodidad de tu casa, sin importar la distancia.
              </p>
              <p className="text-sm text-[#5b6569] font-medium">Disponible para todo el mundo hispanohablante</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
