import type { Metadata } from "next";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Sol Álvarez Nutrición",
  description:
    "Contactá a Sol Álvarez para reservar tu consulta de nutrición. Atención presencial en Marbella y online.",
};

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687" />
    </svg>
  );
}

export default function ContactoPage() {
  return (
    <>
      {/* Main section */}
      <section className="min-h-screen pt-16 bg-[#f7fef8]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div className="flex flex-col gap-8">
              <AnimatedSection>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#5b6569] block mb-4">
                  Hablemos
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4">Hablemos</h1>
                <p className="text-lg text-[#5c5c5c] leading-relaxed">
                  Podés escribirme por WhatsApp o completar el formulario y te respondo a la brevedad.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3 text-[#5c5c5c] hover:text-[#23433f] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#23433f]/8 flex items-center justify-center group-hover:bg-[#23433f]/15 transition-colors">
                      <Mail size={16} className="text-[#23433f]" />
                    </div>
                    <span className="text-sm">{CONTACT.email}</span>
                  </a>

                  <a
                    href={`tel:+${CONTACT.whatsapp}`}
                    className="flex items-center gap-3 text-[#5c5c5c] hover:text-[#23433f] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#23433f]/8 flex items-center justify-center group-hover:bg-[#23433f]/15 transition-colors">
                      <Phone size={16} className="text-[#23433f]" />
                    </div>
                    <span className="text-sm">+34 665 98 50 26</span>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#23433f]/8 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#23433f]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-[#5c5c5c]">Marbella, España</span>
                      <span className="text-xs text-[#5b6569]">{CONTACT.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#23433f]/8 flex items-center justify-center">
                      <Globe size={16} className="text-[#23433f]" />
                    </div>
                    <span className="text-sm text-[#5c5c5c]">Atención online · Global</span>
                  </div>

                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5c5c5c] hover:text-[#23433f] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#23433f]/8 flex items-center justify-center group-hover:bg-[#23433f]/15 transition-colors">
                      <InstagramIcon />
                    </div>
                    <span className="text-sm">@{CONTACT.instagram}</span>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <a
                  href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent("Hola Sol, me gustaría reservar una consulta.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-medium hover:bg-[#1ebe5d] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                >
                  <WhatsAppIcon />
                  Escribirme por WhatsApp
                </a>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-[0_4px_30px_rgba(35,67,63,0.08)]">
                <h2 className="text-xl font-semibold text-[#1a1a1a] mb-6">Enviame un mensaje</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 bg-[#fdf0e8]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm text-[#5b6569] mb-2 font-medium uppercase tracking-wide">Atención presencial</p>
            <p className="text-base text-[#5c5c5c]">
              Si preferís atención presencial, te recibo en:{" "}
              <strong className="text-[#23433f]">{CONTACT.address}</strong>
            </p>
            {/* TODO: Reemplazar con embed de Google Maps cuando esté disponible */}
            <div className="mt-6 h-48 bg-[#f6d3b5]/40 rounded-2xl flex items-center justify-center border border-[#f6d3b5]">
              <div className="flex flex-col items-center gap-2 text-[#5b6569]">
                <MapPin size={24} />
                <p className="text-sm">Rancho Park, Elviria, Marbella</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
