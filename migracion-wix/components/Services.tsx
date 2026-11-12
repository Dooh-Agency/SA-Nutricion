import Isotipo from "@/components/Isotipo";
import { CONTACT, SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="servicios" className="relative bg-white">
      {/* Isotipo gigante de fondo, se superpone al borde inferior de "Sobre mí" */}
      <div
        className="pointer-events-none absolute -top-[74px] -left-[242px] h-[638px] w-[638px] text-terracotta opacity-[0.08]"
        aria-hidden="true"
      >
        <Isotipo className="h-full w-full" />
      </div>

      <div className="relative px-6 pt-[160px] pb-[100px] md:px-[92px] md:pt-[260px] md:pb-[135px]">
        <h2 className="text-[32px] leading-none md:text-[38px]">
          {SERVICES.title}
        </h2>
        <p className="mt-[21px] max-w-[1231px] text-[18px] leading-[1.4]">
          {SERVICES.text}
        </p>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[55px] inline-flex h-[44px] w-[160px] items-center justify-center rounded-md border border-sage text-[14px] text-sage transition-colors hover:bg-sage hover:text-white"
        >
          {SERVICES.cta}
        </a>
      </div>
    </section>
  );
}
