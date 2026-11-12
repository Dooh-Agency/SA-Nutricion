import Image from "next/image";
import { CONTACT, HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex h-[620px] items-end overflow-hidden bg-olive md:h-[727px]">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Velo oliva como en el original */}
      <div className="absolute inset-0 bg-olive/50" aria-hidden="true" />

      <div className="relative z-10 flex w-full flex-col gap-8 px-6 pb-14 md:flex-row md:items-start md:justify-between md:pb-[76px] md:pl-[11%] md:pr-[4%]">
        <h1 className="animate-fade-up text-[44px] font-normal italic leading-[1.1] tracking-[-0.03em] text-white md:max-w-[680px] md:text-[68px]">
          {HERO.title[0]}
          <br />
          {HERO.title[1]}
        </h1>

        <div
          className="animate-fade-up md:mt-[29px] md:w-[504px]"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-[18px] italic leading-[1.4] text-white">
            {HERO.subtitle}
          </p>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[38px] inline-flex h-[44px] w-[200px] items-center justify-center rounded-md border border-white text-[14px] text-white transition-colors hover:bg-white hover:text-olive"
          >
            {HERO.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
