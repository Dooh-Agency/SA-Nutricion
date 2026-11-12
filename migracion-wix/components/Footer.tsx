import Image from "next/image";
import { CONTACT, FOOTER } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-sand px-6 py-9 md:px-[61px]">
      <div className="flex flex-col gap-8 md:flex-row md:gap-0">
        <div className="md:w-[410px] md:shrink-0">
          <Image
            src="/images/logo-footer.svg"
            alt="Nutrición saludable para el bienestar integral"
            width={308}
            height={92}
            className="h-auto w-[308px]"
          />
          <p className="mt-[26px] text-[16px] font-bold italic text-sage">
            {FOOTER.tagline}
          </p>
        </div>

        <div className="flex-1">
          <p className="text-[21.5px] leading-[1.1]">{FOOTER.heading}</p>
          <ul className="mt-[24px] text-[14px] leading-[1.6] text-olive">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>

        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="self-start text-black transition-colors hover:text-sage"
        >
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}
